import { useState, useEffect } from "react";
import Logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
      setShowScrollTop(window.scrollY > 400);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on link click
  function handleLinkClick() {
    setIsOpen(false);
  }

  // Close menu on Escape
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && !e.target.closest("nav")) {
        setIsOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Careers", href: "#careers" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "h-16 bg-white shadow-lg"
            : "h-18 bg-white shadow-sm"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo + Branding (visible on all screens) */}
            <a href="#home" className="flex items-center gap-2 sm:gap-3 shrink-0">
              <img
                src={Logo}
                alt="S & D Membs"
                className={`object-contain transition-all duration-300 ${
                  isScrolled ? "h-8" : "h-10"
                }`}
              />
              {/* Company name - always visible */}
              <div className="flex flex-col leading-tight">
                <span
                  className={`font-heading font-extrabold text-navy transition-all duration-300 ${
                    isScrolled ? "text-xs sm:text-sm" : "text-sm sm:text-base"
                  }`}
                >
                  S &amp; D MEMBS
                </span>
                <span
                  className={`text-burgundy font-bold tracking-widest transition-all duration-300 hidden sm:block ${
                    isScrolled ? "text-[9px]" : "text-[10px]"
                  }`}
                >
                  SECURITY SERVICES LIMITED
                </span>
              </div>
            </a>

            {/* Desktop Center Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-charcoal hover:text-burgundy font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop Phone CTA + Mobile Toggle */}
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="tel:+2347065772394"
                className="hidden sm:inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-bold px-5 sm:px-6 py-2 rounded text-xs sm:text-sm"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                07065772394
              </a>

              {/* Mobile hamburger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden flex flex-col gap-1.5 w-5 h-5 justify-center"
                aria-label="Toggle menu"
              >
                <span
                  className={`h-0.5 w-full bg-charcoal transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-charcoal transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-charcoal transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Menu Slide-Down */}
          <div
            className={`absolute top-full left-0 right-0 bg-white border-t border-charcoal/10 shadow-lg overflow-hidden transition-all duration-300 lg:hidden ${
              isOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="px-4 sm:px-6 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="block text-charcoal hover:text-burgundy hover:bg-offwhite font-medium text-sm px-3 py-2 rounded transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+2348031234567"
                onClick={handleLinkClick}
                className="block w-full text-center bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-bold px-3 py-2 rounded text-sm mt-3"
              >
                Call:07065772394
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Scroll-to-Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-burgundy text-white shadow-lg flex items-center justify-center hover:bg-burgundy-dark transition-all duration-300 z-40 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* Spacer for sticky nav */}
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "h-16" : "h-18"
        }`}
      />
    </>
  );
}
