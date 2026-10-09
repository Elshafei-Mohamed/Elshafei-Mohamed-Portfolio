/**
 * GoatCounter integration (page-view counting + public total).
 *
 * Recording: the official count.js script registers exactly one page view per
 * document load. GoatCounter only counts on load — it does not hook SPA or
 * hash navigation by default, so in-page anchor links (#work, #contact, …)
 * are never counted as page views. `no_session: true` makes every page view
 * count, including refreshes and repeat visits from the same person
 * (GoatCounter's default session tracking would deduplicate reloads from the
 * same browser for up to 8 hours).
 *
 * Reading: the public counter endpoint
 * `https://<site>.goatcounter.com/counter/TOTAL.json` returns the site-wide
 * total as JSON. It sends `Access-Control-Allow-Origin: *` and is cached
 * server-side for up to 4 hours. It requires the site owner to enable
 * "Allow using the visitor counter" in the GoatCounter dashboard; until then
 * it responds 403 and this module reports the total as unavailable.
 *
 * The site code is public by design — it appears in the tracking script URL
 * that every visitor's browser loads. No private API token or credential is
 * used anywhere in this module.
 */

const SITE = import.meta.env.VITE_GOATCOUNTER_SITE;
const SCRIPT_SRC = "https://gc.zgo.at/count.js";

function isLocalAddress() {
  const { hostname } = window.location;
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "[::1]" ||
    hostname.endsWith(".localhost")
  );
}

let initialized = false;

/**
 * Inject the tracking script. Called once from module scope in main.jsx, so
 * it runs exactly once per document load — a single production page view can
 * never be registered twice.
 *
 * No-op when the site code is not configured, in dev builds, and on local
 * addresses, so development and preview traffic never reaches GoatCounter
 * (GoatCounter also filters local requests server-side by default).
 */
export function initGoatCounter() {
  if (initialized || !SITE) return;
  initialized = true;

  if (!import.meta.env.PROD || isLocalAddress()) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = SCRIPT_SRC;
  script.dataset.goatcounter = `https://${SITE}.goatcounter.com/count`;
  script.dataset.goatcounterSettings = JSON.stringify({ no_session: true });
  document.head.appendChild(script);
}

/**
 * Fetch the site-wide total visit count. Returns a formatted string
 * ("12,345"), or null when the counter is unavailable (not configured,
 * request failure, empty/malformed payload, or the visitor-counter setting
 * disabled on the GoatCounter site).
 *
 * A missing/empty/non-numeric `count` is reported as unavailable — it is
 * never coerced to 0, so an error page or truncated payload can never be
 * mistaken for a real zero.
 */
export async function fetchTotalVisits() {
  if (!SITE) return null;

  try {
    const res = await fetch(
      `https://${SITE}.goatcounter.com/counter/TOTAL.json`,
    );
    if (!res.ok) return null;

    const data = await res.json();
    const raw = data?.count;
    if (typeof raw !== "number" && typeof raw !== "string") return null;

    const text = String(raw).trim();
    // Must be a plain non-negative integer, optionally comma-grouped.
    if (!/^[0-9][0-9,\s]*$/.test(text)) return null;

    const total = Number(text.replace(/[^0-9]/g, ""));
    if (!Number.isFinite(total) || total < 0) return null;

    return total.toLocaleString("en-US");
  } catch {
    return null;
  }
}
