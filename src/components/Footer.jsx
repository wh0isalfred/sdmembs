import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { COMPANY } from "../data/company";

const QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/aboutus" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/#industries" },
  { label: "Careers", to: "/#careers" },
  { label: "Contact Us", to: "/#contact" },
  { label: "Licensing & Compliance", to: "/aboutus#licensing" },
];

const SERVICES = [
  { label: "Residential Security", id: "residential-security" },
  { label: "Commercial & Industrial Security", id: "commercial-industrial-security" },
  { label: "Armed & Unarmed Guards", id: "armed-unarmed-guards" },
  { label: "K9 Security", id: "k9-security" },
  { label: "Mobile Patrol", id: "mobile-patrol" },
  { label: "CCTV & Access Control", id: "cctv-access-control" },
  { label: "Security Consultancy", id: "security-consultancy" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white">
      <div className="container-page py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo} alt="S & D Membs logo" loading="lazy" className="h-14 w-auto object-contain rounded bg-white p-1" />
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
          {/* No social profile links here yet — client has not supplied real
              Facebook/Instagram/LinkedIn URLs. Add them once real links exist
              rather than shipping placeholder "#" links. */}
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-sm font-heading font-bold uppercase tracking-wider text-white/60 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-white/75 hover:text-white transition-colors">
                  {l.label}
                </Link>
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
              <li key={s.id}>
                <Link
                  to={`/services#${s.id}`}
                  className="text-sm text-white/75 hover:text-white transition-colors"
                >
                  {s.label}
                </Link>
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
              <span>{COMPANY.headOfficeAddress}.</span>
            </li>
            <li className="flex gap-2.5">
              <PhoneIcon />
              <span>
                <a href={COMPANY.phone.main.href} className="hover:text-white transition-colors">{COMPANY.phone.main.display}</a>
                {" "}&middot;{" "}
                <a href={COMPANY.phone.secondary.href} className="hover:text-white transition-colors">{COMPANY.phone.secondary.display}</a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <MailIcon />
              <a href={`mailto:${COMPANY.email}`} className="hover:text-white transition-colors">
                {COMPANY.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <ClockIcon />
              <span>{COMPANY.hours.office} &middot; Field Ops: {COMPANY.hours.fieldOps}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>&copy; {year} {COMPANY.legalName} &middot; {COMPANY.rcNumber}. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href={COMPANY.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
      >
        <WhatsAppIcon />
      </a>
    </footer>
  );
}

function PinIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" className="shrink-0 mt-0.5 text-white/60"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" className="shrink-0 mt-0.5 text-white/60"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
}
function MailIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" className="shrink-0 mt-0.5 text-white/60"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>;
}
function ClockIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" focusable="false" className="shrink-0 mt-0.5 text-white/60"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
}
function WhatsAppIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden="true" focusable="false">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1s-.7.9-.9 1-.3.2-.6.1a7.7 7.7 0 0 1-2.3-1.4 8.5 8.5 0 0 1-1.6-2c-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4s0-.3 0-.4-.6-1.5-.8-2-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3a2.6 2.6 0 0 0-.8 1.9c0 1.1.8 2.2.9 2.4.1.1 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.6.2 1.1.1 1.5.1.5-.1 1.7-.7 1.9-1.3s.2-1.2.2-1.3-.2-.2-.4-.3z"/>
      <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm0 18.3a8.3 8.3 0 0 1-4.2-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3z"/>
    </svg>
  );
}
