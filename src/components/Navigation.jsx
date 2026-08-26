import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef(null);
  const wasOpenRef = useRef(false);

  // Close on Escape, return focus to the toggle when the menu closes
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen]);

  useEffect(() => {
    if (wasOpenRef.current && !isOpen) toggleRef.current?.focus();
    wasOpenRef.current = isOpen;
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line">
      <nav
        aria-label="Primary"
        className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between"
      >
        <a
          href="#top"
          className="font-semibold tracking-tight text-lg text-primary"
          aria-label="Elshafei, back to top"
        >
          elshafei<span className="text-accent">.</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-secondary hover:text-primary transition-colors duration-150 group"
            >
              {item.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px bg-accent transition-all duration-150 group-hover:w-full"
                aria-hidden="true"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 inline-flex items-center h-9 px-4 rounded-[12px] bg-primary text-bg text-sm font-medium hover:bg-accent transition-colors duration-150"
          >
            Hire me
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          ref={toggleRef}
          className="md:hidden p-2 -mr-2 text-primary"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile menu (true overlay: the one place a shadow is allowed) */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="menu-in absolute top-full inset-x-0 bg-surface border-b border-line md:hidden shadow-[0_8px_16px_rgb(0_0_0/0.35)]"
          >
            <div className="flex flex-col px-6 py-3">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3.5 text-base text-secondary hover:text-primary border-b border-line last:border-0 transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default React.memo(Navigation);
