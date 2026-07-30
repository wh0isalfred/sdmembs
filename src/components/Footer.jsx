import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.webp";

const QUICK_LINKS = [
  { label: "Home", href: "/", sectionId: null },
  { label: "About Us", href: "/aboutus", sectionId: null },
  { label: "Services", href: "/services", sectionId: null },
  { label: "Industries", href: "#", sectionId: "industries" },
  { label: "Careers", href: "#", sectionId: "careers" },
  { label: "Contact Us", href: "#", sectionId: "contact" },
];

const SERVICES = [
  "Residential Security",
  "Commercial & Industrial Security",
  "Armed & Unarmed Guards",
  "K9 Security",
  "Mobile Patrol",
  "CCTV, Access Control & Consultancy",
];

// const SOCIALS = ["Facebook", "LinkedIn", "Twitter", "Instagram"];

export default function Footer() {
  const year = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  // Handle section navigation - smart routing
  function handleSectionClick(e, sectionId) {
    e.preventDefault();
    
    if (location.pathname === "/" || location.pathname === "/home") {
      // Already on home, just scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 50);
    } else {
      // Not on home, navigate to home then scroll
      navigate("/");
      // Wait longer for page to render
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  }

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="S & D Membs logo" className="h-14 w-auto object-contain rounded bg-white p-1" />
            <span className="leading-tight">
              <span className="block font-heading font-bold text-base">S &amp; D MEMBS</span>
              <span className="block text-[10px] font-semibold tracking-[0.18em] uppercase text-white/60">
                Security Services
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-xs">
            Professional security solutions you can trust. Protecting people,
            property and peace of mind across Nigeria.
          </p>
          {/* Social icons removed — client has not yet provided real Facebook/Instagram/LinkedIn URLs.
              Re-add the SOCIALS.map(...) block below once real links are supplied; don't ship dead "#" links.
          <div className="flex gap-3 mt-5">
            {SOCIALS.map((label) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:border-white hover:text-navy-dark transition-colors"
              >
                <SocialGlyph label={label} />
              </a>
            ))}
          </div>
          */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-white/60 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.href}>
                <a 
                  href={l.href}
                  onClick={(e) => {
                    if (l.sectionId) {
                      handleSectionClick(e, l.sectionId);
                    } else {
                      navigate(l.href);
                    }
                  }}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-white/60 mb-4">
            Our Services
          </h3>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s}>
                <a 
                  href="#"
                  onClick={(e) => handleSectionClick(e, "services")}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Head Office */}
        <div>
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-white/60 mb-4">
            Head Office
          </h3>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2.5">
              <PinIcon />
              <span>32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria.</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon />
              <span>0803 709 5470 &middot; 0707 231 6078</span>
            </li>
            <li className="flex gap-2.5">
              <MailIcon />
              <span>sanddmembs@gmail.com</span>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon />
              <span>Mon &ndash; Fri: 8am &ndash; 5pm &middot; Field Ops: 24/7</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>&copy; {year} S &amp; D Membs Security Services Limited &middot; RC 933870. All Rights Reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/2349169426900"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}

// function SocialGlyph({ label }) {
//   const c = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "currentColor" };
//   if (label === "Facebook")
//     return <svg {...c}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.16 3.63 14.98 3.5 13.6 3.5c-2.87 0-4.8 1.75-4.8 4.95v2.45H5.9V14H8.8v7h4.7z"/></svg>;
//   if (label === "LinkedIn")
//     return <svg {...c}><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21H9z"/></svg>;
//   if (label === "Twitter")
//     return <svg {...c}><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.2 4.6a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.9A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.3z"/></svg>;
//   return <svg {...c}><rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2"/><circle cx="17.2" cy="6.8" r="1.1"/></svg>;
// }

function PinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-white/60"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-white/60"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-white/60"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>;
}
function ClockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 mt-0.5 text-white/60"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
}
function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1s-.7.9-.9 1-.3.2-.6.1a7.7 7.7 0 0 1-2.3-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4s0-.3 0-.4-.6-1.5-.8-2-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.6 2.6 0 0 0-.8 1.9c0 1.1.8 2.2.9 2.4.1.1 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.7-.7 1.9-1.3s.2-1.2.2-1.3-.2-.2-.4-.3z"/>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z"/>
    </svg>
  );
}
