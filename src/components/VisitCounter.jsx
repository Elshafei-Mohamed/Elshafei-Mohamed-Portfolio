import React, { useEffect, useState } from "react";
import { fetchTotalVisits } from "../lib/goatcounter";

/**
 * Total visit counter, rendered in the gap between the hero content and the
 * work section as a compact, centered statistics card.
 *
 * The count comes from the live GoatCounter counter endpoint. While loading,
 * and whenever the count is unavailable (request failure, invalid/empty
 * payload, or the visitor-counter setting disabled on the GoatCounter site),
 * the component renders nothing — a placeholder or fabricated number is never
 * shown.
 */
function VisitCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let cancelled = false;
    fetchTotalVisits().then((total) => {
      if (!cancelled && total !== null) setCount(total);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <div className="rise mt-12 flex justify-center lg:mt-16">
      <div
        className="relative max-w-full overflow-hidden rounded-2xl border border-line bg-raised px-6 py-4 [box-shadow:0_0_0_1px_rgba(224,141,79,0.06),0_20px_45px_-28px_rgba(0,0,0,0.9),0_0_30px_-12px_rgba(224,141,79,0.4)] sm:px-9 sm:py-5"
      >
        {/* Restrained orange hairline across the top edge */}
        <span
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
          aria-hidden="true"
        />

        {/* One centered row on tablet/desktop (sm+). On very narrow screens the
            full labels cannot share a line at this size, so the description
            deliberately wraps below a label + count line instead of overflowing. */}
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center sm:flex-nowrap sm:gap-x-5">
          <span className="whitespace-nowrap font-mono text-xs font-bold uppercase tracking-[0.14em] text-white sm:text-sm">
            Portfolio traffic
          </span>
          <span className="whitespace-nowrap font-mono text-3xl font-bold leading-none tracking-tight text-white tabular-nums [text-shadow:0_0_18px_rgba(224,141,79,0.4)] sm:text-4xl">
            {count}
          </span>
          <span className="whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.14em] text-white sm:text-sm">
            Total visits since launch
          </span>
        </p>
      </div>
    </div>
  );
}

export default React.memo(VisitCounter);
