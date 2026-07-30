import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Services() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Same smart-scroll pattern used in Navbar/Footer so the CTA works correctly
  // from a routed page like /services, not just from the homepage.
  function handleContactClick(e) {
    e.preventDefault();
    if (location.pathname === "/" || location.pathname === "/home") {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  }

  const SERVICES = [
    {
      title: "Residential Security",
      desc: "Dedicated protection for homes, estates and communities — trained gate officers, visitor management, and smart access control systems that keep your household safe around the clock.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      alt: "Security officer stationed at a residential estate gate",
      Icon: HomeIcon,
    },
    {
      title: "Commercial & Industrial Security",
      desc: "Tailored security solutions for offices, retail stores, warehouses, factories and other business environments — built around how your operation actually runs, not a one-size template.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      alt: "Corporate office building entrance",
      Icon: BriefcaseIcon,
    },
    {
      title: "Armed & Unarmed Guards",
      desc: "Highly trained, licensed and disciplined personnel available in both armed and unarmed capacities, matched to the risk level of your site and ready to deter and respond effectively.",
      img: "https://images.unsplash.com/photo-1595535373587-8b0b0dae2bfc?q=80&w=1200&auto=format&fit=crop",
      alt: "Licensed security officer on duty",
      Icon: ArmedIcon,
    },
    {
      title: "K9 Security Services",
      desc: "Our specialized K9 units provide effective deterrence, detection and response for high-risk situations, working alongside our handlers on patrol and search operations.",
      img: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=1200&auto=format&fit=crop",
      alt: "K9 security unit on patrol",
      Icon: PawIcon,
    },
    {
      title: "Mobile Patrol & Rapid Response",
      desc: "24/7 mobile patrols and rapid response services, coordinated by two-way radio, to ensure quick intervention across residential, commercial and industrial sites whenever you need it.",
      img: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?q=80&w=1200&auto=format&fit=crop",
      alt: "Security patrol vehicle",
      Icon: CarIcon,
    },
    {
      title: "CCTV Monitoring & Access Control",
      desc: "Advanced surveillance systems and access control solutions for real-time monitoring, giving you visibility over your property and a clear record whenever you need one.",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
      alt: "Security operations monitoring room with CCTV screens",
      Icon: CctvIcon,
    },
    {
      title: "Security Consultancy",
      desc: "We assess your risk profile and provide expert advice — including investigations and the supply of two-way communication equipment — to develop a security strategy tailored to your site.",
      img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
      alt: "Security consultant reviewing a site risk assessment",
      Icon: ConsultIcon,
    },
  ];

  const INDUSTRIES = [
    { label: "Schools", Icon: SchoolIcon },
    { label: "Hospitals", Icon: HospitalIcon },
    { label: "Banks", Icon: BankIcon },
    { label: "Hotels", Icon: HotelIcon },
    { label: "Shopping Malls", Icon: MallIcon },
    { label: "Government", Icon: GovIcon },
    { label: "Oil & Gas", Icon: OilIcon },
    { label: "Construction Sites", Icon: ConstructionIcon },
    { label: "Residential Estates", Icon: HouseIcon },
    { label: "Warehouses & Factories", Icon: OfficeIcon },
    { label: "Religious Organizations", Icon: ChurchIcon },
  ];

  return (
    <div className="page-enter">
      {/* HERO — split layout: headline left, officer photo right (per inspo) */}
      <section className="relative bg-white pt-28 sm:pt-32 pb-0 overflow-hidden">
        <div className="container-page grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-12 sm:py-16 relative z-10">
            <p className="eyebrow mb-4">
              What We Do
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl text-charcoal leading-[1.1] mb-5">
              Security Solutions <br className="hidden sm:block" />
              You Can Rely On
            </h1>
            <p className="text-charcoal/65 text-base sm:text-lg leading-relaxed max-w-md">
              We deliver professional, reliable and proactive security services
              tailored to protect what matters most to you.
            </p>
          </div>

          <div className="relative h-[280px] sm:h-[380px] lg:h-[440px]">
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop"
              alt="S & D Membs security officer on duty beside a patrol vehicle"
              className="w-full h-full object-cover rounded-lg lg:rounded-none lg:rounded-l-2xl shadow-card"
            />
            {/* Soft blend into the white hero on large screens */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
          </div>
        </div>
      </section>

      {/* SERVICES — alternating image/text rows */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <p className="eyebrow mb-3">
              Our Services
            </p>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-charcoal">
              Comprehensive Security Services
            </h2>
            <p className="text-charcoal/60 mt-4 leading-relaxed">
              From manned guarding to advanced surveillance, we provide
              end-to-end security solutions designed around your needs.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-20">
            {SERVICES.map(({ title, desc, img, alt, Icon }, i) => (
              <div
                key={title}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${
                  i % 2 === 1 ? "lg:[direction:rtl]" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-64 sm:h-80 object-cover rounded-lg shadow-card"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                  <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center text-navy mb-4">
                    <Icon />
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-charcoal mb-4">
                    {title}
                  </h3>
                  <p className="text-charcoal/65 leading-relaxed max-w-lg">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES — icon grid, all 11 real industries from the intake form */}
      <section className="py-20 sm:py-24 bg-offwhite">
        <div className="container-page">
          <p className="eyebrow text-center mb-3">
            Industries We Protect
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-center text-charcoal mb-14">
            Trusted Across Multiple Industries
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
            {INDUSTRIES.map(({ label, Icon }) => (
              <div key={label} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-navy/15 flex items-center justify-center group-hover:border-burgundy group-hover:-translate-y-1 transition-all duration-300 shadow-card">
                  <Icon />
                </div>
                <p className="text-sm font-semibold text-charcoal/80">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-navy-dark py-14">
        <div className="container-page flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-1">
              Need a Security Solution?
            </h3>
            <p className="text-white/70">
              Let's discuss how we can help protect what matters to you.
            </p>
          </div>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 btn-primary font-bold px-7 py-3.5 rounded whitespace-nowrap"
          >
            Request a Consultation
            <ArrowRightIcon />
          </a>
        </div>
      </section>
    </div>
  );
}

/* ============================================================================
   ICONS — mirrors the badge/industry icon patterns already used on Home/About
============================================================================ */
const badgeSvg = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };

function HomeIcon() {
  return <svg {...badgeSvg}><path d="m3 11 9-8 9 8" /><path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" /><path d="M9 21v-6h6v6" /></svg>;
}
function BriefcaseIcon() {
  return <svg {...badgeSvg}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
}
function ArmedIcon() {
  return <svg {...badgeSvg}><path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" /><path d="M12 8v5M9.5 10.5h5" /></svg>;
}
function PawIcon() {
  return <svg {...badgeSvg}><circle cx="7" cy="9" r="1.6" /><circle cx="12" cy="6.5" r="1.6" /><circle cx="17" cy="9" r="1.6" /><path d="M12 12c-2.5 0-4.5 2-4.5 4 0 1.4 1.1 2.3 2.4 2.3.9 0 1.5-.4 2.1-.4s1.2.4 2.1.4c1.3 0 2.4-.9 2.4-2.3 0-2-2-4-4.5-4z" /></svg>;
}
function CarIcon() {
  return <svg {...badgeSvg}><path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" /><path d="M4 13h16v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><circle cx="7.5" cy="15.5" r="0.6" /><circle cx="16.5" cy="15.5" r="0.6" /></svg>;
}
function CctvIcon() {
  return <svg {...badgeSvg}><path d="M3 7l9-4 9 4" /><rect x="5" y="7" width="14" height="4" rx="1" /><path d="M12 11v10M8 21h8" /><circle cx="17" cy="9" r="1" fill="currentColor" stroke="none" /></svg>;
}
function ConsultIcon() {
  return <svg {...badgeSvg}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /><path d="M9 11h4M11 9v4" /></svg>;
}
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

const industryStroke = { fill: "none", stroke: "#1F4A8A", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
function SchoolIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="m22 10-10-5L2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/></svg>; }
function HospitalIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M12 8v6M9 11h6"/></svg>; }
function BankIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M3 10 12 4l9 6"/><path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 21h18"/></svg>; }
function HotelIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M2 21V7l7-4v18M9 21V11l7-4v14M16 12h6v9"/></svg>; }
function HouseIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="m3 12 9-9 9 9"/><path d="M5 10v11h14V10"/></svg>; }
function ConstructionIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><rect x="2" y="14" width="6" height="7"/><rect x="16" y="14" width="6" height="7"/><path d="M8 21h8M6 14V9l6-5 6 5v5"/></svg>; }
function MallIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M3 9h18l-1.5 11h-15z"/><path d="M8 9V6a4 4 0 0 1 8 0v3"/></svg>; }
function GovIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="m3 10 9-6 9 6"/><path d="M5 10v9M19 10v9M3 21h18M9 21v-6h6v6"/></svg>; }
function OilIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M12 2s5 5.5 5 10a5 5 0 0 1-10 0c0-4.5 5-10 5-10z"/></svg>; }
function OfficeIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><rect x="4" y="3" width="16" height="18"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/></svg>; }
function ChurchIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M12 2v4M10 4h4"/><path d="M12 8v13M6 21V11l6-5 6 5v10"/><path d="M9 21v-6h6v6"/></svg>; }
