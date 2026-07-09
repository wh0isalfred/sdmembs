import { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav
        className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Brand */}
        <a href="#home" className="flex items-center gap-3 shrink-0" aria-label="S & D Membs Security Services — home">
          <img
            src={logo}
            alt="S & D Membs Security Services logo"
            className={`w-auto object-contain transition-all duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
          <span className="hidden sm:block leading-tight">
            <span className="block font-heading font-bold text-base lg:text-lg text-charcoal tracking-tight">
              S &amp; D MEMBS
            </span>
            <span className="block text-[10px] lg:text-xs font-semibold tracking-[0.18em] uppercase text-burgundy">
              Security Services Limited
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-semibold text-charcoal hover:text-navy transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop phone CTA */}
        <a
          href="tel:08031234567"
          className="hidden lg:flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white text-sm font-semibold px-4 py-2.5 rounded"
        >
          <PhoneIcon />
          0803 123 4567
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-charcoal"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-charcoal/10 bg-white">
          <ul className="px-4 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base font-semibold text-charcoal hover:text-navy border-b border-charcoal/5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-5 pt-1 flex flex-col gap-3">
            <a
              href="tel:08031234567"
              className="flex items-center justify-center gap-2 bg-burgundy text-white text-sm font-semibold px-4 py-3 rounded"
            >
              <PhoneIcon />
              Call: 0803 123 4567
            </a>
            <a
              href="https://wa.me/2348031234567"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 border border-navy text-navy text-sm font-semibold px-4 py-3 rounded"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
