import { personalInfo } from "../data/portfolioData";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="text-lg font-semibold tracking-tight text-primary">
              El_Shafei_1<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-xs text-sm text-secondary">
              {personalInfo.tagline}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-col sm:items-end gap-2 text-sm"
          >
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-secondary hover:text-primary transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-5 border-t border-line flex justify-center">
          <p className="font-mono text-xs text-muted text-center">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
