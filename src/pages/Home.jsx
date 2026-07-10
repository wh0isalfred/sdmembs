import { useEffect, useRef, useState } from "react";
import NigeriaMap from "../assets/ng.svg";
/**
 * S & D Membs Security Services — Home page.
 *
 * Everything for the landing page lives in this one file: every section is a
 * local component defined below, and all icons (including the logo mark) are
 * inline SVG. Navbar and Footer are handled separately in your components.
 *
 * Requires the Tailwind theme tokens set up earlier:
 *   navy / burgundy / offwhite / charcoal
 *   font-heading (Plus Jakarta Sans) / font-body (Source Sans 3)
 * and the .fade-up utility in index.css.
 */

/* ----------------------------------------------------------------------------
   Scroll-reveal hook: adds "is-visible" the first time an element enters the
   viewport, triggering the .fade-up CSS transition. Kept local so this page
   is self-contained.
---------------------------------------------------------------------------- */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <RecruitmentSection />
      {/* <TestimonialsSection /> */}
      <CoverageSection />
      <CtaBannerSection />
      <ContactSection />
    </>
  );
}

/* ============================================================================
   HERO + TRUST STRIP
============================================================================ */
function HeroSection() {
  const TRUST_ITEMS = [
    { label: "Licensed Security Company", Icon: ShieldIcon },
    { label: "Highly Trained & Vetted Personnel", Icon: TeamIcon },
    { label: "24/7 Operations & Monitoring", Icon: ClockIcon },
    { label: "Residential & Commercial Experts", Icon: BuildingIcon },
    { label: "Rapid Response Guaranteed", Icon: BoltIcon },
  ];

  return (
    <section id="home" className="relative">
      <div className="relative bg-charcoal min-h-[640px] sm:min-h-[600px] flex items-end sm:items-center">
        {/* Placeholder photography: officers standing professionally beside a patrol vehicle */}
        <img
          src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1800&auto=format&fit=crop"
          alt="S & D Membs security officers standing professionally beside a patrol vehicle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-charcoal/30" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 w-full">
          <div className="max-w-2xl">
            <p className="text-white/70 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Professional. Reliable. Always Alert.
            </p>
            <h1 className="text-white font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
              Protecting People, Property{" "}
              <span className="text-white">&amp; Peace of Mind.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Trusted residential and commercial security services across
              Nigeria, delivering highly trained personnel, mobile patrols and
              tailored protection solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-semibold px-6 py-3.5 rounded"
              >
                Get a Free Consultation <ArrowRightIcon />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-white/40 hover:bg-white/10 transition-colors text-white font-semibold px-6 py-3.5 rounded"
              >
                Our Services <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip — overlaps hero bottom edge on larger screens */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-card rounded-lg sm:-mt-10 relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x-0 sm:divide-x divide-charcoal/10 py-8">
          {TRUST_ITEMS.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 px-4 py-3">
              <Icon />
              <p className="text-xs sm:text-sm font-semibold text-charcoal max-w-[10rem]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   ABOUT
============================================================================ */
/* ============================================================================
   ABOUT
============================================================================ */
function AboutSection() {
  const ref = useReveal();

  const PILLARS = [
    {
      title: "Our Mission",
      body: "To provide world-class security services that ensure the safety of lives and property.",
      Icon: TargetIcon,
    },
    {
      title: "Our Vision",
      body: "To be Nigeria's most trusted security company, setting the standard for excellence.",
      Icon: EyeIcon,
    },
    {
      title: "Our Values",
      body: "Integrity, Professionalism, Vigilance, Reliability and Respect.",
      Icon: ShieldCheckIcon,
    },
  ];

  return (
    <section id="about" ref={ref} className="fade-up py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          {/* Placeholder photography: CCTV monitoring room */}
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
            alt="Security officer monitoring live CCTV feeds in the operations room"
            className="w-full h-[420px] sm:h-[480px] object-cover rounded-lg shadow-card"
          />
        </div>

        <div>
          <p className="text-burgundy font-bold text-sm tracking-[0.2em] uppercase mb-3">
            About Us
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight mb-5">
            Your Security is Our{" "}
            <span className="text-burgundy">Responsibility.</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            S &amp; D Membs Security Services Limited is a leading security
            provider headquartered in Port Harcourt, Rivers State. We deliver
            professional security solutions to individuals, businesses and
            organizations across Nigeria with integrity, discipline and
            excellence.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {PILLARS.map(({ title, body, Icon }) => (
              <div key={title} className="border-t-2 border-navy/15 pt-4">
                <Icon />
                <h3 className="font-heading font-bold text-sm mt-3 mb-1.5">{title}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-semibold px-6 py-3 rounded text-sm"
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   SERVICES — vertical cards with overlapping icon badge
============================================================================ */
function ServicesSection() {
  const ref = useReveal();

  const SERVICES = [
    {
      title: "Residential Security",
      desc: "Estate security, gate officers, visitor management and 24/7 protection.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=900&auto=format&fit=crop",
      alt: "Security officer stationed at a residential estate gate",
      Icon: HomeIcon,
    },
    {
      title: "Commercial Security",
      desc: "Office buildings, factories, warehouses, banks, hotels and corporate facilities.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
      alt: "Corporate office building entrance",
      Icon: BriefcaseIcon,
    },
    {
      title: "Armed Security",
      desc: "Licensed armed officers for high-risk areas and sensitive environments.",
      img: "https://images.unsplash.com/photo-1595535373587-8b0b0dae2bfc?q=80&w=900&auto=format&fit=crop",
      alt: "Licensed armed security officer on duty",
      Icon: ArmedIcon,
    },
    {
      title: "K9 Security",
      desc: "Dog patrols, detection, search operations and high visibility deterrence.",
      img: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=900&auto=format&fit=crop",
      alt: "K9 security unit on patrol",
      Icon: PawIcon,
    },
    {
      title: "Mobile Patrol",
      desc: "Vehicle patrols, random inspections and emergency response across sites.",
      img: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?q=80&w=900&auto=format&fit=crop",
      alt: "Security patrol vehicle",
      Icon: CarIcon,
    },
    {
      title: "Event Security",
      desc: "Conferences, concerts, churches, VIP events and private gatherings.",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
      alt: "Event security personnel at a venue",
      Icon: GroupIcon,
    },
  ];

  return (
    <section id="services" ref={ref} className="fade-up py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-burgundy font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Our Services
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight">
            Comprehensive Security Solutions{" "}
            <span className="text-burgundy">Tailored to You.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-4">
          {SERVICES.map(({ title, desc, img, alt, Icon }) => (
            <div
              key={title}
              className="group bg-white rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image with overlapping icon badge */}
              <div className="relative">
                <div className="h-44 xl:h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-12 h-12 rounded-full bg-text text-white flex items-center justify-center shadow-md ring-4 ring-white">
                  <Icon />
                </div>
              </div>

              {/* Text */}
              <div className="pt-10 pb-7 px-5 text-center flex flex-col flex-1">
                <h3 className="font-heading font-bold text-base leading-tight mb-2.5">
                  {title}
                </h3>
                <p className="text-xs text-charcoal/60 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-semibold px-6 py-3.5 rounded"
          >
            View All Services
            <ArrowRightIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   WHY CHOOSE US — stats band
============================================================================ */
function WhyChooseUsSection() {
  const ref = useReveal();

  const STATS = [
    { value: "15+", label: "Years Experience", sub: "Delivering trusted security solutions." },
    { value: "500+", label: "Guards Deployed", sub: "Highly trained personnel across multiple sectors." },
    { value: "24/7", label: "Support", sub: "Round-the-clock operations and monitoring." },
    { value: "100%", label: "Commitment", sub: "Dedicated to professionalism, safety and excellence." },
  ];

  return (
    <section ref={ref} className="fade-up bg-navy py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-white/60 text-center font-bold text-sm tracking-[0.2em] uppercase mb-10">
          Why Choose Us
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center border-l border-white/15 first:border-l-0 px-4">
              <p className="font-heading font-extrabold text-4xl sm:text-5xl text-white mb-1">
                {s.value}
              </p>
              <p className="text-white font-semibold text-sm sm:text-base mb-1.5">{s.label}</p>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   INDUSTRIES SERVED
============================================================================ */
function IndustriesSection() {
  const ref = useReveal();

  const INDUSTRIES = [
    { label: "Schools", Icon: SchoolIcon },
    { label: "Hospitals", Icon: HospitalIcon },
    { label: "Banks", Icon: BankIcon },
    { label: "Hotels", Icon: HotelIcon },
    { label: "Residential Estates", Icon: HouseIcon },
    { label: "Construction Sites", Icon: ConstructionIcon },
    { label: "Shopping Malls", Icon: MallIcon },
    { label: "Government Offices", Icon: GovIcon },
    { label: "Oil & Gas Facilities", Icon: OilIcon },
    { label: "Corporate Offices", Icon: OfficeIcon },
  ];

  return (
    <section id="industries" ref={ref} className="fade-up py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-burgundy text-center font-bold text-sm tracking-[0.2em] uppercase mb-3">
          Industries We Serve
        </p>
        <h2 className="font-heading font-extrabold text-3xl text-center mb-14">
          Trusted Across Every Sector
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
          {INDUSTRIES.map(({ label, Icon }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-14 h-14 rounded-full border-2 border-navy/15 flex items-center justify-center group-hover:border-burgundy group-hover:-translate-y-1 transition-all duration-300">
                <Icon />
              </div>
              <p className="text-sm font-semibold text-charcoal/80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   RECRUITMENT — Join Our Team
============================================================================ */
function RecruitmentSection() {
  const ref = useReveal();

  const REQUIREMENTS = [
    "Minimum SSCE certificate",
    "Between 20 and 45 years of age",
    "Physically fit with no criminal record",
    "Prior security, military or para-military experience is an advantage",
  ];

  return (
    <section id="careers" ref={ref} className="fade-up py-20 sm:py-24 bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-burgundy font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Careers
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-5">
            Join Our Team
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8 max-w-lg">
            We are always looking for disciplined, reliable individuals ready
            to build a career in professional security services. If you meet
            the requirements below, we&rsquo;d like to hear from you.
          </p>

          <ul className="space-y-3 mb-9">
            {REQUIREMENTS.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm text-charcoal/80">
                <CheckIcon />
                {r}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-navy hover:bg-navy-dark transition-colors text-white font-semibold px-6 py-3.5 rounded"
          >
            Apply Now
          </a>
        </div>

        <div>
          {/* Placeholder photography: uniform inspection */}
          <img
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1100&auto=format&fit=crop"
            alt="Security officers lined up for a uniform inspection"
            className="w-full h-[380px] sm:h-[440px] object-cover rounded-lg shadow-card"
          />
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   TESTIMONIALS
============================================================================ */
// function TestimonialsSection() {
//   const ref = useReveal();

//   const TESTIMONIALS = [
//     {
//       quote:
//         "Since we engaged S & D Membs, incidents at our estate have dropped significantly. Their officers are punctual, alert and genuinely professional.",
//       name: "Estate Management Office",
//       role: "Residential Client, Port Harcourt",
//     },
//     {
//       quote:
//         "Their mobile patrol response time has consistently impressed our facilities team. We finally have a security partner we can rely on around the clock.",
//       name: "Operations Director",
//       role: "Manufacturing Client, Rivers State",
//     },
//     {
//       quote:
//         "Professional, disciplined, and always on standby. Their event security team handled our conference of over 800 guests without a single issue.",
//       name: "Corporate Events Lead",
//       role: "Hospitality Client",
//     },
//   ];

//   return (
//     <section ref={ref} className="fade-up py-20 sm:py-24 bg-white">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <p className="text-burgundy text-center font-bold text-sm tracking-[0.2em] uppercase mb-3">
//           Testimonials
//         </p>
//         <h2 className="font-heading font-extrabold text-3xl text-center mb-14">
//           Trusted by Corporate Clients
//         </h2>

//         <div className="grid md:grid-cols-3 gap-6">
//           {TESTIMONIALS.map((t) => (
//             <div
//               key={t.name}
//               className="bg-offwhite rounded-lg p-8 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
//             >
//               <QuoteIcon />
//               <p className="text-charcoal/80 leading-relaxed my-5 flex-1">
//                 &ldquo;{t.quote}&rdquo;
//               </p>
//               <div className="border-t border-charcoal/10 pt-4">
//                 <p className="font-heading font-bold text-sm">{t.name}</p>
//                 <p className="text-xs text-charcoal/50">{t.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/* ============================================================================
   COVERAGE — Real Nigeria SVG map with location markers
============================================================================ */
function CoverageSection() {
  const ref = useReveal();
 
  // Location coordinates as percentages of the SVG viewBox (1000 x 812)
  // These are calibrated for the Nigeria map
  const locations = {
    lagos: { x: 17.5, y: 82.5, label: "Lagos" },
    abuja: { x: 45.5, y: 42, label: "Abuja (FCT)" },
    umuahia: { x: 54, y: 62, label: "Umuahia (Abia)" },
    portHarcourt: { x: 37.5, y: 84, label: "Port Harcourt", rivers: "Rivers State" },
  };
 
  return (
    <section ref={ref} className="fade-up bg-burgundy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Column: Text Content */}
        <div>
          <p className="text-white/70 font-bold text-sm tracking-[0.2em] uppercase mb-3">
            Our Coverage
          </p>
          <h2 className="font-heading font-extrabold text-white text-3xl sm:text-4xl mb-5">
            Headquartered in Port Harcourt.
            <br />
            Operating Across Nigeria.
          </h2>
          <p className="text-white/75 leading-relaxed max-w-lg mb-6">
            Our operations are rooted in Rivers State, with deployment
            capability that extends to clients across the country. Wherever
            your assets are, we can build a protection plan around them.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-offwhite transition-colors text-burgundy font-bold px-6 py-3.5 rounded"
          >
            Request a Consultation
          </a>
        </div>
 
        {/* Right Column: Nigeria Map with Markers */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[420px]">
            {/* Nigeria SVG Map */}
            <svg
              viewBox="0 0 1000 812"
              className="w-full h-auto drop-shadow-xl"
              style={{
                filter: "drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))",
              }}
            >
              {/* Import and embed the Nigeria map SVG */}
              <image
                href={NigeriaMap}
                width="1000"
                height="812"
                x="0"
                y="0"
                preserveAspectRatio="xMidYMid meet"
              />
 
              {/* Styled overlay: make the map match the design */}
              <defs>
                <filter id="mapFilter">
                  <feColorMatrix
                    type="saturate"
                    values="0.8"
                  />
                </filter>
              </defs>
 
              {/* Lagos Marker */}
              <circle
                cx={locations.lagos.x * 10}
                cy={locations.lagos.y * 10}
                r="6"
                fill="#FFFFFF"
                stroke="#7A1530"
                strokeWidth="2"
              />
 
              {/* Abuja Marker */}
              <circle
                cx={locations.abuja.x * 10}
                cy={locations.abuja.y * 10}
                r="6"
                fill="#FFFFFF"
                stroke="#7A1530"
                strokeWidth="2"
              />
 
              {/* Umuahia Marker */}
              <circle
                cx={locations.umuahia.x * 10}
                cy={locations.umuahia.y * 10}
                r="6"
                fill="#FFFFFF"
                stroke="#7A1530"
                strokeWidth="2"
              />
 
              {/* Port Harcourt: Center dot */}
              <circle
                cx={locations.portHarcourt.x * 10}
                cy={locations.portHarcourt.y * 10}
                r="8"
                fill="#FFFFFF"
                stroke="#7A1530"
                strokeWidth="2.5"
              />
 
              {/* Port Harcourt: Pulse Ring 1 */}
              <circle
                cx={locations.portHarcourt.x * 10}
                cy={locations.portHarcourt.y * 10}
                r="12"
                fill="none"
                stroke="#7A1530"
                strokeWidth="1.5"
                opacity="0.5"
                className="marker-pulse-ring-1"
              />
 
              {/* Port Harcourt: Pulse Ring 2 (delayed) */}
              <circle
                cx={locations.portHarcourt.x * 10}
                cy={locations.portHarcourt.y * 10}
                r="12"
                fill="none"
                stroke="#7A1530"
                strokeWidth="1.5"
                opacity="0.5"
                className="marker-pulse-ring-2"
              />
            </svg>
 
            {/* Port Harcourt Label with Leader Line */}
            <div
              className="absolute flex items-start gap-3"
              style={{
                left: `calc(${locations.portHarcourt.x}% + 12px)`,
                top: `calc(${locations.portHarcourt.y}% + 8px)`,
              }}
            >
              {/* Leader Line */}
              <svg
                className="absolute"
                style={{
                  left: "-18px",
                  top: "4px",
                  width: "16px",
                  height: "1px",
                  overflow: "visible",
                }}
              >
                <line
                  x1="0"
                  y1="0"
                  x2="16"
                  y2="0"
                  stroke="rgba(255, 255, 255, 0.6)"
                  strokeWidth="0.8"
                />
              </svg>
 
              {/* Label Text */}
              <div className="mt-0">
                <p className="text-white font-heading font-bold text-xs">
                  {locations.portHarcourt.label}
                </p>
                <p className="text-white/70 font-body text-xs">
                  {locations.portHarcourt.rivers}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   CTA BANNER
============================================================================ */
function CtaBannerSection() {
  return (
    <section className="relative bg-navy-dark overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1600&auto=format&fit=crop"
        alt="Security officer communicating on a two-way radio"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="font-heading font-extrabold text-white text-2xl sm:text-3xl mb-2">
            Need a Reliable Security Partner?
          </h2>
          <p className="text-white/75">
            Let&rsquo;s discuss how we can protect what matters most to you.
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-bold px-7 py-3.5 rounded whitespace-nowrap"
        >
          Request a Consultation
          <ArrowRightIcon />
        </a>
      </div>
    </section>
  );
}

/* ============================================================================
   CONTACT — form + direct info + map
============================================================================ */
function ContactSection() {
  const ref = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const SERVICE_OPTIONS = [
    "Residential Security",
    "Commercial Security",
    "Armed Security",
    "K9 Security",
    "Mobile Patrol",
    "Event Security",
    "Not sure yet",
  ];

  const inputClass =
    "w-full border border-charcoal/15 rounded px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 focus:border-navy focus:ring-1 focus:ring-navy outline-none transition-colors";

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your form backend / API route.
    setSubmitted(true);
  }

  return (
    <section id="contact" ref={ref} className="fade-up py-20 sm:py-24 bg-offwhite">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-burgundy text-center font-bold text-sm tracking-[0.2em] uppercase mb-3">
          Contact Us
        </p>
        <h2 className="font-heading font-extrabold text-3xl text-center mb-14">
          Let&rsquo;s Discuss Your Security Needs
        </h2>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-lg shadow-card p-7 sm:p-9">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10">
                <div className="w-14 h-14 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1F4A8A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-xl mb-2">Message sent</h3>
                <p className="text-charcoal/60 text-sm max-w-sm">
                  Thank you for reaching out. Our team will contact you shortly
                  to discuss your security needs.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                      Full Name <span className="text-burgundy">*</span>
                    </span>
                    <input type="text" name="name" required className={inputClass} placeholder="John Doe" />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                      Organization (optional)
                    </span>
                    <input type="text" name="organization" className={inputClass} placeholder="Company or estate name" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                      Phone Number <span className="text-burgundy">*</span>
                    </span>
                    <input type="tel" name="phone" required className={inputClass} placeholder="0803 000 0000" />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                      Email Address <span className="text-burgundy">*</span>
                    </span>
                    <input type="email" name="email" required className={inputClass} placeholder="you@example.com" />
                  </label>
                </div>

                <label className="block">
                  <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                    Service Needed <span className="text-burgundy">*</span>
                  </span>
                  <select name="service" required className={inputClass} defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block text-xs font-semibold text-charcoal/70 mb-1.5">
                    Message <span className="text-burgundy">*</span>
                  </span>
                  <textarea name="message" required rows={4} className={inputClass} placeholder="Tell us briefly what you need help with" />
                </label>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-semibold px-8 py-3.5 rounded"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Direct contact info + map */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-navy text-white rounded-lg p-7 space-y-5">
              <ContactRow Icon={PinIcon} label="Office Address">
                Plot 25, Trans-Amadi Industrial Layout, Port Harcourt, Rivers State, Nigeria.
              </ContactRow>
              <ContactRow Icon={PhoneIcon} label="Phone">
                07065772394 &middot; 0810 987 6543
              </ContactRow>
              <ContactRow Icon={MailIcon} label="Email">
                info@sdmembssecurity.com
              </ContactRow>
              <ContactRow Icon={ClockIcon} label="Hours">
                Mon &ndash; Sun: 24 Hours
              </ContactRow>
              <div className="border-t border-white/15 pt-5">
                <ContactRow Icon={AlertIcon} label="Emergency Contact">
                  <span className="text-white font-semibold">0810 987 6543</span> &mdash; available 24/7 for active incidents.
                </ContactRow>
              </div>
              <a
                href="https://wa.me/2347065772394"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold px-5 py-3 rounded mt-2"
              >
                Chat on WhatsApp
              </a>
            </div>

            {/* Map placeholder — Google Maps embed (no API key needed) */}
            <div className="rounded-lg overflow-hidden shadow-card h-56 sm:h-64">
              <iframe
                title="S & D Membs office location map"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Trans-Amadi+Industrial+Layout,+Port+Harcourt&output=embed"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, label, children }) {
  return (
    <div className="flex gap-3">
      <div className="shrink-0 mt-0.5">
        <Icon />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-0.5">{label}</p>
        <p className="text-sm text-white/85 leading-relaxed">{children}</p>
      </div>
    </div>
  );
}

/* ============================================================================
   SHARED ICONS
============================================================================ */
function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

/* --- Service card badge icons (render white inside the burgundy circle) --- */
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
function GroupIcon() {
  return <svg {...badgeSvg}><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" /><circle cx="10" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
}

function iconWrap(children) {
  return (
    <div className="w-11 h-11 rounded-full bg-navy/10 flex items-center justify-center text-navy">
      {children}
    </div>
  );
}

function ShieldIcon() {
  return iconWrap(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
function TeamIcon() {
  return iconWrap(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="10" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function ClockIcon() {
  return iconWrap(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}
function BuildingIcon() {
  return iconWrap(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 22V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18" />
      <path d="M6 12H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2M18 12h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2" />
      <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
    </svg>
  );
}
function BoltIcon() {
  return iconWrap(
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 11 14 11 22 21 10 13 10 13 2" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F4A8A" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="#1F4A8A" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F4A8A" strokeWidth="2">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function ShieldCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1F4A8A" strokeWidth="2">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7A1530" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

// function QuoteIcon() {
//   return (
//     <svg width="32" height="32" viewBox="0 0 24 24" fill="#7A1530">
//       <path d="M9.5 5C6 6.5 4 9.5 4 13.5c0 2.5 1.5 4 3.5 4S11 16 11 13.5c0-2-1.2-3.3-3-3.5.3-1.5 1.5-2.8 3-3.5L9.5 5zM18 5c-3.5 1.5-5.5 4.5-5.5 8.5 0 2.5 1.5 4 3.5 4s3.5-1.5 3.5-4c0-2-1.2-3.3-3-3.5.3-1.5 1.5-2.8 3-3.5L18 5z" />
//     </svg>
//   );
// }

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

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}
function AlertIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2">
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}
