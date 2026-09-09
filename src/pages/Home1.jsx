import { useEffect, useRef, useState } from "react";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
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
    </div>
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
    { label: "Rapid Response Capability", Icon: BoltIcon },
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

        <div className="relative container-page py-20 sm:py-28 w-full">
          <div className="max-w-2xl">
            <p className="text-white/70 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
              Safety Built on Trust.
            </p>
            <h1 className="text-white font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-[1.08] mb-6">
              Protecting People, Property{" "}
              <span className="text-white">&amp; Peace of Mind.</span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Trusted residential and commercial security services from our
              Port Harcourt base, delivering trained personnel, mobile
              patrols and tailored protection solutions across Nigeria.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 btn-primary font-semibold px-6 py-3.5 rounded"
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
      <div className="relative container-page">
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
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          {/* Placeholder photography: CCTV monitoring room */}
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop"
            alt="Security officer monitoring live CCTV feeds in the operations room"
            className="w-full h-[420px] sm:h-[480px] object-cover rounded-lg shadow-card"
          />
        </div>

        <div>
          <p className="eyebrow mb-3">
            About Us
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl leading-tight mb-5">
            Your Security is Our{" "}
            <span className="text-burgundy">Responsibility.</span>
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-8">
            S &amp; D Membs Security Services Limited is a licensed private
            security provider headquartered in Port Harcourt, Rivers State,
            with offices in Abuja and Lagos. We deliver professional security
            solutions to individuals, businesses and organizations with
            integrity, discipline and excellence.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {PILLARS.map(({ title, body, Icon }) => (
              <div key={title}>
                <Icon />
                <h3 className="font-heading font-bold text-sm mt-3 mb-1.5">{title}</h3>
                <p className="text-xs text-charcoal/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>

          <a
            href="/aboutus"
            className="inline-flex items-center gap-2 btn-primary font-semibold px-6 py-3 rounded text-sm"
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
      title: "Commercial & Industrial Security",
      desc: "Offices, factories, warehouses, banks, hotels and industrial facilities.",
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=900&auto=format&fit=crop",
      alt: "Corporate office building entrance",
      Icon: BriefcaseIcon,
    },
    {
      title: "Armed & Unarmed Guards",
      desc: "Licensed armed and unarmed officers for sites of every risk level.",
      img: "https://images.unsplash.com/photo-1595535373587-8b0b0dae2bfc?q=80&w=900&auto=format&fit=crop",
      alt: "Licensed security officer on duty",
      Icon: ArmedIcon,
    },
    {
      title: "K9 Security",
      desc: "Trained dog handlers for patrols, detection and search operations.",
      img: "https://images.unsplash.com/photo-1568572933382-74d440642117?q=80&w=900&auto=format&fit=crop",
      alt: "K9 security unit on patrol",
      Icon: PawIcon,
    },
    {
      title: "Mobile Patrol",
      desc: "Vehicle patrols, random inspections and rapid response across sites.",
      img: "https://images.unsplash.com/photo-1617886322168-72b886573c5f?q=80&w=900&auto=format&fit=crop",
      alt: "Security patrol vehicle",
      Icon: CarIcon,
    },
    {
      title: "CCTV, Access Control & Consultancy",
      desc: "Monitoring, access control systems and expert security consultancy.",
      img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=900&auto=format&fit=crop",
      alt: "Security operations monitoring room",
      Icon: GroupIcon,
    },
  ];

  return (
    <section id="services" ref={ref} className="fade-up py-20 sm:py-28 bg-white">
      <div className="container-page">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow mb-3">
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
            href="/services"
            className="inline-flex items-center gap-2 btn-primary font-semibold px-6 py-3.5 rounded"
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
    { value: "17+", label: "Years Experience", sub: "Delivering trusted security solutions since 2008." },
    { value: "5", label: "States Covered", sub: "Operating across Rivers, Lagos, Bayelsa, Enugu & the FCT." },
    { value: "24/7", label: "Support", sub: "Round-the-clock operations and monitoring." },
    { value: "100%", label: "Commitment", sub: "Dedicated to professionalism, safety and excellence." },
  ];

  return (
    <section ref={ref} className="fade-up bg-navy py-16 sm:py-20">
      <div className="container-page">
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
    { label: "Government", Icon: GovIcon },
    { label: "Oil & Gas", Icon: OilIcon },
    { label: "Warehouses & Factories", Icon: OfficeIcon },
    { label: "Religious Organizations", Icon: ChurchIcon },
  ];

  return (
    <section id="industries" ref={ref} className="fade-up py-20 sm:py-24 bg-white">
      <div className="container-page">
        <p className="eyebrow text-center mb-3">
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
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="eyebrow mb-3">
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
//       <div className="container-page">
//         <p className="eyebrow text-center mb-3">
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
 
  return (
    <section ref={ref} className="fade-up bg-burgundy">
      <div className="container-page py-16 sm:py-20 grid lg:grid-cols-2 gap-10 items-center">
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
            Our operations are rooted in Rivers State, with active coverage
            in Lagos, Bayelsa, Enugu and the FCT, and deployment capability
            that extends to clients across the country.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white hover:bg-offwhite transition-colors text-burgundy font-bold px-6 py-3.5 rounded"
          >
            Request a Consultation
          </a>
        </div>
 
        {/* Right Column: Nigeria Map with Colored States */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[300px]">
            {/* Nigeria Map — Coverage States Highlighted */}
            <svg
              viewBox="0 0 1000 812"
              className="w-full h-auto"
              style={{
                filter: "drop-shadow(0 24px 32px rgba(0, 0, 0, 0.2))",
              }}
            >
              {/* All 36 states + FCT — full accurate Nigeria map (source: simplemaps ng.svg) */}
              <path className="ng-state" d="M155.3 89.1l0.6-0.2 5.8-0.1 4.9 0.8 2.6-1.3 2.8-0.6 2.3 1.9 2.3 2.2 4.7 2.8 5.1 1.9 2.8 0.7 2.6 1 2.5 1.7 2.8 1.3 2.8 0.3 2.4-1.4 1.1-2.1 1.5-1.8 1.9-0.7 1.3 1.7-0.2 2.4-1.1 2.3-0.3 1.4 0 1.5-0.3 1.2-0.4 1.1-0.9 2.9-0.4 3.1 2.5 4.4 1.7 4.9-0.6 5.6-0.8 2.9-0.3 2.9 2.3 12.5-0.3 5.8-3.4 1.8-5.2-1.7-5.4 1.4-2.7 4.8 0.5 29.8-2.6 12.1-3.3 7.2-0.7 7.4 2.5 2.8 3.4 1.1 3.3-2.1 2.6-3.3 14.4-6.5 1.6-0.4 1.6 0.4 1.2 0.7 0.9-0.3 0.9-0.3 1.1 0.7 0.8 1.2 1.7-0.1 1.5-1 3.1-0.6 3.1 1.2 1.2 1.1 1.6 0.3 4-1 1.7-0.1 1.4-0.8 0.6-1.8 1.3-1.3 1.7-0.1 1.6 0.7 1.8 0.1 4.3-0.6 1.8 1.5 1.1 2.2 6.6 2.9 4.5 1 11.5-0.8 1.2-0.7 1.3-0.3 5.6 0.9 2.8 1 3.6 3.5-0.4 5.3-1.9 5.8 1.5 2.4 2.9 1.1 5.8 9.3 0.7 11.8-2.3-1.5-2.7 0.1-1.1 0.9-1.9 2.2-0.8 1.2-1.9 1.6-2.7 0.2-2.6 0.7-13.1 5.6-5 0.9-7.6 0-2-0.7-1-2.7-0.1-3 0.5-6-1.3-2.6-2.4-1.5-2.7-4.9-1-5.8-4.5-2.7-5.5-0.2-22.4 4.6-10.4 4.7-1.2 4.9 4.8 3.6 5.4 2.3 5.8 0.9 1.3 0 1 0.6 0.6 1.4 1 0.6 2.1 0.6 0.9 2.2 0.7 3.2 0.2 3.1-3.6 4.6 3.1 3.9 1.7 5.1-2.1 1.6-5.3 1.5-5.1 2.5-5.3-0.7-2.4 0.8-1.3 5.1 0.4 5.8-0.3 2.7 0.4 2.6 3.6 4.7 2.3 5.2-1.9 5-2.2 1.7-2.6 0.8-8.7 1.9-2.7 0.9-0.8 2.7 0 3-1 2.1-5.2-0.3-1.8-1.6 1.2-5.7 0.4-5.6-1.6-1.8-1.9-1.5-1.2-2.6-0.3-3 0.5-5.7 2.8-4.9 8.8-5 0.2-1.4 1.9-1.9 0.5-1.1 0.2-1.3 0-2.9 2.5-13.8-0.1-1.9-4.9-1.5-9.2-6-7.7-2.1-7.8 1.2-20.8 0.5-4-0.4-8.4-4-6.8-4.2-6.9-0.8-0.6 0.6-0.1 0-0.7 0.1-0.6-0.1-1.8-1.7-13.6-19.3-1.1-2.1-0.2-1.8 1.6-4.1 0.4-1.2 0.9-3.5 5.3-9 1.7-1.8 3.9-2.3 0.9-0.9 0.5-1.7-0.4-1.5-0.9-1.5-1.8-1.9-0.3-0.2-0.3-0.2-0.4-0.8-0.2-0.8-0.5-4.4 0.4-1.3 0.8-1.1 1.3-1.3 1.3-2.6-0.4-2.6-1.8-5.7 0-3.4 2-10.2-0.7-19.3 0.3-0.8 16.6-12.5 4.9-4.7 12.1-19.1 2.4-16.7z" />
              <path className="ng-state" d="M123.8 251.1l0.6-0.6 6.9 0.8 6.8 4.2 8.4 4 4 0.4 20.8-0.5 7.8-1.2 7.7 2.1 9.2 6 4.9 1.5 0.1 1.9-2.5 13.8 0 2.9-0.2 1.3-0.5 1.1-1.9 1.9-0.2 1.4-8.8 5-2.8 4.9-0.5 5.7 0.3 3 1.2 2.6 1.9 1.5 1.6 1.8-0.4 5.6-1.2 5.7 1.8 1.6 5.2 0.3 1-2.1 0-3 0.8-2.7 2.7-0.9 8.7-1.9 2.6-0.8 2.2-1.7 1.9-5-2.3-5.2-3.6-4.7-0.4-2.6 0.3-2.7-0.4-5.8 1.3-5.1 2.4-0.8 5.3 0.7 5.1-2.5 5.3-1.5 2.1-1.6-1.7-5.1-3.1-3.9 3.6-4.6-0.2-3.1-0.7-3.2-0.9-2.2-2.1-0.6-1-0.6-0.6-1.4-1-0.6-1.3 0-5.8-0.9-5.4-2.3-4.8-3.6 1.2-4.9 10.4-4.7 22.4-4.6 5.5 0.2 4.5 2.7 1 5.8 2.7 4.9 2.4 1.5 1.3 2.6-0.5 6 0.1 3 1 2.7 2 0.7 7.6 0 5-0.9 13.1-5.6 2.6-0.7 2.7-0.2 1.9-1.6 0.8-1.2 1.9-2.2 1.1-0.9 2.7-0.1 2.3 1.5 3.3 4.3 5.8 9.8 1.1 5.1-1.5 0.7-1.5 1.7-0.6 2-0.5 6.4 0.1 2 1.3 3.8 0.1 0.9-0.1 1-0.3 1.7-1.1 2.6-0.2 0.9 0 2.1-0.1 1-0.5 1-0.3 1.5 0.5 2.6 2.5 1.8 1.8 2.4 1.3 2.6 2.6-0.4 2-2.2 1.6-2.6 4-4.3 9-6.9 5.4-1.2 2 1.4 0.9 2.4 2.4 0.4 5.5-2.6 2.9-0.5 2.9 0.5 1.7-1.3-0.3-3 2.5-1.1 2.7 0.2 2.3 1 0.7 1.5 0.5 6.2 1.2 0.3 2.6-0.7 4.2 3.5 0.1 6.2-1 2.7 1.7 1.7 5.4 2 2.2 1.6-0.1 2.6-1.9 2.4-2.5 1.7-2.4 1.9-2.1 2.5-2.4 1.6-1.8 2.2 3.3 4.4 5.5 2.3 5.6 0.7 11.2-0.2 3.7 2.6 1.4 12.3-0.1 2.8-2 1.6-2.3 0.2-1.7 1.3 1.5 2 2.8 0.8 1.6 1.4-0.6 2.1 1.1 2 2.3 1.1 0.4 2.4-1.7 2-1.1 1-0.8 1.2-0.2 1.6-0.4 1.5-4.2 3-0.6 2.8 1.5 2.4 1 0.6 1.3 1.7-0.2 1.1-0.8 2.3 0.5 1.2 1.9-0.6 1.8 0.5-10.7 15.2-0.4 0.1-3.6-2-7.1-6.9-4.6-1.5-14 0.6-1.8 0.9-0.3 2.1 0.7 54.7 0.4 1.4 1.9 3.2 3.4 0.4-1 3.1-2.2 2.1-1.6 0.6-1.2 1.2 0.2 1.7-0.4 1.2-1-0.6-1 0.8-0.8 1.9-0.5 2-1.3 1.3-0.3-0.5-1.1-0.9 0-0.5-1-0.4-2.8-3.1-3-4.8-0.9-1-7.5-5.7-0.6-0.3-1.7-3.5-1-3.7-0.2-2.2-0.1-0.7-0.3-0.7-0.4-0.1-0.2-0.6-1.2-2.4-0.1-0.6-0.1-1.4-1.9-3.2-0.9-1-1.2-0.6-1.6-0.3-2.8-1.9-0.5-0.4-1.3-0.2-3.4 0.7-4.2 0.8-0.5-0.2-2.3-2.2-1.2-0.4-1.1-0.2-8.3 0.1-1.9 0.3-2.4 1.2-0.9 0.2-1.1-0.1-3.4-0.5-4 0.1-0.9-0.3-0.5-0.5-0.8-1.4-1.1-1.5-1-1.6-0.6-0.1-1.7-0.7-0.6-0.1-4.3-0.1-1.2-0.4-1-0.8-0.3-0.4-0.7-1.3-0.6-0.8-0.7-0.8-1.6-1.4-1-1.3-0.4-0.3-1-0.6-1.1-0.4-1-0.2-2.4-0.1-1-0.2-0.9-0.5-0.9-0.7-1.4-1.4-0.8-0.6-0.9-0.5-1.1-0.2-5.1 0.3-7.2-1.2-1.1-0.4-0.9-0.6-0.6-1-0.1-0.9 0.1-0.8-0.1-0.8-0.3-0.8-1.3-1.4-1.3-1.7-1.1-0.8-4-1.9-2.5-1.8-1.4-0.6-0.1-0.4-1.8-0.9-1-0.2-1.1 0-4.9 1.5-3.4 2-3 0.9-2.4 0.1-2.1-0.6-1.3-1.5-0.2-2.3 0.4-2.3-0.1-2.1-0.9-1.5-2.1-0.8-3.8-0.7-1.2-0.4-1.2-0.9-0.6-1-0.3-1.3 0-1.5 0 0.1-0.1 0.1-0.1 0-0.1 0 0.1-1.5-0.2-2.9-0.1-0.5-6.6-1-5.6 0.7-2.5-4.3 0.1-5.7 0.8-6.2-1.3-5.1-2.6-0.1-1.2-0.7-1.1-0.9-25.5-30.2-2.1-1.8-5.2-0.7-12.1 0.3-6.7 1.3-0.4 0.1 0.2-1.4-0.2-1.2-0.7-1-5.1-5.3-1.1-1.8-0.1-1.4 1.6-3.5 1.9-3 0.3-0.9 0.1-1.5 0.2-0.5 0.5-0.7 1.5-1.5 1.5-0.5 1.6 0.3 4.8 2.6 1.2-0.2 1.2-1.5 0.5-1.4 0-4 0.7-2 2-3.9 0.5-2 0-2.4 0-1.9-0.4-2.2-0.7-1.5-0.9-0.6-1.1-0.2-1-0.3-0.7-0.8-0.7-2.5-0.4-0.9-0.6-0.6-0.6-0.6-0.6-0.6-0.4-1 0.1-1.3 1.6-4.1 0.1-2.2-1.5-6.9-0.8-1.3-0.6-1.5-0.3-1.5 0-1.7 0.8-3-0.7-0.6-0.6 0z" />
              <path className="ng-state" d="M120.7 327.6l0.4-0.1 6.7-1.3 12.1-0.3 5.2 0.7 2.1 1.8 25.5 30.2 1.1 0.9 1.2 0.7 2.6 0.1 1.3 5.1-0.8 6.2-0.1 5.7 2.5 4.3 5.6-0.7 6.6 1 0.1 0.5 0.2 2.9-0.1 1.5 0.1 0 0.1 0 0.1-0.1 0-0.1 0 1.5 0.3 1.3 0.6 1 1.2 0.9 1.2 0.4 3.8 0.7 2.1 0.8 0.9 1.5 0.1 2.1-0.4 2.3 0.2 2.3 1.3 1.5 2.1 0.6 2.4-0.1 3-0.9 3.4-2 4.9-1.5 1.1 0 1 0.2 1.8 0.9 0.1 0.4 1.4 0.6 2.5 1.8 4 1.9 1.1 0.8 1.3 1.7 1.3 1.4 0.3 0.8 0.1 0.8-0.1 0.8 0.1 0.9 0.6 1 0.9 0.6 1.1 0.4 7.2 1.2 5.1-0.3 1.1 0.2 0.9 0.5 0.8 0.6 1.4 1.4 0.9 0.7 0.9 0.5 1 0.2 2.4 0.1 1 0.2 1.1 0.4 1 0.6 0.4 0.3 1 1.3 1.6 1.4 0.7 0.8 0.6 0.8 0.7 1.3 0.3 0.4 1 0.8 1.2 0.4 4.3 0.1 0.6 0.1 1.7 0.7 0.6 0.1 1 1.6 1.1 1.5 0.8 1.4 0.5 0.5 0.9 0.3 4-0.1 3.4 0.5 1.1 0.1 0.9-0.2 2.4-1.2 1.9-0.3 8.3-0.1 1.1 0.2 1.2 0.4 2.3 2.2 0.5 0.2 4.2-0.8-3.2 4.1-3.1 10.7-1.2 7.9-0.7 2.2-1.6 1.9-2.5 0.5-8.3-1.9-10.5-0.5-7.5-1.8-7.6-2.9-3.8-3.7-3-1.2-3.4 3.1-8.7 10.8-0.5 2.5 2.2 4.4 1.1 1.3 1.4 1.2 0.7 1.4 3.1 2.8 5.1 3.2 0.5 4.6-8.1 0.2-2.7 0.9-1.6 1.9-0.5 2.5-0.9 1.8-0.7 0.2-0.6-0.2-3.2 0.5-1.9-0.4-3-0.2-5-3.2-4.7 1.4-1.6-0.6-0.4-1.3-0.8-0.6-1.2-0.2-4.3 0.6-2.3-1.5-1.6-2.7-3.1 0-3 1.2-4.3 0.4-0.5 0.6-0.1-0.6-2.1 0.5-2 0.8-4.2 0.9-5-0.5-4.9 0.3-1.2-0.8-1.3-0.3-0.9-1.5-2.2-7.3-2.8-4.4-2-1.3-1.7-1.6-2.7-4-2.6-10.3-2.7-4-6.7-15-1-4.7 0.9-4.6 1.7-1.6 1.2-2 1.9-1.9 2.5-1.5 2.6-3.7-1.3-3-3.7 2.3-2.1 0.1-5.5-1.3-9-3.2-3.4-1.8-2.9-2.5-1.7-3.4-2.2-2.8-3.4-1.5-3.7 0.3-3.4 2.5-1.9 3.7-0.7 5-1.5 1.6-1.7 1.3-15.6 7.9-3.3 2.5-3 1.5-3.4 2.6-9 4-0.9 0.2-0.8-0.9-0.9-0.5-0.7-0.8-1.2-0.3-1.2 0.2-1.7 0.5-1.7 1-3.1 2.7-1.5 0.9-1.2 1-0.5 0.8-1.8 0.6-4.1 3.4-1.4 1.7-1.8 1.3-6 1.4-1.5-0.2-1.5 0-3.9 3.5-0.5 0.4-1.5-18.7 0-0.1 0-0.8 0.4-0.6 1.3-0.5 0.4-0.4 0.1-0.7-0.4-1.2-0.1-0.7 0.3-1.2 1-2.2 0-1.1-0.3-0.6-0.4-0.1-0.3-0.2-0.1-0.6 0.2-0.1 0.8-1.3 0.2-0.5 0.5-2.1 0.1-4.9-0.2-2 5.8 0.5 1-0.2 0.8-0.5 0.6-0.7 0.8-0.5 0.8-0.2 2.4 0 0.8 0.1 0.8 0.4 0.8 0.5 0.7 0.3 0.9 0 5.2-1.3 1.8-1.3 1.2-2.4 2.5-7.9 1.6-3 0.4-1.6 0.1-5-0.3-1.2-1-2.5-0.5-2.1 0.3-2.1 1.5-2.4 0.5-0.4 1.2-0.4 0.6-0.5 4.6-6.1 0.1-0.4-0.4-1-0.1-0.5 0.6-1.9 1.2-0.4 1.5 0.3 1.3 0.1 2.5-1.4 0.5-2-0.6-2.3-0.9-2.4-0.3-1.5 0.2-1.8 0.7-1.5 1.2-0.9 5.4-2.3 3-0.7 4.5 0.5 1.4-1.3 2-3.7 2.4-2.9 0.8-1.5 0.5-6.6 0.5-1.3 1.1-1.1 1.1-0.5 1-0.7 0.7-1.7 0-0.4z" />
              <path className="ng-state" d="M45.5 499l0.5-0.3 6.6-4.6 7.3 0.2 1.9 3.6 0.4 8.6 1.3 4.1 2.1 0.4 0.8-4 1.1-3.3 2.8-0.1 0.5 6.8-2.8 7.7 0.1 1.6 1.5 4 3.1 2.6 2.5 3.2 3.4 6.2 5.4 4.9 4.1 1.4 4.3-0.2 3-2.6 3.1-7.6 3.1-2.1 2.8 2.1 1.3 3.7 2.2 1.3 2.2-1.2 2.3-1 7.5 0.2 2.6 3.7 0 4.2 0.2 1.4 2.2 1.6 2.2 1.2 0.5 1.3 0 1.5 0.2 1.2 0.5 1.1 0.9 4.5-2.8 3.9-2.1 3.5 4.6 0.2 9.3-1.2 4.7-1.2 2.1-1.4 2.4-0.8 2.3-0.2 2.3-0.4 5.3-2.6 1.6 3.3 0.6 3.4 3.1-0.4 2.9-1.8 3.5-0.1 2.5 2.1 0.9 1.9 0.7 1.9 0.2 1.3 0.4 1.1 2.2 0.1 2.6-1.5 1.6 0.5 1.7 0.1 1.2-0.6 1.4-0.4 3.1-0.3 1.2 1.5-1.8 10-1.4 1.9-6.8 5-3.8 4-1.8 5.1-0.1 2.3 1.1 2 1.1 0.7 2.4 0.8 1.2 0.2 3.9 0.1 3.3-2 1.2-1.8 1.9-0.9 1.4 2 0 5.4 0.7 3.6-0.2 1-0.8 1-1.2 0.4-3.9 2.8-2.5 0.3-1.2 0.5 1.3 1.5 2.3 0 4.2 1.8 0.1 2.1-1.2 1.4-4.5-0.4-0.1 0.1-6.6-2.9-4.9-0.9 0.1-0.2 0.3-2.1-0.1-2-2.1-0.7-4.3-0.2-1.8 0.4-1.3-0.8-1-0.9-2.2-0.6-1.7-1.1-0.1-1.9 4.3-2.4 0.7-1.6-0.8-1.6-2.1-0.8-2.5 0.6-2.3 1.5-2.3 1.2-2.2-1.8 0-0.9-0.8-1.9 0.6-1.9 1.9-1.4 0.8-2-4.5-1.2-44.3 0.2-0.6 0.7-0.3 1.1-0.9 1.3-1.5 0.2-2.7-0.1-1.7-2.2-3.5-1.8-1.8-0.6-2.3 1-0.5 1.1-1.1 3.9-1.2 1.2-1.1 1.6-0.8 3.7-1.1 1.3-4.5 0.6-16.5-0.7-0.8 0.4 0 1.1-1.4 1.6-2.1 1.4-1.9 0.1-1.9-0.7-2.6 0.3-2.5-0.2-0.5-0.1 0.3-1.5 0.3-0.8 1.4-4.1 0.1-1.6-0.6-3.2 0-1.6 0.9-1.6 1.3-1.2 1-0.6 0.4-0.9-0.3-3.5-0.1-0.8-0.4-0.3-1-0.1-0.8-0.3-0.6-0.4-0.6-0.8-0.4-1.5 0.2-1.7 0.8-3.2-0.3-3.2-1.1-2.9-0.2-2.8 2-2.7 0.8-0.4 1-0.3 0.8-0.4 0.3-0.9-0.5-0.7-1.9-1.6-0.7-0.8-0.3-1 0.1-0.6 0.3-0.5 0.7-1.4 0.6-0.8 0.3-0.7 0.1-1.1-1.6-18.8 0.2-0.8 0.5-0.3 0.8 0 1.7 0.3 0.2-0.2 0.1-0.4 0.1-0.7 0.2-3.2-1.6-2.8-2.3-2.7-1.5-2.8-0.4-3 0.2-2.5 0.7-10.3-0.2-1.1-0.7-1.1-1.8-2-0.8-2.2-0.7-1 0-0.3z" />
              <path className="ng-state" d="M50.9 450.5l0.5-0.4 3.9-3.5 1.5 0 1.5 0.2 6-1.4 1.8-1.3 1.4-1.7 4.1-3.4 1.8-0.6 0.5-0.8 1.2-1 1.5-0.9 3.1-2.7 1.7-1 1.7-0.5 1.2-0.2 1.2 0.3 0.7 0.8 0.9 0.5 0.8 0.9 0.9-0.2 9-4 3.4-2.6 3-1.5 3.3-2.5 15.6-7.9 1.7-1.3 1.5-1.6 0.7-5 1.9-3.7 3.4-2.5 3.7-0.3 3.4 1.5 2.2 2.8 1.7 3.4 2.9 2.5 3.4 1.8 9 3.2 5.5 1.3 2.1-0.1 3.7-2.3 1.3 3-2.6 3.7-2.5 1.5-1.9 1.9-1.2 2-1.7 1.6-0.9 4.6 1 4.7 6.7 15 2.7 4 2.6 10.3 2.7 4 1.7 1.6 2 1.3 2.8 4.4 2.2 7.3 0.9 1.5 1.3 0.3 1.2 0.8 0.6 2.6-0.2 2.6-0.6 1-0.4 0.4-1.7 0.3-1.3 0.5-1.4 0.9-1.3 1.1-0.2-0.3-0.6 0.6-0.5 0.7-0.4 0.4-2.2 1.6-1.6 1.6-3.1-0.6-2.7-4.5-2.1-1.9-2.4-0.9-1.6 1.7-1.4 2-0.8 0.6-0.7 0.7 0.1 1.7-3.9 2.8-5.1-1.4-1.3 3.5-0.2 5-0.4 2.2-0.7 2.2-1.3 1.9-0.1 2.3 1.6 1.7 2.1 1.3 1.6 2.1 1.3 2.4 1.4 1.9 0.5 2.1-5.2 27.6-2.3 0.4-2.3 0.2-2.4 0.8-2.1 1.4-4.7 1.2-9.3 1.2-4.6-0.2 2.1-3.5 2.8-3.9-0.9-4.5-0.5-1.1-0.2-1.2 0-1.5-0.5-1.3-2.2-1.2-2.2-1.6-0.2-1.4 0-4.2-2.6-3.7-7.5-0.2-2.3 1-2.2 1.2-2.2-1.3-1.3-3.7-2.8-2.1-3.1 2.1-3.1 7.6-3 2.6-4.3 0.2-4.1-1.4-5.4-4.9-3.4-6.2-2.5-3.2-3.1-2.6-1.5-4-0.1-1.6 2.8-7.7-0.5-6.8-2.8 0.1-1.1 3.3-0.8 4-2.1-0.4-1.3-4.1-0.4-8.6-1.9-3.6-7.3-0.2-6.6 4.6-0.5 0.3 0-0.3 0.1-0.6 0.8-1.4 0.3-0.7 0.3-4.9 0.9-4.8 0.2-4.6 0.2-1.4 0.6-1.3 0.8-1.2 0.6-1.5 0-1.6-0.5-1.7-1.5-3.1-0.6-1.7-0.3-1.9 0.1-1.4 0.6-3.2 0-0.7-0.2-1.4 0-0.7 0.4-1 1.5-1.7 0.6-0.9 0.6-2.6-0.1-2.2z" />
              <path className="ng-coverage" d="M48.5 607.4l0.5 0.1 2.5 0.2 2.6-0.3 1.9 0.7 1.9-0.1 2.1-1.4 1.4-1.6 0-1.1 0.8-0.4 16.5 0.7 4.5-0.6 1.1-1.3 0.8-3.7 1.1-1.6 1.2-1.2 1.1-3.9 0.5-1.1 2.3-1 1.8 0.6 3.5 1.8 1.7 2.2 2.7 0.1 1.5-0.2 0.9-1.3 0.3-1.1 0.6-0.7 44.3-0.2 4.5 1.2-0.8 2-1.9 1.4-0.6 1.9 0.8 1.9 0 0.9 2.2 1.8 2.3-1.2 2.3-1.5 2.5-0.6 2.1 0.8 0.8 1.6-0.7 1.6-4.3 2.4 0.1 1.9 1.7 1.1 2.2 0.6 1 0.9 1.3 0.8 1.8-0.4 4.3 0.2 2.1 0.7 0.1 2-0.3 2.1-0.1 0.2-16.3-3-19.4-1.6-32.3 1.6-1.7-0.3-0.9-0.7-0.8-0.8-1.1-0.8 0.7-0.4 0.6-0.1 0.4 0.1 0.5 0.4 1.1-1.1 0.5 0.4 0.1 1.2 0.3 1.1 2.7-2.5 0.4 0.1 0.3 0.6 0.6 0 1-0.3 1.4-0.1 1.3-0.2 1.2-0.6 1-1.2 0.1-0.9-0.1-0.8 0-0.7 0.8-0.2 3.1 0 1.6-0.4 3.3-1 1 0.3 1.7-0.7 1.5-0.9 1.1-1.2 0.4-1.6 1-0.4 6.3-0.9-0.6-0.5-0.5-0.2-0.4 0-0.6 0.1-4.3-1-4.3 1.6-4 2.4-3.7 1.2-1.4 0-0.8 0.1-2.6 1.4-0.9 0.4-0.9 0.1-1 0.1-0.2-0.2-0.9-0.3-0.9 0-0.5-0.4-0.3-0.2-0.3-1-0.1-0.9 0.6-1.7 0-1-1.3 0.7-0.9 0.8-1.7 1.8-0.6 0.3-0.8 0-0.6 0.2-0.3 0.6 0.1 0.5 0.4 1.2 0 0.7-0.3 0.8-1 1.6-0.3 0.9-0.3 0.6-0.5 0.4-0.3 0.5 0.4 0.6 0.4 0.4 0.2 0.4 0.1 0.5 0.4 0.4-0.4 1.7-4.4 0.4-8.5-0.4-10 1.2-11.7-0.6-17 1.6 0.1-4.7 0.5-3.4z" />
              <path className="ng-state" d="M884.8 264.8l-4.4 0.3-11 2.5-2.5-0.4-2.4-0.9-0.9-0.7-1-0.2-2.6 0.4-0.7 4.4 0.1 5.2-1 5.4-4.2 10.4-2.7 10.2-3.8 2.2-5.2-1.2-4.4-2.9-4.2-3.7-5.2-2.2-6.5-0.9-6.2 1.4-4.1 4.8-4.5 4.1-2.8 0.1-1.9 1.4-1.4 2.8-2.1 2.3-5.4 2.5-6.1 0.6-5.5 1.3-4.4 3.7-7.8 10.2-9.6 6.8-12.3-0.7-5.4-3.4-5.1-8.2-2.7-1.9-3.3-1.3-2.9-2-2.4-2.9-1.5-3.4 0.1-3.4 5.6-9.1-0.9-6.7 2.9-0.8 2.4-1.9 1.7-2.3 0.9-2.7-0.5-6.4 1-6.2 4.3-4.8 17.9-6.3 4.7-3.5 2.3-5.3-0.4-6.5 0.4-6.6 1.6-2.5 2.1-2.2 3.1-5.6 7.7-9.6-0.4-2.8-1.3-2.7-2.3-2.6-3-1-2.6 0.4-2-0.6 0.4-3.1 4.6-9.1 0.4-3.4-1.8-7.7 3.5-26.1-1.6-11.6 8.4-7.9 3.3-4.7 1.9-4.7-0.7-4.8-4-3-3.4-3.8-1.3-4.9 1.7-14.9 0.1-0.1 2 0 1.8 0.3 1.4 0.5 1.3 0.3 1-0.5 0.4-0.9 0.6-4.2 0.4-0.3 1.7-0.3 0.6-0.2 0.6-0.7 0.4-0.8 0.5-1.7-1.3-0.5 0.6-1.1 0.9-1.4 0.3-1.3 2.7-2.6 0.4-0.3 0.3 0.4 0.5-0.1 0.5-0.4 0.5-0.5 0.2-0.5 0.1-1.3 0.8 0.7 0.6 0.6 0.8 0.6 1.2 0.2 0.6-0.4 0.5-1.8 0.9-0.4 1.7-0.4 1.3-1 1.9-2.4 0.5-1.3 0.1 0 0.3-0.3 0.4 0.3 0.4 0.6 0.2 0.2 1.1 0-0.1-0.3-0.4-0.6-0.3-0.9 0.2-0.3 1-0.4 0.3-0.2 0.2 0 0.7 0.1 0.2-0.1 0-0.2-0.1-0.6 0.1-0.2 2.1-2.4 1-0.8-0.5-0.6-0.5-0.5-0.5-0.3-0.6-0.2 0-0.6 1.1 0.3 1 0.5 0.7-0.1 0.3-1.2 2.1 0.4 2.1-0.4 6.8-3.4 2-0.7 2.1-0.2 0 0.5-0.4 0.8 0.8 0.3 1.4-0.1 1.3-0.4 0 0.3 0 0.8 0.5-0.6 0.6-1.3 0.4-0.3 0.8 0.2 0.1 0.6-0.1 0.8-0.3 0.6 2-0.9 2.1-0.4 1.8-0.7 1.4-1.8-1.1-0.1-0.1-0.4 0.7-1.1 0.3-0.1 0.5 0 0.5-0.1 0.2-0.6-0.1-0.4-0.4-0.6 0.1-0.3 0.4-0.8 0.5-0.7 3-2.9 1.2-0.8-0.1-1.3 0.7-0.6 2.2-0.3 0.1-0.1 18.7 0.9 17.4 24.3 17.3 24.4 4.3 20.7 4.2 20.7 0.1 6 0.1 0.3 0.4 1.3 0 1.5-0.4 2.4 0 0.9 0.7 1.2 1 0.6 1.2 0.2 15.5 0.5 4.9 1.2 2.1 1.1 0.2 0.8-0.4 1.1 0.2 0.8 0.5 0.5 2.2 1.7 0.9 0.4 0 0.5-0.3 0.2-0.8 0.4 1.5 1 1.6 0.9 1.2 1 0.5 1.6 0.4 0.3 1-0.3 1-0.6 0.7-0.2 0.9 0.4 0.3 0.8 0.1 0.8-1.4 1.5-0.2 0.5-0.4 0.5-0.4 0.9-1.3 5.5 0.1 0.8-1.3 0.9 0.1 1.5 1.5 3.4 0.1 0.8 0 0.6-0.3 2.5-0.8 2.5-1.7 7.9-0.5 1.3-2.8 3.7-0.4 0.6 0.2 0.7 0.6 1 0.3 0.1 1.3 0 0.6 0.3 0.3 0.5 0.3 0.6 0.4 0.5 1.2 1.2 0.9 1.3 0.4 1.6 0 2-0.2 1.6-0.6 1.9-0.8 1.8-0.9 1.5-1.3 0.7-3.9 1.4-1.6 1-2.8 2.5-1.6 0.9-4.5 1.4-1.4 0.8-6.8 6.3-0.6 0.2-2 0.3-0.9 0.4-2.1 2.2-1.4 1-1.6 0.8-1.7 0.4-1.5-0.2-5.3-2.3-3-0.8-2.4 0-2.9 2.3-2.8 2.9-2.5 3.2-1.8 3.3-1.3 3.1-0.9 1.2-2.9 1.6-1.2 1.1-0.9 1.3-0.3 1.6 0.5 2.9-0.6 1.2z" />
              <path className="ng-state" d="M748.1 334l12.3 0.7 9.6-6.8 7.8-10.2 4.4-3.7 5.5-1.3 6.1-0.6 5.4-2.5 2.1-2.3 1.4-2.8 1.9-1.4 2.8-0.1 4.5-4.1 4.1-4.8 6.2-1.4 6.5 0.9 5.2 2.2 4.2 3.7 4.4 2.9 5.2 1.2 3.8-2.2 2.7-10.2 4.2-10.4 1-5.4-0.1-5.2 0.7-4.4 2.6-0.4 1 0.2 0.9 0.7 2.4 0.9 2.5 0.4 11-2.5 4.4-0.3-0.4 1-13.5 19.4-2.1 4.4-2.8 9.6-2.6 14.6-1.7 4.8 0 1 0.5 1.5 0.1 0.9-0.1 1.1-1.2 2.6-0.9 1.1-1.6 1.2-0.7 0.5-1.1 0.6-1.4 0.6-6 0.7-2.5 0.9-1.3 2.7 0 1.5 0.9 2.5 0.3 1.5-0.3 1.8-1.8 2.8-0.6 1.6 0.1 1.7 0.8 1.3 2.2 2.3 0.8 1.7-0.1 1.2-0.8 1.3-0.7 1.8-1 5.2-0.3 5-2.2 5.5-4.9 1.9-6 0.9-5.2 2.3-1 0.9-2.2 2.8-0.9 0.8-0.6 0.5-4.4 2.1-0.5 0.4-0.6 1.4 0.4 0.2 2.2 0.3 0.7 1.6 0.6 2.3-0.1 3-0.3 1.5-0.4 1.3-3.5 6.3-1.6 3.7 0 3 0.5 2.8-1.7 14.5-0.8 3.3-1.7 2.3-1 0.4-0.9 0-1-0.2-1.1 0-0.8 0.4-0.6 0.9-0.6 2.1-1.2 2.5-1.3 1.5-7.8 4.1-1.1 0.3-1.2-0.2-2.4-1.2-1-0.2-1.4 0.1-0.9 0.5-0.9 0.6-1.2 0.6-1 0.1-1.1-0.2-2.1-0.7 0.6 1.1 1.8 4.4 0.2 1 0.1 2.2-0.7 0.7-2.3 1.6-0.6 0.7-0.4 1-0.6 0.9-0.9 0.6-1.6 0.2-2.9-0.5-1.7 0.7-1.7 2.5-0.6 3.3 0.2 3.5 1.2 6.2-0.1 1.5-0.2 0.7-0.4 1-3.1 4.4-0.4 1.8 0 3 0.4 2.9 0.5 1.9 0.2 1.3-0.4 1.1-2.9 3-7.5 10.5-2.7 5-0.5 1.6-0.3 1.6 0.2 1.7 1.1 4.4-0.3 1.6-1 0.9-1.2 0.8-2 3-4.7 4.7-0.1-0.1-0.9-3.9-1.9-4-1-5.1 0-5.1-3.6-8.8-7.4-7-1.9-2.3-2.6-1.2-2.5 1.1-1.4 2.3-1.7 2.1-2 1.7-2.5-0.2-2-2.2-3.1-5.4-3.3-8.2 0.7-2.4 4.2-4.9 4.9-4.4 19.6-23.6 5.1-4.2 0.7-2.5-0.4-2.8 0.6-5.3 7.6-15.8-0.5-5.3-3.1-3.9-4.8-2.4-2.6-4.4-0.1-2.7 0.4-2.7-0.8-2.4-1.4-2.2-2.6-5.6-4.4-3.9-2.4-0.8-2.6-0.4-1.9-1.8-7-13.2 7-1.1 6.4-2.9 14.1-8.4 2.8-2.3 1.1-3.2-0.4-10.2 0.8-6.7z" />
              <path className="ng-state" d="M716.3 368.8l7 13.2 1.9 1.8 2.6 0.4 2.4 0.8 4.4 3.9 2.6 5.6 1.4 2.2 0.8 2.4-0.4 2.7 0.1 2.7 2.6 4.4 4.8 2.4 3.1 3.9 0.5 5.3-7.6 15.8-0.6 5.3 0.4 2.8-0.7 2.5-5.1 4.2-19.6 23.6-4.9 4.4-4.2 4.9-0.7 2.4 3.3 8.2 3.1 5.4 2 2.2 2.5 0.2 2-1.7 1.7-2.1 1.4-2.3 2.5-1.1 2.6 1.2 1.9 2.3 7.4 7 3.6 8.8 0 5.1 1 5.1 1.9 4 0.9 3.9 0.1 0.1-4.5 4.3-4.7 7.1-1.5 1.4-1.4 1-0.6 0.7 0.4 0.4 1.8 0.4 1.1 0.9 3.8 5.5 2.9 3.2 1 1.9-0.7 1.7-0.8 0.3-0.6-0.1-0.7-0.4-0.8 0-1.1 0.3-0.8 0.5-3.2 2.9-1.2 0.8-0.2 0.7-0.1 0.7-0.5 0.6-0.5 0.2-1.2 0-0.8 0.2-0.8-0.1-0.3 0.1-0.3 0.4-0.3 1-0.3 0.4-4.4 2.8-4.6 4.3-1.4 1.9-0.4 2 0.5 1.2 1.6 1.9 0.4 1.3-0.2 2.1-0.5 2-2.2 5.2-1.8 2.5-2 1.1-3 0.3-2 1.7-1.2 2.5-0.4 3.2-0.5 1.7-1.5 1.4-1.9 1-1.9 0.4-0.8 0-1.7-0.4-0.8-0.1-0.3 0.2-0.8 0.7-0.4 0.2-0.6-0.1-0.8-0.5-0.4-0.2-2.3 0.3-4.7 0.5-2-0.3-1.3-1.2-1.4-3.6-1.3-5.9-0.3-3 0.2-3-0.3-3.6-1.4-3.1-2.6-2-7.1-1.3-2.4-2.5-1.5-3.3-0.7-3.5-1.2-3-2.5-1.7-6.3-2.4-5.3-2.8-2-0.6-1.3-1.1-0.4-3.8-1.4-1.8-1.1 2.2-1 2.7-0.6 2.9-0.5 5.9-0.3 0.2-0.4 0.1-0.5 0.4-0.9 1.2-0.6 1.1-0.3 1.2-0.1 1.7-19.5 0.3-2.1-0.7-1.6-1.2-0.8-1.5-1.1-5.6-0.6-1.3-1-0.2-1.8 1-18.6 15.8-1.7 0.8-1.5-0.5-1.5-0.7-1.8-0.1-1.4 1.6-5.8 18.2 0 0.3-1 0.7-2.7 0 0-0.1 1.8-7.3 0.9-12.8-0.3-4.8 2.5-13.3 2.3-4.5 3.1-3.8 3.8-2.8 3.3-3.1 0.5-8.9 3-9.2-3.3-8.9-7.8-6.9-6.8-8.5-8.6-6-11.5-1.3-11.7 0.3-3 0.6-5.1 2.3-2.4 0.6-0.9-1.7 4.2-6.3 2.6-2.2 11-7.4 1.6-1.3-0.3-2.1-0.6-1.4 0.2-1.3-0.3-3.9-4-5.1 0.3-2.4 0.8-2 1.3-1.7 1.8-0.8 3.8 1.3 1.7 0.9 2.2 0.4 2.3 0.7 2.1 0.3 2.1-0.1 3.1-2 2.1-3.3 4.1 0.3 5.7-0.4 5.5-1.6 4.9-3.7 4.4-4.5 5-3.6 5.4-3 2.1-1.9 4-4.8 1.7-2.7 3.7-4.4 17.5-4.3 12-5.9 2.6-5-0.1-2.9-1-4.8 0.6-2.3 0-2.3-2.2-7.3-1.3-2.1-0.6-2.2-0.8-5.8 0.5-4.9-0.5-4-1.6-3.7 4.1-2.7 9.6-0.3 9.3-4.3 5-0.9 5.2 1.3 5.3 0 8 0.6 26.6-1.1z" />
              <path className="ng-state" d="M537.8 497.4l-4.2 6.3 0.9 1.7 2.4-0.6 5.1-2.3 3-0.6 11.7-0.3 11.5 1.3 8.6 6 6.8 8.5 7.8 6.9 3.3 8.9-3 9.2-0.5 8.9-3.3 3.1-3.8 2.8-3.1 3.8-2.3 4.5-2.5 13.3 0.3 4.8-0.9 12.8-1.8 7.3 0 0.1-0.9 0-2.2 0.5-1.2 0.9-1.7 3.4-1.2 1.2-1.6 0.8-3 1.1-1.5-2.5-2.2-3.9-9-10.7-6.7-3.4-12 2.3-4.3 0-2-0.4-1.5-1.3 0.7-4.6-1.8-3.9-9.1-5.3-5.5-2-5.2-0.4-4.9 1.8-0.9 2.5 0.7 2.9-1.3 2.1-2.6 1.4-3.2 0.8-3.3 0.1-3.1-0.5-2.9 0-2.3 1.7-2 2.2-2.3 1.2-2.5 0.3-1.7-2-1-2.5-0.6-3-0.8-1.2-1.5-0.2-0.3 0.8-0.9 1.3-1.7-0.1-1.7 0.4-2.9 3.8-2.9 0.7-3 0-3.2 0.4-1.2 2.5-0.7 6.4-3.4 4.6-5.2-3.2-2.5-5.3 2.6-7.1 0.1-3.7-0.9-3.7-1.9-3-3.1-1.5-2.8 0.7-2.2 1.7-3.1 0.3-2.8-1.4-2.9-2-2.5-2.4-2.1-2.6-2.9-6.1-0.8-3.1 2.9 1.4 3.3 2.7 2.4 1.1 2.1-0.6 0.2-3.5 1.2-3 10-5.5 3.2-5.2 1.3-6.1 0.2-2.5 0.9-2.2 1.5-2.7-1.9-1.3-2.8 0.4-2.5-1.4-0.9-2.9-1.2-9.2 0.2-8.8-0.3-2.8-1.5-2.7-2.2-2.3-2.3-3.3-0.9-3.8-0.2-4.1 0.4-4.4 3.8 1 4.9 0.5 3.6 1.3 2.6 0.6 5.4 0.6 2.6 0.7 3.8 2.3 1.3 0.5 6.4 1.1 2 0.7 4.1 2.1 2.4 0.7 2.4 0.3 2.2 0.6 1.7 1.9 3.6 2 1.8 1.4 0.9 0.5 0.9 0.3 0.6 0.1 1-1.3-0.5-2.6-3.6-7.9-1.8-5.5 1.3-5.4 4.2-3.6 10-1.1 15.3 5.1 5.5 1.2 8.3 0.3 2.8-0.2 0-0.5 14.4 10.8z" />
              <path className="ng-state" d="M562 611.7l-0.5 0.2-2.2 1.4-2.3 4.4-2.1 1.3-1.2 0.1-1-0.1-0.9 0.1-1 0.5-1 1.2-2.2 4.6-1.9 2.7-10.4 8.4-7 7.3-1.6 2.4-1 1-1.2 0.6-0.4 0.5-0.2 2.2-0.2 1-1.4 0.2-1.6-0.6-1.7-0.3-1.3 1.3-1 1.3-2.7 1.8-0.8 1.2 0.2 1.6 0.8 1.2 0.7 1.3-0.4 1.9-1.3 1.7-1.3 1-0.6 1 1 2 1.5 1.5 1.7 1.3 1.4 1.5 0.8 2-0.4 1.8-1.1 1.5-1.4 1.4-1.2 1.5-0.4 1.6 0.1 1.5 0.2 1.5 0.1 1.6-0.5 1.7-1.6 3.2-0.5 1.8 0.1 1 0.6 1.9 0.1 0.8-2.1 10.3-0.5 1-0.8 0.4-0.9 0.1-0.8 0.4-0.8 0.8-1.5 2.3-0.4 1-1.2 3.3-0.7 1.5-1.1 1.6-3 4.7-0.4 1.4-2.1 1.5-0.7 1.2 0.3 1.6 0.2 1.1 0.3 1.1-1.3 1.2-0.1 0-0.1-0.4-0.5-0.3-0.7-0.2-0.6 0.3-0.8 0.7-0.7 0.8-0.3 0.6-0.1 0.6-0.7 1.5-0.2 0.8 0 0.7 0.5 1.1 0 0.7-0.7 1.2-0.8 0.4-1-0.2-1.2-0.3-0.3 0-0.7 0.1-0.6-0.2 0.4-0.7 0.3-0.5 0.3-0.8 0.2-0.8-0.3-0.3-0.7 0.2-1.5 0.7-1 0.2-2.2-0.9-0.1-2.1 0.7-2.7 0.4-2.6-0.5 0-0.5 2.6-1.7 1.3-2.1-0.1-2-1.8 0.2-0.3 0.3-0.7-0.5-0.2-1.6-0.8 0.4-1.1-0.6-0.8-2.1-1.5-1.8-1.1-0.1 0-0.4-1.3-0.9-1.6-0.5-0.7-1-0.3-0.8-0.3-0.9-0.9-0.8-0.8-0.3-0.6-0.5 0 0 0.5 4.1 3.9 1.1 1.3 1.9 3.7 0.3 1.7-1.2 0.9 0.5 1 0.8 1.2 0.8 1 0.7 0.4 0.4 0.3-0.9-0.1-2.9-2.2-8.9-9.3-2.7-3.8-2.1-3.8-1-4.3 0.5-9.3-1.2-1.4-3.4-2.1-2-0.5-4.4 0.7-1.5-1.1-0.9-1.5-1.2-3.2 2.1-2.4 3.6 0.7 0.9-2.7-3.6-7-1.8-8 0.7-4.3-1.3-3.5 0.3-1.9 0.7-1.7 1.2-1.5 1-1.5-0.2-1.7 0.1-1.8 1-1.1 2.7-4.1 0.9-3.4-1.2-2.4 0.9-1.9 3-1 2.9 0.9 1.5 3.4 1.9-0.1 1.4-1.3 3.5-1.7 1.2-1.5 1-1.6 2 0 2.2 1 1.2-2 1.4-5.7 1.5-2.3 1.7-2.3 4.3-4.3 0.6-5.2-1.4-2.2 0.5-2.6 4.8-2.6-0.3-2.4-1.6-2.1-0.8-2-0.3-2.4-1.3-1.5-0.3-0.8-0.5-0.8-1.1-0.6-1-0.8-2.9-3.3-1.1-4.2 2.5-0.3 2.3-1.2 2-2.2 2.3-1.7 2.9 0 3.1 0.5 3.3-0.1 3.2-0.8 2.6-1.4 1.3-2.1-0.7-2.9 0.9-2.5 4.9-1.8 5.2 0.4 5.5 2 9.1 5.3 1.8 3.9-0.7 4.6 1.5 1.3 2 0.4 4.3 0 12-2.3 6.7 3.4 9 10.7 2.2 3.9 1.5 2.5z" />
              <path className="ng-state" d="M223.7 207.8l-1.5 1-1.7 0.1-0.8-1.2-1.1-0.7-0.9 0.3-0.9 0.3-1.2-0.7-1.6-0.4-1.6 0.4-14.4 6.5-2.6 3.3-3.3 2.1-3.4-1.1-2.5-2.8 0.7-7.4 3.3-7.2 2.6-12.1-0.5-29.8 2.7-4.8 5.4-1.4 5.2 1.7 3.4-1.8 0.3-5.8-2.3-12.5 0.3-2.9 0.8-2.9 0.6-5.6-1.7-4.9-2.5-4.4 0.4-3.1 0.9-2.9 0.4-1.1 0.3-1.2 0-1.5 0.3-1.4 1.1-2.3 0.2-2.4-1.3-1.7-1.9 0.7-1.5 1.8-1.1 2.1-2.4 1.4-2.8-0.3-2.8-1.3-2.5-1.7-2.6-1-2.8-0.7-5.1-1.9-4.7-2.8-2.3-2.2-2.3-1.9-2.8 0.6-2.6 1.3-4.9-0.8-5.8 0.1-0.6 0.2 0.2-1.8 0.2-18.6 4.9-0.2 2.2-0.4 2.2-1.1 11.9-11.4 3.5-2.6 4.1-1.6 9.1-2.2 15-3.7 2.5-0.3 1.7 0.8 1.7 1.6 1.7 0.8 4.4 0.3 7.7-1.4 10.9 0.4 2.6-0.5 0.8-0.3 2.4-1.7 1-1.2 1.3-2.9 0.8-1.2 2.1-1 11.2-2 2.5 0.5 21.4 8.6 21.5 8.6 0.7 0.3 0.5 0.5 0.5 0.2 0.7-0.2 4.4-2.5 1.5-0.3 4.1 0.9 1.4 0.3 5 2.9 10.7 10.2 12.3 13.6 6.2 11.4-3.8 3-5.9 3.4-7.4 0-7.4-1.8-1.2-1.2-1.2-1.4-1.4-0.5-1.4-0.4-1.6-0.2-3.6 0-1.1 1-0.3 1.9-0.1 2.1-0.9 3.2-1.9 0.5-2.9-1.2-5.5 0.7-4.8 2.7-0.9 2.2 1.3 13.3-2.2 4.2-2.7 1.3-2.8 0.7-17.1 1.7-3.8 3-2.9 4.6-3.9 5-3.6 2.5-0.5 5.1 1.5 5.7 0.3 6.1-3.7 4-23.2 1-11.1-1.9-2.8 9.3-0.6 36.3z" />
              <path className="ng-state" d="M299.7 251.8l-0.7-11.8-5.8-9.3-2.9-1.1-1.5-2.4 1.9-5.8 0.4-5.3-3.6-3.5-2.8-1-5.6-0.9-1.3 0.3-1.2 0.7-11.5 0.8-4.5-1-6.6-2.9-1.1-2.2-1.8-1.5-4.3 0.6-1.8-0.1-1.6-0.7-1.7 0.1-1.3 1.3-0.6 1.8-1.4 0.8-1.7 0.1-4 1-1.6-0.3-1.2-1.1-3.1-1.2-3.1 0.6 0.6-36.3 2.8-9.3 11.1 1.9 23.2-1 3.7-4-0.3-6.1-1.5-5.7 0.5-5.1 3.6-2.5 3.9-5 2.9-4.6 3.8-3 17.1-1.7 2.8-0.7 2.7-1.3 2.2-4.2-1.3-13.3 0.9-2.2 4.8-2.7 5.5-0.7 2.9 1.2 1.9-0.5 0.9-3.2 0.1-2.1 0.3-1.9 1.1-1 3.6 0 1.6 0.2 1.4 0.4 1.4 0.5 1.2 1.4 1.2 1.2 7.4 1.8 7.4 0 5.9-3.4 3.8-3 1.9 3.4 4.5 5.2 2.7 2.6 2.5 1.8 2.3 0.9 2.5 0.3 5.6 0 1.4-0.2-1.3 8.1 2.4 32 1.7 3.9-0.4 4.7 2.1 4.1 1.1 3.9 0.4 4 0.7 2.2 0.5 2.4-0.5 2-1.7 4.5-1.2 2.4 1.5 1.9 2.6 1.2 4.2 3.4 0.8 4.6-2.3 0.9-2.4-0.7-1.3 1.4-0.4 2.5-1.8 1.7-3.2 2.6-1.2 0.6-0.5-0.2-0.6-0.7-0.5-0.2-5.6 0-4.4 2.1-2.9 13.8 2.6 4.8-0.5 2.6 0.3 2.7-0.7 3.6-1.2 3.4-1.2 2.3-1.6 1.5-5.3 3.4-1.6 2-0.8 2.3-1.4 6.9-0.8 1.7-1 1.3-1.1 1-1.4 0.8-6.3 2.5-0.7 0.3-0.7 0.2-1.2-0.2-0.8 0.1-5 1.5-1.7 0-1.7-0.4-5-1.8-1.6-0.2-1.5 0.6-0.9 1.1-1.4 2.9-0.9 1.2-0.8 0.5-1.8 0.7-0.8 0.5-0.6 1-0.1 1 0 1-0.3 1-1.1 1-3.5 1.2-1.1-5.1-5.8-9.8-3.3-4.3z" />
              <path className="ng-state" d="M781.6 99.4l-0.1 0.1-1.7 14.9 1.3 4.9 3.4 3.8 4 3 0.7 4.8-1.9 4.7-3.3 4.7-8.4 7.9 1.6 11.6-3.5 26.1 1.8 7.7-0.4 3.4-4.6 9.1-0.4 3.1 2 0.6 2.6-0.4 3 1 2.3 2.6 1.3 2.7 0.4 2.8-7.7 9.6-3.1 5.6-2.1 2.2-1.6 2.5-0.4 6.6 0.4 6.5-2.3 5.3-4.7 3.5-17.9 6.3-4.3 4.8-1 6.2 0.5 6.4-0.9 2.7-1.7 2.3-2.4 1.9-2.9 0.8-2.8 0.3-5.4-0.5-0.6-2.3-0.6-5.6 1-17.7-0.5-2.6-1.6-2-7.9-8.1-3.7-5-4.2-4.5-4.8-3.7-10.4-5.1-10.5 2.7-3.7-0.5-2-2.7 2.6-11.9-0.4-6.5-9.1-22.6-2.3-12.4-0.1-5.4-0.5-3.3-1.4-3-1.6-2.5-0.4-2.7-0.1-3.1-1.2-6.2-1-2.9-4.3-4.2-5.2-3.6-1.6-5-1.4-11-2.3-5-2.1-1.6-2.6 0.1-2.8-0.6-2.7-1.3-2.5-0.2-5 1.4-3.3-0.5-0.7-1.9-2-7.8-1.9-3-3.2-1-3.4 0.9-7.1 2.9-3.7 1-5.3 2.2-1.3 1-0.9 2.1-1.2 1.9-6.6 2.9-7.2-2.4-2.1-0.5 13-15.5 2.6-2.4 1.4-1 0.8-0.2 0.4 0 0.3 0 0.6-0.7 0.4-0.8 0.3-1.9 0.3-0.8 1.3-1.3 14.4-8.1 3.2-1.3 36.8-8 2.1-0.4 7.3-0.6 13.7 1.6 36.9-0.2 22.9 5.9 8.4 3.4 10.5 6.5 3.5 2.8 1.5 0.7 4.5 1.1 2.5-0.2 1.1-0.2 1.6-1.1 1.2-0.3 3.8 1.4 0.9 0.5 0.3 0.5 0 0.4 0.2 0.3 0.6 0.1 0.2-0.2 0.4-0.4 0.4-0.4 0.8-0.1 0.7 0.5 0.6 0.7 0.5 0.3 0.8-0.4 1.2 0.4 2.7 0.1z" />
              <path className="ng-state" d="M378.2 105.9l0.4-0.1 1.7-0.8 3.5-3.2 4.7-5.5 1.6-0.3 7.9 1.5 2.8 0 2.3-0.8 27.6-16.7 2.6-1.1 2.6-0.3 19.2 2.8 2.1 0.8 0.8 0.6 1.8 1.7 2.1 1.3 2.6 2.1 1.1 0.5 2.2 0.6 0.1 0 1 0.5 1 0.9 1.9 2.3 7.5 6.9 0.6 0.4 0.8 0.3 0.2 0 0.4-0.2 0.8-0.5 0.9-0.2 1.9-0.3 0.9 0 2 0.5 1.8 0.9 3.3 2.5 1.5 1.6 2.2 3.6 1.3 1.6 2.8 1.6 19.9 6 2.7 0.3-0.1 0.7-0.4 1.2-1.3 0.5-0.9 0.9-0.7 1.1-0.6 1.5-0.8 1.3-3.4 2.7-3.6 1.9-4.1 1-3-0.3-1.1-1-1-1.2-2.3 1.4-1.8 0.1-1.9-0.8-1.7-1.1-2.1-3.5-1.3-4-1.4-1.4-11.7 0.5-5-0.6-5.4 0.1-8.1 1.3-1.1 2-0.6 5.2 0.2 5 4 2.5 6 0.1 1.6 1.8 0.9 2.3-3.7 0.1-3.5 1-1.8 3.3-2.5 7.5-2.8 2.6-13.3 5-5.8 4.1-0.9 3.5 0.7 7.5-0.4 16.2 1.6 5 0.3 2.5-0.1 1.5-0.4 1.4 0.3 1.2 0.7 1 1.9 4.8 0.2 3-3.3 0.8-4.3 2.2-3.5 0.9-2.4 2.8-1.2 3.7-0.5 3.8 1.1 3.9 5.2 4.5-2.6 4-6.1 2.5-2.2-0.9-1.5-2.1-2.6-1.9-2.9-1.3-5.5-1.1-4.8 2.8-1.2 2.5-0.4 2.8-2.1 1.1-2.7-1-5.8 0-1.3 4.1 1.3 2 0.1 2.2-1.9 2-2.4 1.3-2.6-0.3-3.9-4.1-2.6-1.6-5.6-1.5-0.1-2.1 2.1-2.3 1.2-0.9 0.2-1.5-0.9-1.8-1.6-1.2-4-0.1-1.9-0.5-3.4-1.7 1.2-3.4 0.7-3.6-0.3-2.7 0.5-2.6-2.6-4.8 2.9-13.8 4.4-2.1 5.6 0 0.5 0.2 0.6 0.7 0.5 0.2 1.2-0.6 3.2-2.6 1.8-1.7 0.4-2.5 1.3-1.4 2.4 0.7 2.3-0.9-0.8-4.6-4.2-3.4-2.6-1.2-1.5-1.9 1.2-2.4 1.7-4.5 0.5-2-0.5-2.4-0.7-2.2-0.4-4-1.1-3.9-2.1-4.1 0.4-4.7-1.7-3.9-2.4-32 1.3-8.1z" />
              <path className="ng-state" d="M574 118.7l2.1 0.5 7.2 2.4 6.6-2.9 1.2-1.9 0.9-2.1 1.3-1 5.3-2.2 3.7-1 7.1-2.9 3.4-0.9 3.2 1 1.9 3 2 7.8 0.7 1.9 3.3 0.5 5-1.4 2.5 0.2 2.7 1.3 2.8 0.6 2.6-0.1 2.1 1.6 2.3 5 1.4 11 1.6 5-10 6.7-4-1-2.3-1.5-5.7 1-2.4 0.9-1.7 1.7-1.1 3.3-0.7 3.4-5.5 15.5-0.5 2.5 0.7 3.2-1.2 2.6-23.1 8.9-2.5 1.6-2.5 1.2-6.4 0.5-4.1 3.7-1.6 5.7 3.2 2.2 4.7-1.3 2.7-0.3 2.6 0.6 1.2 2.6 1.1 5.5 0.1 2.6-2.5 4.8-0.3 2.5 1.5 2.1 2.5 0 1.3-0.4 3.1 5.5 7.3 9.7 5.5 2.2 12.1 2.3 6.4 0.3 5.5 1.8-0.4 2.5-1.8 2.1-2.6 1.6-8.4 3.3-1.5 5.2 0.8 2.8-2.1 1.3-2.9-1.1-2.6-1.3-12 0.9-4.3-1.8-1.8-4.3 0.7-5 0-5-1.7-4.6-3.3-3.1-4.4 1.1-9.8 0.7-3.8-1.3-3-3.8-4.7 0.7-4.8-0.3-4.8-2-4.5-1.2-4.6-0.1 0.2-1-0.1-2.1 0.1-1.1 0.7-2.3 1.2-2.1 6.7-6.1 0.7-1.8-1.7-1-1-0.3-1.7-1.1-2.1-2.2-1.1-1.7-1.7-4.4-0.9-0.6-2-0.3-3.3 0.3-1.2-1.1 1-4.7 2.8-4.1 0.6-1.8 0.4-1.8 0.9-2.5 0.2-2.6-1.2-4.6-0.8-2.3-3.5-0.4-2.7 1.9-4.7 0-0.1-2-0.5-1.9-0.6-0.3-3.1 0.5-1.8 0.7-0.8-0.3-0.7-0.6-1.1-1.7 0.7-1.2 0.8-1 0.3-1.4 0-7.1-3.2-4-4.8-0.5-4.2-1.5-0.6-2.3 0.1-2.7-1-2.1-1.9-1.3-2-1.1-1.8-1.4-0.7-2.7 0.1-3-0.3-2-1.8-0.8-4.9-1.3-4.5-0.7-4.5 0.9-3.8 2-2.3 3.4-1.3 3.8-0.9 1.5-1.3-0.8-0.3-1 0-1.2-0.6-1.3-3.8-6.9-0.9-2.3-1.6-1.8-6-0.1-4-2.5-0.2-5 0.6-5.2 1.1-2 8.1-1.3 5.4-0.1 5 0.6 11.7-0.5 1.4 1.4 1.3 4 2.1 3.5 1.7 1.1 1.9 0.8 1.8-0.1 2.3-1.4 1 1.2 1.1 1 3 0.3 4.1-1 3.6-1.9 3.4-2.7 0.8-1.3 0.6-1.5 0.7-1.1 0.9-0.9 1.3-0.5 0.4-1.2 0.1-0.7 22.1 2.6 2.8 0 4-1.2 1.4-0.1 16.1 1.9 1.6-0.1 0.5-0.2 0.8-0.6 0.9-0.7 0.5-0.6z" />
              <path className="ng-state" d="M183.5 619.1l0.1-0.1 4.5 0.4 1.2-1.4-0.1-2.1-4.2-1.8-2.3 0-1.3-1.5 1.2-0.5 2.5-0.3 3.9-2.8 1.2-0.4 0.8-1 0.2-1-0.7-3.6 0-5.4-1.4-2-1.9 0.9-1.2 1.8-3.3 2-3.9-0.1-1.2-0.2-2.4-0.8-1.1-0.7-1.1-2 0.1-2.3 1.8-5.1 3.8-4 6.8-5 1.4-1.9 1.8-10 2.9-1.5 1.2-1.7 0.5-1.9 2.1-3.6 3.2-2.5 3-0.9 2.8 1.2 3.9 2.5 0.9 0.4 2 0.2 0.8-0.6 0.2-1.6-0.2-1.8 0.3-2-0.1-5.8 0.7-3.6 1.3-3.6 3.3-1.7 3.7-1 0.1-3.1 5.3-1.7 2.8-0.1 8.3 0.6 5.4-0.3 3.8 1.1 1.9 3.8 1.6 5.2 4.3 1.7 7.9-6.7 4.2-9.8 1.4-7.2 1-2.2 3.2-3.6 2-1.1 1-1.3 0.7-1.4 2-1.1 2.1 0.9 1.8-0.7 1.4-2.2 6.1-1.1 2.3 1.1-0.5 3 3.8 5.9 4.7 5.1-1.4 2.4-1.7 2-0.9 0.4-2.1 0.5-1 0.9-0.7 2.7 2.2 1.5 0.4 1.3-0.8 1.6 0.3 2.4 0.5 1.1 0.2 1.7-0.7 2.5-1 1.1-1.3 0.8-1.8 1.6-1.7 1.9-0.1 1 0.3 0.8-3.5 8-0.5 1.8-1 1.3-2 2.1-1 2.8-0.2 2.7 1.1 2.3 0.3 0.9-0.3 0.7-0.4 0.2-0.3 0.5 0 1.2-1.7 0.4-0.7 1.9-0.9 4.9-0.4 1-1 1.8-0.9 0.6-1.2 0.4-2.4-0.5-1-0.9-2.2-0.2-3.7 3-1.7 0.3-2-5 0.8-2.2 1.2-1.9-3.4-2.7-21.3-0.1-1.2 0.6-0.9 1 0 2-1.3 1.6-0.9 2.1-2.7 2.6-2.4 2.9-0.8 1.6-0.3 2.5-0.3 1.1 0 2.3 0.4 0.7 0.6 0.3 1.3 2.1 1.4 4-1.8 4-1.3 1.9-0.5 2.3-1.1 1.8-1.9 1.1-1.7 0.5-1 1.6-0.4 2.3-0.4 0.9-0.5 0.5-0.2 0.6 0.4 0.7 1.6 0.9 1.8 1.6 1.6 1.9 0.2 1 0.7 0.3 0.9 0 0.9 0.4 0.9 0.6 1.4 2.2-0.1 2.4-8.4 20.6-0.1 0.1-8.8-11.5-1.6-1.5-3-1.3-1.3-1.5-2-3.1-2.6-2.7-2.3-1.9-5.7-3.6-2.5-1.6-4.7-4.4-2.9-1.8-1.2-0.6z" />
              <path className="ng-state" d="M222.1 654.6l0.1-0.1 8.4-20.6 5.3 2.6 3.6 4.1-0.7 5 0.6 4 1.5 1.1 1.4-0.5 4.3-3.8-0.4-2.5 0.8-1.8 4.9 0.2 2.3-0.4 2.8 0.2 2.9 2.1 1.4 0.6 0.8 0.1 0.7-0.6 0.5-1 4.2-2.6 4.7-0.2 8.8 4.8 4.1 4.5 2.6 1.4 2.1 1.6-0.3 2.8-1.7 2.7 0.4 0.9 0.8 0.7 0.4 0.9-0.3 0.9 0.1 1.2 1.3 0.4 1.4 0 7.4-1.6 3.9-2.8 3.1-3.7 4.2-3.2 3.1-3.6 0.9-2.9 0-3-1-0.9-1.4-0.3-4.5-4.2-2.4-3.8-0.9-3-0.2-2.6-2.4-4.2 0.2-2.8 1.1-2.1 1.8-1.7 2.5 0.3 2 2 1.5 2.4 2.1 0.1 3.2-4 2-1.2 7.1-3 9.2-5.6 4.6-1.9 2.8-0.1 2.6 0.5 2.2-0.7 2.3-2.9 0 2.4 0.4 2.2 2.1 7.5 0.4 4.2 1.4 3.7 0.3 3 0.3 1 1 1.9 0.4 1.1 0.1 1-0.2 3.4-0.3 1-0.5 0.6-0.8 0.4-1 0.4-1.5 1.2-0.3 1.7 0.3 4-1.1 3.9 0 0.7 0.1 1.3-0.1 0.7-0.3 0.6-3 4.1-1.5 2.6-0.8 1.9-0.5 2.1-0.2 3.2-2 8.8-1.5 3.5-0.3 1.6-0.3 2.1-0.4 1-0.6 0.8-1.4 1.6-0.5 0.3-1.3 0.5-0.5 0.4-0.7 0.8-0.5 0.3 0.1 0.2 1.3 3.3 0.2 1.6-1.2 0.7-9.8 1.5-1.3 0.4-1.4 1.1-0.7 0.6-0.5 0.7-0.4 0.8-0.2 0.9 0 1.1-0.2 0.4-1.3 0.4-3.2 0-1.5 0.5-0.6 1.8 0.2 0.8 0.7 1.2 0.2 0.6-0.4 0.8-0.9 0.5-1.8 0.5-0.6 0.5-0.4 0.5-0.6 0.4-1 0.2-0.9-0.1-1-0.3-0.8-0.1-0.7 0.3-2.2 3-1.2 0.6-2.1-0.2-1.5-0.7-1.6-1-2.6-2.3-1 0.5-2.5 3.6-2.1 1.1-2.3 0.4-1.4-0.3-1.4 0.5-1.4 0.6-1.4 0.5-2.6 1.8-2.8 1.4-1.1 0-1.3 0.2-1.9-0.3-1.4-1.1-3.9-2.1-3.5-1.2-2.9-1.9-2-1.7-0.5-1.2 1.6 0.2 1.6 0.4-0.6-1-2.1-2.2-0.7-0.5-0.3 0.3 0 1.4-0.2 0.3-0.7 0.1-0.6 0.1-1.1 0.4-1-0.5-1.8 0.3-0.8-0.4-0.1-0.6 0.1-2.7-0.3-3.5-1.6-6.9 0.4-1 1.8-0.4 5-0.1 1.4-0.4 0.2 0.7 0.2 0.5 0.7 0.9 0.6-0.4 0.5-1.2 0.5-0.5 0.4-0.3 2.6-1 1.3-0.3 1.1 0.1 0.8 0.5 0.5 0-0.6-0.9-1.8-1.6-0.7-1.2-0.3-1-0.1-1.3 0.2-1.2 0.4-0.9 1-0.6 1.2-0.3 2.5 0.1 0.9-0.4 0.9-1 1.1-1.7-1.2 0.5-1 0.9-1.1 0.6-1.4-0.5-0.2 0.4-0.5 0.3-0.4 0.4-1.7-0.4-1.8 0.9-1.1 1.7 0.5 2-0.9 1.8-1 1.2-1.2 0.3-1.6-0.7-0.4-0.5-0.2-0.5-0.3-0.4-0.9-0.1-0.4 0.4 0.2 1 0.5 1 0.5 0.7-4.4-0.3-8.6-2.8-0.3-0.4-0.4-0.9-0.2-0.4-2.4-2.2-1.6-1.1-0.6-1.6-0.1-1.6 0.2-0.8 0.5-0.2 1.2-1.4 0.7-0.4 0.5-0.1 7.5 0.3 2.8 0.4 1.5 0.9 0.6 0 0.7-1.1 1.3-2.7 0.6-0.9 0.9-0.4 1.2 0 1.2 0.4 0.8 0.6 0.2 0.5 0.4 1.7 0.2 0.4 0.8-0.1 0.4-0.2 0.1-0.5 0-0.8-0.6-1.2-1.2-1.3-1.6-1.1-1.3-0.6-1.4 0.1-0.8 0.7-0.9 2.4-0.8 0.7-1.2 0.6-1.4 0.3-1.3-0.1-1.4-0.8-0.6-1.1 0-1.3 1.4-4.1 0.2-1.1-0.1-1.5-0.5 0-2.1 5.7-0.8 1.5-1 1-1.3 0.5-1.8 0.2-0.8 0.2-1.8 1-1.9 0.7-0.4-0.2-1.1-0.7-1.1-1-1.2-1.5-1-1.6-0.7-2.1-0.7-1.1-0.7-1.4-0.3-1.7 0.2-1.6 0.5-1.7 0.7-1.4 0.9-0.6 0.9 0.3 1.5 1.2 0.6 0.2 0.4-0.5-0.2-0.7-0.3-0.8 0.1-0.7 2.4-2.1 6.2-2.3 1.7-2.9-1.6 0.3-2.6 2.3-3 0.9-5.7 3.1-1.1 0.8-3.8 3.5-0.8 0-2.8-6.3-0.4-0.4z" />
              <path className="ng-coverage" d="M256.8 709.5l2 1.7 2.9 1.9 3.5 1.2 3.9 2.1 1.4 1.1 1.9 0.3 1.3-0.2 1.1 0 2.8-1.4 2.6-1.8 1.4-0.5 1.4-0.6 1.4-0.5 1.4 0.3 2.3-0.4 2.1-1.1 2.5-3.6 1-0.5 2.6 2.3 1.6 1 1.5 0.7 2.1 0.2 1.2-0.6 2.2-3 0.7-0.3 0.8 0.1 1 0.3 0.9 0.1 1-0.2 0.6-0.4 0.4-0.5 0.6-0.5 1.8-0.5 0.9-0.5 0.4-0.8-0.2-0.6-0.7-1.2-0.2-0.8 0.6-1.8 1.5-0.5 3.2 0 1.3-0.4 0.2-0.4 0-1.1 0.2-0.9 0.4-0.8 0.5-0.7 0.7-0.6 1.4-1.1 1.3-0.4 9.8-1.5 1.2-0.7-0.2-1.6 7 0.6 2.2 2.6 0.3 0.4 0.2 0.3-0.1 0.6-0.2 0.4-0.7 0.6-0.1 0.3-0.4 0.2-1.4 0.3-0.3 0.5-0.2 0.8-0.5 0.8-2.5 3.2-1.9 1.3-1.6 1.6-1.1 2.4-0.4 3.5-0.6 1.6-1.3 0.7-0.5 0.7-0.5 1.6-0.3 1.9 0 1.5 0.2 0.9 0.3 0.8 0.4 0.8 0.6 0.7-1.3 1.4-0.8 1.7-0.2 1.1-1.5 2.3-0.9 2.6 0 3.1 1.7 2.3 1.1 0.5 1.1 0.1 0.6 0.9-0.3 1.4 0.8 2.3 2.3-0.2 6.3-2.3 4.7 2.9 0.6 2.8 1.2 2.5 2.1 1.6 2.5 1.1 0.8 1.2-0.4 0.6-1.2 3.2-0.5 3.4 0.5 2.5-0.3 0.7 0 1.5-0.2 0.9-0.7-1.7-0.2-1-0.2-4.7-0.4-0.9-0.3 0.5-0.4 0.5-0.4 0.3-0.5 0.3 0.4 1.1 0.1 3.5 0.3 1.3 0.9 1.6 0.6 1.5 0.8 2.6 0 0.9-0.5 0.8-0.8 0.3-2.3-0.1-2.2 0.3-0.4-0.5-0.8-2.5-0.3-2.3 0.1-3.5-0.3-2.7-1.1-2-2.3 0.2 2.1 1.7 0.7 2.7-0.2 3.1-1 2.9-0.2 2.5-3.7 0.9-4.4-0.4-2.1-1.4-1 0.2-1 0.3 0.5 1.4-1.2 0.5-1.9 0.1-1.4 0.4-1.5 0.6-3.4 0.1-1.5 0.5-1.8-2.1 1.5-3.2 5-5.6-1-0.1-0.6-0.1-0.5 0-0.6 0.2-2.6 3.1-0.3-4.1-1.3-3.7-0.4 0-0.1 1.5 0.1 2 0.4 1.9 0.6 1.3-0.8-0.7-0.6-0.8-0.9-0.7-1.4-0.3 0.9 1.8 0.8 1.1 0.5 1.3-0.1 2-0.5 1.5-0.5 1.1-0.5 0.4-0.6 0.2-0.5 0.4 0 1.1 0.6-0.3 0.5 0 1 0.3-0.4 0.7-2.1 0.7-2.8 0.2-1.9-0.5-0.3 0.3-0.5 0.4-0.3 0.3-1.2-0.5-0.7-0.7-0.2-1.1 0-1.4 0.3-1.2 1-1.8 0.2-1.1-0.3 0.2-0.8 0.2-0.4 0.1 0-1.2 0.3-2.1-0.8 0-0.8-0.2-0.9-0.4-0.9 0.3-0.3 0.7 0.2 1.2 0.3 1 0.3 0.7-0.3 1 0.4 0.8 0.6 0.9 0.4 1.2-0.3 1.6-0.5 0-0.9-0.8-1.2-0.5-1.7-0.1-0.6-0.4-0.1-2.7 0.5-0.1 0.1-0.2-1-1.5-0.1-0.2-0.1-1.3 0.1-1.3-0.4 0-0.6 2.6-0.4-0.4-1.2-0.7 1.2 2.6 0.2 1.3-0.9 0.8-1.1-0.1-1.2-0.7-0.9-0.9-0.6-0.4-1.6-0.5-1.7-1.4-0.9-1.9 0.8-1.9-0.8-0.1-0.6 0.3-0.2 0.5 0.1 0.9-0.5 0-1.3-1.3-3-1.8-0.9-1.1 0.5 0.3 1 0.4 0.5 0.4-0.6-1-0.9-0.5-1-0.2-1.1-0.4-1.6-1.8-0.6-0.8-2-2.1-0.5-0.3-7-6.6-2.1-2.9-0.8-3.3 0.3 0.1 0.3 0.1 0.5 0.4 0-1.5-3.3-2-0.9-1.5-0.3-1.2-1.9-3.3-0.9-0.9 2.6 1.5-0.6-1.8-2.5-2.7-2.1-5.9-0.6-3.6-0.4-1.1-1-2-0.4-1.2-0.2-1.2-0.2-0.6-0.6-0.6-0.5-0.8-0.3-1.2 0.4-0.9 0.9-0.4 1.2 0.1 1.2 0.4 0.8 0.7 1.4 1.9 0.9 0.6-1.1-3z" />
              <path className="ng-coverage" d="M335 689.8l-1.3-3.3-0.1-0.2 0.5-0.3 0.7-0.8 0.5-0.4 1.3-0.5 0.5-0.3 1.4-1.6 0.6-0.8 0.4-1 0.3-2.1 0.3-1.6 1.5-3.5 2-8.8 2.2 2.1 2.5 0.1-0.8 2.7-2.4 12 0.5 1.7 2.7 0.2 2.8-0.7 3.1 3.3-0.6 5.4-1.1 2.4 0.1 2.7 0.7 0.8 1.8 1.3 0.5 1 8 5.2 10.7 0.8 9.5-1 4 1.2 2.4-0.3 2.3-0.6 1.5 2.8-0.4 3.7-7.8 12 1 5.9 3.1 0.9 6.2-1.2 3-0.1 2.9 1.2 4 0.1 5 3.4 1 1.9 1.3 2.1 0.7 2.9-0.1 1.8-0.5 0.3-0.5 0.7-0.3 0.7 0.2 1.1 0.2 0.9 0 0.7-0.6 0.9 0 0.5 1 1.3 0.3 0.6-0.3 0.2-1.2 1.4-0.7 0.6-0.9 0.5-0.9 0-0.7-0.6-0.5 0-0.7 1.5-1.6-0.1-2.6-1.4-1.9-0.1-2-0.4-1.7-0.8-0.9-1.3-0.5 0.3-0.5 0.1-1.4 0.1-0.2 0.2-0.1 0.6-0.3 0.5-0.7 0.3 0 0.5 0.5 0.3 0.5 0.2-0.4 0.5 1 0.4 1.2 1 2.1 0.4 0.4 0.6-0.1 0.6-0.5 0.7-3.4 0.5-0.3-0.4-1.7-2.5-4.8-5.2-0.7-1.6 0-2-0.2-0.7-0.5 0-1.1 0.5-1.6 0-0.3-0.1-0.6-0.7-1.4-1.1-0.6-0.8-1.2-3.5-0.8-1.1-0.1 0.7-0.4 0.7-0.4 0.6-0.2 0 0.2 0.8 0.4 0.1 0.5 0.1 0.5 0.6 0.7 2.6 0.8 1.1 1.3 0.5 2.4 1.1 1.7 2.6 0.3 2.5-2 1 1 0.7 1.1 1.1 0.7 1.3-0.5 1.4-2.1 2.3-1.2 0.6-1.6-0.6-0.1 1.1 0.1 0.4-1.4-0.6-1.1-0.9-0.4-1.1 0.3-1.5-1 0.9-0.2 1.3 0.4 1.3 0.8 1.2-2.1 0.5-0.5 0-0.9-1.8-0.5-1.9-0.2-3.8-1.2-2.1-0.4-1.3 0.9-0.6 0.3-0.6 0.4-1.4 0.2-1.6-0.2-1 0.4 0.2 0.7 0.1 0.5 0.1-0.5-0.8-1.6-1.7-0.3-0.8-0.4-1.7-0.3-0.7-1.4 2-0.5 0-0.3-1.3-0.9-1.7-0.4 1.2 0.2 1.8-0.3 0.6 0.8 1.3 1.7 4.5-0.8 0-0.5-0.1-0.4-0.3-0.3-0.7-0.3 0.3-0.7 0.3-0.7-1.5-0.8-1.3-2.2-2.5 0.2 1.3 0.3 1 1.1 1.9 0.6 0.8 0.3 0.4 0.1 0.6-0.3 0.7-0.5 0.4-0.2 0.4 0.5 0.9 0.8-1.2 1.4-0.4 1.3 0.4 0.7 0.9-0.8 5.3 0.2 1.8 2.7 5.3 0.9 1.2-0.1 0.8-0.4 0.7-0.8 0.3-1-0.1-0.8-0.4-1.4-0.6 0.1 0.3 0.1 0.4 0.2 0.4-1.6-0.5-1.7-0.8-1.7-0.3-1.8 0.6-0.8-0.9-0.6-1.2-0.1-1.4 0.5-1.3-1.3-0.6-1.2-2-0.8-2.4-0.3-2 0.1-1.3 0.4-0.8 0.5-0.5 0.6-0.8 0.3-0.7 0.3-1.2-0.2-1.2-1.2-0.5-2-1.1-1.3-2.5-1.2-4.7-0.2-1.9 0.3-1 0.7-1 0.6-1-0.2-0.6-0.7-0.1-1 0.9-0.7-0.9-0.2-0.5-0.1-0.7-0.7 0.3-0.6 0.1-0.7-0.1-0.6-0.3 0.3 1.3 0.2 1.3 0.3 1.1 1 0.5 0.7 0.5 0.5 1.4 0.6 2.7 0.3 2.9 0.4 1.3 0.6 0.6 1 0.5 1 1.2 1.4 2.4-1.7 1.5-0.4 0.6-0.1 1.1 1.5 7.4 0.8 2.3 1 1.2-0.2 1.7 1.6 1.4 0.9 1.1-1.8 1-2.4 0.4-3 0.2-2.8-0.2-1.7-1-0.2-1.1 0.2-4.4 0.4-0.6 0.1-0.4-0.2-0.4-0.7-0.5-0.1-0.3 0-2.7 0.2-1.2 1.7-4.6 0.2-0.8-0.1-2.2-1 1.2-0.8-1.2-2.5-1.1-2.1-1.6-1.2-2.5-0.6-2.8-4.7-2.9-6.3 2.3-2.3 0.2-0.8-2.3 0.3-1.4-0.6-0.9-1.1-0.1-1.1-0.5-1.7-2.3 0-3.1 0.9-2.6 1.5-2.3 0.2-1.1 0.8-1.7 1.3-1.4-0.6-0.7-0.4-0.8-0.3-0.8-0.2-0.9 0-1.5 0.3-1.9 0.5-1.6 0.5-0.7 1.3-0.7 0.6-1.6 0.4-3.5 1.1-2.4 1.6-1.6 1.9-1.3 2.5-3.2 0.5-0.8 0.2-0.8 0.3-0.5 1.4-0.3 0.4-0.2 0.1-0.3 0.7-0.6 0.2-0.4 0.1-0.6-0.2-0.3-0.3-0.4-2.2-2.6-7-0.6z m79.4 69.1l2.5-0.3 0.8 0.3-0.4 1-0.7 0.9-1.3 0.3-2.9-0.1-1.2 0.1-3.7 1.4-1.3 0.1-5.6-0.3-1.2-0.6-0.4-1 0.7-1.4 0.7-0.3 3.7-1.2 0.9 0.4 2.7 1.3 1.3 0.4 1.4-0.2 2.7-0.7 1.3-0.1z m-20.2-0.6l3.5-0.3 0.9 0.3-0.9 0.8-0.5 0.9-0.1 1.1 0 1.1-0.3 1.2-0.8 0.8-1 0.6-1.1 0.5-6.7 1.4-2.6-0.3-0.7-0.9 0.7-1.4 2.4-2.6 1.8-2.6 1.4-1.7 0.3-0.7 0.3-1.3 1.1 0.6 1.1 2.1 1.2 0.4z" />
              <path className="ng-state" d="M441.4 691.9l-2.1 2.4 1.2 3.2 0.9 1.5 1.5 1.1 4.4-0.7 2 0.5 3.4 2.1 1.2 1.4-0.5 9.3 1 4.3 2.1 3.8 2.7 3.8 8.9 9.3 2.9 2.2 0.9 0.1 0.4 0.4 1.1 3.3 1 1.2-0.3 0.5-0.6 1.7-0.1 0.7 0.3 1.1 0.7 0.4 0.9 0.3 0.7 0.6 0.2 1.7-1.2 1.1-1.4 0.9-0.8 1.2-1 2.3-0.7 0.4-0.8 0.1-3.3 0-4.3-0.5-6.5 0-3.1-0.4-1.5 0-2.5 1.3-1.5 0.2-3.3 0-12.9 1.5-0.8-0.4-0.9-0.1-0.9 0.3-0.6 0.8 0.8 0 0.7 0 0.6 0.2 0.5 0.3-1.6 0.4-2.5 0.2-2.2-0.4-1-1-1-0.3-6.8-0.4 0.3-0.4 0.1-0.2 0.2-0.2 0.5-0.3-1-0.3-0.9 0.2-0.6-0.1-0.2-0.9 0.3-0.4 0.5-0.3 0.5-0.5 0.3-0.8-0.2-0.4-1.4-1.7 0.3-0.3 0.3-0.8-1.1-1.3 0.2-1.9 1.4-3.5-0.5 0-0.8 0.6 0.1-1.8-0.7-2.9-1.3-2.1-1-1.9-0.5-3.2-1.7-3 0.3-1.3 0.4-1.3-1-3.7 1.7-2.8 2.5-2.5 0.4-3.4-0.4-3.5 0.3-3.3 1-4.7-0.1-1.5-0.8-1.4 0.1-1.5 3.4-1 3.9 0.6 2.2-1.5 0.5-1.4-0.8-1.4-1.9-0.6 0.1-1 1.8-4.2-0.4-5.2 2-1.4 2.9 0.4 3.7 2.7 2.6 3.9 4.3 2.4 3.9 3.1z" />
              <path className="ng-state" d="M439.9 667.1l1.3 3.5-0.7 4.3 1.8 8 3.6 7-0.9 2.7-3.6-0.7-3.9-3.1-4.3-2.4-2.6-3.9-3.7-2.7-2.9-0.4-2 1.4 0.4 5.2-1.8 4.2-0.1 1 1.9 0.6 0.8 1.4-0.5 1.4-2.2 1.5-3.9-0.6-3.4 1-0.1 1.5 0.8 1.4 0.1 1.5-1 4.7-0.3 3.3 0.4 3.5-0.4 3.4-2.5 2.5-1.7 2.8 1 3.7-0.4 1.3-0.3 1.3 1.7 3 0.5 3.2-5-3.4-4-0.1-2.9-1.2-3 0.1-6.2 1.2-3.1-0.9-1-5.9 7.8-12 0.4-3.7-1.5-2.8 5.5-16.1 2.9-3.2 0.9-1.9 0.7-2 1-1.6 0.6-1.8 0-2-0.3-2.1 0-2.1-0.6-2-0.8-1.4 0.7-1.1 0.7-3.5-1-8.5-2.9-2.6-2.1-0.5-3.8-1.9-1.6-1.4 3.5-4.5 5.1-2.7 0.5 0.3 0.2 0.3 3.6-0.6 3.6-0.1 5 3.7 0.1 4.5-0.7 4.9 4.5 2.2 11 0.2 4.1 1.9 0.5 2.6 1.3 2.3 2.4 1.9 2.8 1z" />
              <path className="ng-state" d="M436.1 595.5l2.5 5.3 5.2 3.2 3.4-4.6 0.7-6.4 1.2-2.5 3.2-0.4 3 0 2.9-0.7 2.9-3.8 1.7-0.4 1.7 0.1 0.9-1.3 0.3-0.8 1.5 0.2 0.8 1.2 0.6 3 1 2.5 1.7 2 1.1 4.2 2.9 3.3 1 0.8 1.1 0.6 0.5 0.8 0.3 0.8 1.3 1.5 0.3 2.4 0.8 2 1.6 2.1 0.3 2.4-4.8 2.6-0.5 2.6 1.4 2.2-0.6 5.2-4.3 4.3-1.7 2.3-1.5 2.3-1.4 5.7-1.2 2-2.2-1-2 0-1 1.6-1.2 1.5-3.5 1.7-1.4 1.3-1.9 0.1-1.5-3.4-2.9-0.9-3 1-0.9 1.9 1.2 2.4-0.9 3.4-2.7 4.1-1 1.1-0.1 1.8 0.2 1.7-1 1.5-1.2 1.5-0.7 1.7-0.3 1.9-2.8-1-2.4-1.9-1.3-2.3-0.5-2.6-4.1-1.9-11-0.2-4.5-2.2 0.7-4.9-0.1-4.5 3.7-1.2 2 1 1.6 1.1 2.7 2.5 2.1-1-0.9-4 0.5-3.8 1.8-2.1 1.5-2.2-0.1-2.3-0.6-2.4-0.1-2.3-0.9-3.2-0.1-1.1-1.3-2 3.3-10.1 0-5.4-3-9.8 2.5-1.5 2.5 0.2 5-0.5z" />
              <path className="ng-state" d="M343.6 664.6l0.2-3.2 0.5-2.1 0.8-1.9 1.5-2.6 3-4.1 0.3-0.6 0.1-0.7-0.1-1.3 0-0.7 1.1-3.9-0.3-4 0.3-1.7 1.5-1.2 1-0.4 0.8-0.4 0.5-0.6 0.3-1 0.2-3.4-0.1-1-0.4-1.1-1-1.9-0.3-1-0.3-3-1.4-3.7-0.4-4.2-2.1-7.5-0.4-2.2 0-2.4 0.7-0.2 1.7 0.1 2 0.4 1.9-0.3 2.5-2.4 1.7-7.5 1.8-3.6 5.1-4.9 0.7 2.1-0.1 2.5 1 0.4 4-0.1 4.4 1.8 2.4 0.6 2.3 1-0.3 5.1-4.2 4.6-2.1 5.7 0.7 1.9 1.1 0.5 2.6 0.5 1.1 0.6 1.6 2.2 2.4 5.5 0.4 0.7 0.2 0.8-0.5 0.6-0.5 0.2 0 1.5-0.1 1.3-0.3 1 0.6 0.9 1.2-0.2 1.1-0.9 1.2 0.8 0.3 1.8 1.8 1.4-0.4 2.6 0.9 2.2 1.3 2.1 0.8 2.4 1.6 1.9 2.2 0.3 2-0.6 0.8 0.1 1.3 0.8 0.4 0.8 0.8 0.2-5.1 2.7-3.5 4.5-3.2 0.6-3.1 1.1-6.8-1.5-3.5 0.4-3.4 0.8-2.9 1.8-1 3.2-3 6.1-3 0.8-3.2-1.3-5.9 1.6-5.1 4-2.5-0.1-2.2-2.1z" />
              <path className="ng-state" d="M230.6 633.9l0.1-2.4-1.4-2.2-0.9-0.6-0.9-0.4-0.9 0-0.7-0.3-0.2-1-1.6-1.9-1.8-1.6-1.6-0.9-0.4-0.7 0.2-0.6 0.5-0.5 0.4-0.9 0.4-2.3 1-1.6 1.7-0.5 1.9-1.1 1.1-1.8 0.5-2.3 1.3-1.9 1.8-4-1.4-4-1.3-2.1-0.6-0.3-0.4-0.7 0-2.3 0.3-1.1 0.3-2.5 0.8-1.6 2.4-2.9 2.7-2.6 0.9-2.1 1.3-1.6 0-2 0.9-1 1.2-0.6 21.3 0.1 3.4 2.7-1.2 1.9-0.8 2.2 2 5 1.7-0.3 3.7-3 2.2 0.2 1 0.9 2.4 0.5 1.2-0.4 0.9-0.6 1-1.8 0.4-1 0.9-4.9 0.7-1.9 1.7-0.4 0-1.2 0.3-0.5 0.4-0.2 0.3-0.7-0.3-0.9-1.1-2.3 0.2-2.7 1-2.8 2-2.1 1-1.3 0.5-1.8 3.5-8-0.3-0.8 0.1-1 1.7-1.9 1.8-1.6 1.3-0.8 1-1.1 0.7-2.5-0.2-1.7-0.5-1.1-0.3-2.4 0.8-1.6-0.4-1.3-2.2-1.5 0.7-2.7 1-0.9 2.1-0.5 0.9-0.4 1.7-2 1.4-2.4 1.3 0.7 1.5-0.3 1.3 0.8-0.3 1.5 2.5 0.8 0.6 1.8-0.9 3.3 1.9 2.6 3.5-0.1 3.5-1.4 1.5-1 1.5-0.3 0.8 1.3 1.1 1 2.5 1.7 2.2 2.5 1.7 0.1 2.9-0.7 1.6 0.2 1.9 1.7 1.7 4.2 1 1.4 0.3 1.4 1 1.5 3.8-0.7 3.1-1.3 2-0.2 1.1 0.9 0.9 1.1 0.2 1.3 1 0.6 2 0.6 0.2 0.6 1.2 2.7 0.2 0.7 0.1 1.4-0.3 1.4-1 2.8-0.3 4-0.7 1.8 0 0.8 0 3.3-0.2 0.7-1.9 4.3-0.9 2.9 0 1.3 0.4 4-0.3 9.8 0.3 3.2 1.5 4.4 0.1 1.1 0 1.1-2.3 2.9-2.2 0.7-2.6-0.5-2.8 0.1-4.6 1.9-9.2 5.6-7.1 3-2 1.2-3.2 4-2.1-0.1-1.5-2.4-2-2-2.5-0.3-1.8 1.7-1.1 2.1-0.2 2.8 2.4 4.2 0.2 2.6 0.9 3 2.4 3.8 4.5 4.2 1.4 0.3 1 0.9 0 3-0.9 2.9-3.1 3.6-4.2 3.2-3.1 3.7-3.9 2.8-7.4 1.6-1.4 0-1.3-0.4-0.1-1.2 0.3-0.9-0.4-0.9-0.8-0.7-0.4-0.9 1.7-2.7 0.3-2.8-2.1-1.6-2.6-1.4-4.1-4.5-8.8-4.8-4.7 0.2-4.2 2.6-0.5 1-0.7 0.6-0.8-0.1-1.4-0.6-2.9-2.1-2.8-0.2-2.3 0.4-4.9-0.2-0.8 1.8 0.4 2.5-4.3 3.8-1.4 0.5-1.5-1.1-0.6-4 0.7-5-3.6-4.1-5.3-2.6z" />
              <path className="ng-state" d="M681.7 369.3l-5.3 0-5.2-1.3-5 0.9-9.3 4.3-9.6 0.3-4.1 2.7-2.4-1-12.6-7.9-37.1-17.3-2.4 0.5-1.1 0.7-1 1.8 2.9 4.2 1 2.7-0.7 2.5-4.9 1.9-2 1.7-2.2 4.7-2.7 1.2-3 0.6-12 0.6-10.7-2-4.7-1.5-2.6-4.6-3.4-4-2.7-0.9-1.8-1.8 0.3-2.4 1-2.2 1.4-2.1 0.5-2.3-0.3-6.3-1.6-5.2-4.9-1.8-8.7 1.6-2.8-1.9 0.1-12.3-0.4-3.8-1.5-4.2-2.7-3.4-4.5-1.1-4.3 0.7-1.6-1.9-1.8-1.6-2.3-1.3-1-2 2.5-4.6 0.9-5 3.4-3.8 2.2-5.1-0.6-5.3-3.4-4.1-2.2-5.9-0.2-6.5 0.5-5.8 2.3-4.8 4.5-0.3 2.7-1.3 2-2.2 3-4.4 7.8-8.2 5-2.3 1.2 0.8 1.3 0.6 1.4-0.3 5.7-2.3 4.6 0.1 4.5 1.2 4.8 2 4.8 0.3 4.7-0.7 3 3.8 3.8 1.3 9.8-0.7 4.4-1.1 3.3 3.1 1.7 4.6 0 5-0.7 5 1.8 4.3 4.3 1.8 12-0.9 2.6 1.3 2.9 1.1 2.1-1.3-0.8-2.8 1.5-5.2 8.4-3.3 2.6-1.6 1.8-2.1 0.4-2.5-5.5-1.8-6.4-0.3-12.1-2.3-5.5-2.2-7.3-9.7-3.1-5.5-1.3 0.4-2.5 0-1.5-2.1 0.3-2.5 2.5-4.8-0.1-2.6-1.1-5.5-1.2-2.6-2.6-0.6-2.7 0.3-4.7 1.3-3.2-2.2 1.6-5.7 4.1-3.7 6.4-0.5 2.5-1.2 2.5-1.6 23.1-8.9 1.2-2.6-0.7-3.2 0.5-2.5 5.5-15.5 0.7-3.4 1.1-3.3 1.7-1.7 2.4-0.9 5.7-1 2.3 1.5 4 1 10-6.7 5.2 3.6 4.3 4.2 1 2.9 1.2 6.2 0.1 3.1 0.4 2.7 1.6 2.5 1.4 3 0.5 3.3 0.1 5.4 2.3 12.4 9.1 22.6 0.4 6.5-2.6 11.9 2 2.7 3.7 0.5-1.6 1.2-1.2 1.7-1.8 2-7.1 4.1-3.7 5-2.4 1.9-5.8 1.8-2.2 1.9-2.3 5.7-2.6 9.1-1.2 2.9-3.9 5.6-0.3 2.1 8.1 3.5 2.4 5.4 0.8 6 5.4 2.6 4.9 3.1 1.6 4.6-0.2 10.7 0.3 2.3-0.2 2.2-8.6 4.4-0.4 2.6 3.1 4.4 15.6 11.7 2.3 5 0.5 5 1.2 4.8 2.2 4.4 1.7 2.1-0.5 1.9z" />
              <path className="ng-state" d="M643.2 376.2l1.6 3.7 0.5 4-0.5 4.9 0.8 5.8 0.6 2.2 1.3 2.1 2.2 7.3 0 2.3-0.6 2.3 1 4.8 0.1 2.9-2.6 5-12 5.9-17.5 4.3-3.7 4.4-1.7 2.7-4 4.8-2.1 1.9-5.4 3-5 3.6-4.4 4.5-4.9 3.7-5.5 1.6-5.7 0.4-4.1-0.3-2.8-4-4.1-2.6-8.8-3.8-4.8-0.1-4.8 1.4-6.9 1.3-7.2-0.1-4.6-1.3-6.3-3.3-1.7-3.2 0.5-3.7-0.6-3.1-1.8-2.6-1.5-3.7 1.3-3.2 1.9-2.4 1.8-2.7 2.8-0.9 1.8-1.7 3.2-4.4 1.1-2.6 0.4-2.2-1.4-1.8-2-1.3-2.4 0.6-1.2 0.5-1.3 0.2-5.1 0.1-5-1-3.6-3.7-1.2-5.2-3.7-2.8-4.4-2.1 1.6-4.4 0.3-4.7-2.9-4.1-3.6-3.8-3-4.5 0-10.9 2.1-1.6 0.2-1.4 0-1.3 3.1-4.3-0.6-2.6 0.4-3 0-5.9 3-10.1-2-5.8 1.4-5.8 3.8-4.3 2.7-1.3 1.9-2.4 0.4-2.6 0.7-2.2 4.3-0.7 4.5 1.1 2.7 3.4 1.5 4.2 0.4 3.8-0.1 12.3 2.8 1.9 8.7-1.6 4.9 1.8 1.6 5.2 0.3 6.3-0.5 2.3-1.4 2.1-1 2.2-0.3 2.4 1.8 1.8 2.7 0.9 3.4 4 2.6 4.6 4.7 1.5 10.7 2 12-0.6 3-0.6 2.7-1.2 2.2-4.7 2-1.7 4.9-1.9 0.7-2.5-1-2.7-2.9-4.2 1-1.8 1.1-0.7 2.4-0.5 37.1 17.3 12.6 7.9 2.4 1z" />
              <path className="ng-state" d="M571.6 464l-2.1 3.3-3.1 2-2.1 0.1-2.1-0.3-2.3-0.7-2.2-0.4-1.7-0.9-3.8-1.3-1.8 0.8-1.3 1.7-0.8 2-0.3 2.4 4 5.1 0.3 3.9-0.2 1.3 0.6 1.4 0.3 2.1-1.6 1.3-11 7.4-2.6 2.2-14.4-10.8 0 0.5-2.8 0.2-8.3-0.3-5.5-1.2-15.3-5.1-10 1.1-4.2 3.6-1.3 5.4 1.8 5.5 3.6 7.9 0.5 2.6-1 1.3-0.6-0.1-0.9-0.3-0.9-0.5-1.8-1.4-3.6-2-1.7-1.9-2.2-0.6-2.4-0.3-2.4-0.7-4.1-2.1-2-0.7-6.4-1.1-1.3-0.5-3.8-2.3-2.6-0.7-5.4-0.6-2.6-0.6-3.6-1.3-4.9-0.5-3.8-1-1-0.2-1.2-0.1-10.7 1-13.4-1.1-2.5 0.2-15.3 5.2-3.9 2.4-0.1 0.4-0.5 0.3-1.5 1.3-2.6 1.6-1.8 0.8-0.6-0.2 0.1-3.2 0.9-3.1 1.3-2.1 1-2.4 1.1-11.3-0.3-5-3.6-6.5 1.8-4.9 0.7-2.6 10.9-1.7 10.7-2.9 9.7-4.9 3.4-3.7 2.6-4.3 3.3-9.1 3.5-15.5-0.2-7.5 0.2-4.8 1.7-8.2 1.4-2.5 0.9-0.3 0.9-0.6 0.2-1.4-0.2-1.6 2.2-1 1.1 2 1.8 1 2.4-0.2 1.9 1.5 1.3 0.2 1.2 0 2.6 1.1 2.6-1.1 2.9-5.4 4.7-0.8 2.4 2.3 0.7 1.8 0 1.9 2.4 2 3 1.8 0.8 9 2 7.4 6-3.3 4.3-6.2 2.1-1.9 2.4 1 6.8 1.9 3.1 3.9 1.5 1.5 1 1.7 1.8 1.8 3-0.3 3.2-3.3 2.4-4.3 2-4.6 2.8-3.2 4.4 2.1 3.7 2.8 1.2 5.2 3.6 3.7 5 1 5.1-0.1 1.3-0.2 1.2-0.5 2.4-0.6 2 1.3 1.4 1.8-0.4 2.2-1.1 2.6-3.2 4.4-1.8 1.7-2.8 0.9-1.8 2.7-1.9 2.4-1.3 3.2 1.5 3.7 1.8 2.6 0.6 3.1-0.5 3.7 1.7 3.2 6.3 3.3 4.6 1.3 7.2 0.1 6.9-1.3 4.8-1.4 4.8 0.1 8.8 3.8 4.1 2.6 2.8 4z" />
              <path className="ng-state" d="M729.6 291.7l0.9 6.7-5.6 9.1-0.1 3.4 1.5 3.4 2.4 2.9 2.9 2 3.3 1.3 2.7 1.9 5.1 8.2 5.4 3.4-0.8 6.7 0.4 10.2-1.1 3.2-2.8 2.3-14.1 8.4-6.4 2.9-7 1.1-26.6 1.1-8-0.6 0.5-1.9-1.7-2.1-2.2-4.4-1.2-4.8-0.5-5-2.3-5-15.6-11.7-3.1-4.4 0.4-2.6 8.6-4.4 0.2-2.2-0.3-2.3 0.2-10.7-1.6-4.6-4.9-3.1-5.4-2.6-0.8-6-2.4-5.4-8.1-3.5 0.3-2.1 3.9-5.6 1.2-2.9 2.6-9.1 2.3-5.7 2.2-1.9 5.8-1.8 2.4-1.9 3.7-5 7.1-4.1 1.8-2 1.2-1.7 1.6-1.2 10.5-2.7 10.4 5.1 4.8 3.7 4.2 4.5 3.7 5 7.9 8.1 1.6 2 0.5 2.6-1 17.7 0.6 5.6 0.6 2.3 5.4 0.5 2.8-0.3z" />
              <path className="ng-coverage" d="M410.8 561.6l0.8 3.1 2.9 6.1 2.1 2.6 2.5 2.4 2.9 2 2.8 1.4 3.1-0.3 2.2-1.7 2.8-0.7 3.1 1.5 1.9 3 0.9 3.7-0.1 3.7-2.6 7.1-5 0.5-2.5-0.2-2.5 1.5 3 9.8 0 5.4-3.3 10.1 1.3 2 0.1 1.1 0.9 3.2 0.1 2.3 0.6 2.4 0.1 2.3-1.5 2.2-1.8 2.1-0.5 3.8 0.9 4-2.1 1-2.7-2.5-1.6-1.1-2-1-3.7 1.2-5-3.7-3.6 0.1-3.6 0.6-0.2-0.3-0.5-0.3-0.8-0.2-0.4-0.8-1.3-0.8-0.8-0.1-2 0.6-2.2-0.3-1.6-1.9-0.8-2.4-1.3-2.1-0.9-2.2 0.4-2.6-1.8-1.4-0.3-1.8-1.2-0.8-1.1 0.9-1.2 0.2-0.6-0.9 0.3-1 0.1-1.3 0-1.5 0.5-0.2 0.5-0.6-0.2-0.8-0.4-0.7-2.4-5.5-1.6-2.2-1.1-0.6-2.6-0.5-1.1-0.5-0.7-1.9 2.1-5.7 4.2-4.6 0.3-5.1-2.3-1-2.4-0.6-4.4-1.8-4 0.1-1-0.4 0.1-2.5-0.7-2.1 2-4 2.6-1.7 0.1 0.7 0.1 0.6 0.3 1.1 0.5 0.5 1.2 1.8 1.9 0.8 3.4-2.6 2.8-3.5 6.4-4.4 3.7-3.5 4.4-5.7 1.4-1.2 2.3-0.9 2.5-1.9 2.7-1.4 3.7 0.2 2.5 2.3z" />
              <path className="ng-state" d="M314 435l3.4-0.7 1.3 0.2 0.5 0.4 2.8 1.9 1.6 0.3 1.2 0.6 0.9 1 1.9 3.2 0.1 1.4 0.1 0.6 1.2 2.4 0.2 0.6 0.4 0.1 0.3 0.7 0.1 0.7 0.2 2.2 1 3.7 1.7 3.5 0.6 0.3 7.5 5.7 0.9 1 3 4.8 2.8 3.1 1 0.4 0 0.5 1.1 0.9 0.3 0.5 1.3-1.3 0.5-2 0.8-1.9 1-0.8 1 0.6 0.4-1.2-0.2-1.7 1.2-1.2 1.6-0.6 2.2-2.1 1-3.1 4.7-0.1 2.8 0.3 2.7-0.5 0.7 0-0.7 2.6-1.8 4.9 3.6 6.5 0.3 5-1.1 11.3-1 2.4-1.3 2.1-0.9 3.1-0.1 3.2 0.6 0.2 1.8-0.8 2.6-1.6 1.5-1.3 0.5-0.3 0.1-0.4 3.9-2.4 15.3-5.2 2.5-0.2 13.4 1.1 10.7-1 1.2 0.1 1 0.2-0.4 4.4 0.2 4.1 0.9 3.8 2.3 3.3 2.2 2.3 1.5 2.7 0.3 2.8-0.2 8.8 1.2 9.2 0.9 2.9 2.5 1.4 2.8-0.4 1.9 1.3-1.5 2.7-0.9 2.2-0.2 2.5-1.3 6.1-3.2 5.2-10 5.5-1.2 3-0.2 3.5-2.1 0.6-2.4-1.1-3.3-2.7-2.9-1.4-2.5-2.3-3.7-0.2-2.7 1.4-2.5 1.9-2.3 0.9-1.4 1.2-4.4 5.7-3.7 3.5-6.4 4.4-2.8 3.5-3.4 2.6-1.9-0.8-1.2-1.8-0.5-0.5-0.3-1.1-0.1-0.6-0.1-0.7-2.6 1.7-2 4-5.1 4.9-1.8 3.6-1.7 7.5-2.5 2.4-1.9 0.3-2-0.4-1.7-0.1-0.7 0.2 0-1.1-0.1-1.1-1.5-4.4-0.3-3.2 0.3-9.8-0.4-4 0-1.3 0.9-2.9 1.9-4.3 0.2-0.7 0-3.3 0-0.8 0.7-1.8 0.3-4 1-2.8 0.3-1.4-0.1-1.4-0.2-0.7-1.2-2.7-0.2-0.6-2-0.6-1-0.6-0.2-1.3-0.9-1.1-1.1-0.9-2 0.2-3.1 1.3-3.8 0.7-1-1.5-0.3-1.4-1-1.4-1.7-4.2-1.9-1.7-1.6-0.2-2.9 0.7-1.7-0.1-2.2-2.5-2.5-1.7-1.1-1-0.8-1.3-1.5 0.3-1.5 1-3.5 1.4-3.5 0.1-1.9-2.6 0.9-3.3-0.6-1.8-2.5-0.8 0.3-1.5-1.3-0.8-1.5 0.3-1.3-0.7-4.7-5.1-3.8-5.9 0.5-3-2.3-1.1-6.1 1.1-3.4-1-6-2.9-1.2-1.1-1.1 0.1-2.5-2.3-1.1-3.3 0.6-3.2 2.2-2.8 1.7-1 0.1-1.7-1.1-0.8-1.4-0.2-2.9 0.3-2.7 0.6-2 1.3-1.5-0.6-0.1-3.2 1.5-2.1-0.5-4.6-5.1-3.2-3.1-2.8-0.7-1.4-1.4-1.2-1.1-1.3-2.2-4.4 0.5-2.5 8.7-10.8 3.4-3.1 3 1.2 3.8 3.7 7.6 2.9 7.5 1.8 10.5 0.5 8.3 1.9 2.5-0.5 1.6-1.9 0.7-2.2 1.2-7.9 3.1-10.7 3.2-4.1z" />
              <path className="ng-state" d="M188.2 488.3l4.9-0.3 5 0.5 4.2-0.9 2-0.8 2.1-0.5 0.1 0.6 0.5-0.6 4.3-0.4 3-1.2 3.1 0 1.6 2.7 2.3 1.5 4.3-0.6 1.2 0.2-1.8 6.3-2.3 2.1-2.9 1.3-3.5 4.7-0.6 9.2-0.8 3.3 0.4 4 6 16.2-0.1 3.1-3.7 1-3.3 1.7-1.3 3.6-0.7 3.6 0.1 5.8-0.3 2 0.2 1.8-0.2 1.6-0.8 0.6-2-0.2-0.9-0.4-3.9-2.5-2.8-1.2-3 0.9-3.2 2.5-2.1 3.6-0.5 1.9-1.2 1.7-2.9 1.5-1.2-1.5-3.1 0.3-1.4 0.4-1.2 0.6-1.7-0.1-1.6-0.5-2.6 1.5-2.2-0.1-0.4-1.1-0.2-1.3-0.7-1.9-0.9-1.9-2.5-2.1-3.5 0.1-2.9 1.8-3.1 0.4-0.6-3.4-1.6-3.3-5.3 2.6 5.2-27.6-0.5-2.1-1.4-1.9-1.3-2.4-1.6-2.1-2.1-1.3-1.6-1.7 0.1-2.3 1.3-1.9 0.7-2.2 0.4-2.2 0.2-5 1.3-3.5 5.1 1.4 3.9-2.8-0.1-1.7 0.7-0.7 0.8-0.6 1.4-2 1.6-1.7 2.4 0.9 2.1 1.9 2.7 4.5 3.1 0.6 1.6-1.6 2.2-1.6 0.4-0.4 0.5-0.7 0.6-0.6 0.2 0.3 1.3-1.1 1.4-0.9 1.3-0.5 1.7-0.3 0.4-0.4 0.6-1 0.2-2.6-0.6-2.6z" />
              <path className="ng-state" d="M392.5 704.9l-2.3 0.6-2.4 0.3-4-1.2-9.5 1-10.7-0.8-8-5.2-0.5-1-1.8-1.3-0.7-0.8-0.1-2.7 1.1-2.4 0.6-5.4-3.1-3.3-2.8 0.7-2.7-0.2-0.5-1.7 2.4-12 0.8-2.7 5.1-4 5.9-1.6 3.2 1.3 3-0.8 3-6.1 1-3.2 2.9-1.8 3.4-0.8 3.5-0.4 6.8 1.5 3.1-1.1 3.2-0.6 1.6 1.4 3.8 1.9 2.1 0.5 2.9 2.6 1 8.5-0.7 3.5-0.7 1.1 0.8 1.4 0.6 2 0 2.1 0.3 2.1 0 2-0.6 1.8-1 1.6-0.7 2-0.9 1.9-2.9 3.2-5.5 16.1z" />
              <path className="ng-state" d="M226.8 488.5l0.8 0.6 0.4 1.3 1.6 0.6 4.7-1.4 5 3.2 3 0.2 1.9 0.4 3.2-0.5 0.6 0.2 0.7-0.2 0.9-1.8 0.5-2.5 1.6-1.9 2.7-0.9 8.1-0.2-1.5 2.1 0.1 3.2 1.5 0.6 2-1.3 2.7-0.6 2.9-0.3 1.4 0.2 1.1 0.8-0.1 1.7-1.7 1-2.2 2.8-0.6 3.2 1.1 3.3 2.5 2.3 1.1-0.1 1.2 1.1 6 2.9 3.4 1-1.4 2.2-1.8 0.7-2.1-0.9-2 1.1-0.7 1.4-1 1.3-2 1.1-3.2 3.6-1 2.2-1.4 7.2-4.2 9.8-7.9 6.7-4.3-1.7-1.6-5.2-1.9-3.8-3.8-1.1-5.4 0.3-8.3-0.6-2.8 0.1-5.3 1.7-6-16.2-0.4-4 0.8-3.3 0.6-9.2 3.5-4.7 2.9-1.3 2.3-2.1 1.8-6.3z" />
              <path className="ng-state" d="M397 391.5l-1.8-0.5-1.9 0.6-0.5-1.2 0.8-2.3 0.2-1.1-1.3-1.7-1-0.6-1.5-2.4 0.6-2.8 4.2-3 0.4-1.5 0.2-1.6 0.8-1.2 1.1-1 1.7-2-0.4-2.4-2.3-1.1-1.1-2 0.6-2.1-1.6-1.4-2.8-0.8-1.5-2 1.7-1.3 2.3-0.2 2-1.6 0.1-2.8-1.4-12.3-3.7-2.6-11.2 0.2-5.6-0.7-5.5-2.3-3.3-4.4 1.8-2.2 2.4-1.6 2.1-2.5 2.4-1.9 2.5-1.7 1.9-2.4 0.1-2.6-2.2-1.6-5.4-2-1.7-1.7 1-2.7-0.1-6.2-4.2-3.5-2.6 0.7-1.2-0.3-0.5-6.2-0.7-1.5-2.3-1-2.7-0.2-2.5 1.1 0.3 3-1.7 1.3-2.9-0.5-2.9 0.5-5.5 2.6-2.4-0.4-0.9-2.4-2-1.4-5.4 1.2-9 6.9-4 4.3-1.6 2.6-2 2.2-2.6 0.4-1.3-2.6-1.8-2.4-2.5-1.8-0.5-2.6 0.3-1.5 0.5-1 0.1-1 0-2.1 0.2-0.9 1.1-2.6 0.3-1.7 0.1-1-0.1-0.9-1.3-3.8-0.1-2 0.5-6.4 0.6-2 1.5-1.7 1.5-0.7 3.5-1.2 1.1-1 0.3-1 0-1 0.1-1 0.6-1 0.8-0.5 1.8-0.7 0.8-0.5 0.9-1.2 1.4-2.9 0.9-1.1 1.5-0.6 1.6 0.2 5 1.8 1.7 0.4 1.7 0 5-1.5 0.8-0.1 1.2 0.2 0.7-0.2 0.7-0.3 6.3-2.5 1.4-0.8 1.1-1 1-1.3 0.8-1.7 1.4-6.9 0.8-2.3 1.6-2 5.3-3.4 1.6-1.5 1.2-2.3 3.4 1.7 1.9 0.5 4 0.1 1.6 1.2 0.9 1.8-0.2 1.5-1.2 0.9-2.1 2.3 0.1 2.1 5.6 1.5 2.6 1.6 3.9 4.1 2.6 0.3 2.4-1.3 1.9-2-0.1-2.2-1.3-2 1.3-4.1 5.8 0 2.7 1 2.1-1.1 0.4-2.8 1.2-2.5 4.8-2.8 5.5 1.1 2.9 1.3 2.6 1.9 1.5 2.1 2.2 0.9 6.1-2.5 2.6-4 5.3-0.5 8.9-6.6 10.6-3.5 2.7 1.3-0.1 2.9-1.4 2.6-0.4 2.7 1.6 2.5 2.4 1.7 5.4 1.9 2.4 1.9 1.9 2.6 5.3 2 5.7 1.6 7.8 8.3 1.5 10.7-1.5 5.9 1.2 9.2-1.1 2.9-3.2 0.8-1.6 2.2 4.2 3.4 6 0.8 3.4 4 1.4 0.8 3.2 0.7 1.6-0.3-0.9 5-2.5 4.6 1 2 2.3 1.3 1.8 1.6 1.6 1.9-0.7 2.2-0.4 2.6-1.9 2.4-2.7 1.3-3.8 4.3-1.4 5.8 2 5.8-3 10.1 0 5.9-0.4 3 0.6 2.6-3.1 4.3 0 1.3-0.2 1.4-2.1 1.6 0 10.9 3 4.5 3.6 3.8 2.9 4.1-0.3 4.7-1.6 4.4-2.8 3.2-2 4.6-2.4 4.3-3.2 3.3-3 0.3-1.8-1.8-1-1.7-1.5-1.5-3.1-3.9-6.8-1.9-2.4-1-2.1 1.9-4.3 6.2-6 3.3-2-7.4-0.8-9-3-1.8-2.4-2 0-1.9-0.7-1.8-2.4-2.3-4.7 0.8-2.9 5.4-2.6 1.1-2.6-1.1-1.2 0-1.3-0.2-1.9-1.5-2.4 0.2-1.8-1-1.1-2-2.2 1-2.3 0.5-1.4-2.6-2.8-1-2.4 3.3-1.6 1.3-1.9-0.8-2.1-0.4-2.1 0-7.2 0.8z" />
              <path className="ng-state" d="M432.2 232.7l-5.2-4.5-1.1-3.9 0.5-3.8 1.2-3.7 2.4-2.8 3.5-0.9 4.3-2.2 3.3-0.8-0.2-3-1.9-4.8-0.7-1-0.3-1.2 0.4-1.4 0.1-1.5-0.3-2.5-1.6-5 0.4-16.2-0.7-7.5 0.9-3.5 5.8-4.1 13.3-5 2.8-2.6 2.5-7.5 1.8-3.3 3.5-1 3.7-0.1 3.8 6.9 0.6 1.3 0 1.2 0.3 1 1.3 0.8 0.9-1.5 1.3-3.8 2.3-3.4 3.8-2 4.5-0.9 4.5 0.7 4.9 1.3 1.8 0.8 0.3 2-0.1 3 0.7 2.7 1.8 1.4 2 1.1 1.9 1.3 1 2.1-0.1 2.7 0.6 2.3 4.2 1.5 4.8 0.5 3.2 4 0 7.1-0.3 1.4-0.8 1-0.7 1.2 1.1 1.7 0.7 0.6 0.8 0.3 1.8-0.7 3.1-0.5 0.6 0.3 0.5 1.9 0.1 2 4.7 0 2.7-1.9 3.5 0.4 0.8 2.3 1.2 4.6-0.2 2.6-0.9 2.5-0.4 1.8-0.6 1.8-2.8 4.1-1 4.7 1.2 1.1 3.3-0.3 2 0.3 0.9 0.6 1.7 4.4 1.1 1.7 2.1 2.2 1.7 1.1 1 0.3 1.7 1-0.7 1.8-6.7 6.1-1.2 2.1-0.7 2.3-0.1 1.1 0.1 2.1-0.2 1-5.7 2.3-1.4 0.3-1.3-0.6-1.2-0.8-5 2.3-7.8 8.2-3 4.4-2 2.2-2.7 1.3-4.5 0.3-2.3 4.8-0.5 5.8 0.2 6.5 2.2 5.9 3.4 4.1 0.6 5.3-2.2 5.1-3.4 3.8-1.6 0.3-3.2-0.7-1.4-0.8-3.4-4-6-0.8-4.2-3.4 1.6-2.2 3.2-0.8 1.1-2.9-1.2-9.2 1.5-5.9-1.5-10.7-7.8-8.3-5.7-1.6-5.3-2-1.9-2.6-2.4-1.9-5.4-1.9-2.4-1.7-1.6-2.5 0.4-2.7 1.4-2.6 0.1-2.9-2.7-1.3-10.6 3.5-8.9 6.6-5.3 0.5z" />
              <path className="ng-coverage" d="M360.9 459.7l-3.4-0.4-1.9-3.2-0.4-1.4-0.7-54.7 0.3-2.1 1.8-0.9 14-0.6 4.6 1.5 7.1 6.9 3.6 2 0.4-0.1 10.7-15.2 7.2-0.8 2.1 0 2.1 0.4 1.9 0.8 1.6-1.3 2.4-3.3 2.8 1 1.4 2.6 2.3-0.5 0.2 1.6-0.2 1.4-0.9 0.6-0.9 0.3-1.4 2.5-1.7 8.2-0.2 4.8 0.2 7.5-3.5 15.5-3.3 9.1-2.6 4.3-3.4 3.7-9.7 4.9-10.7 2.9-10.9 1.7-0.7 0-2.7 0.5-2.8-0.3-4.7 0.1z" />

              {/* Port Harcourt: White Pulsing Marker */}
              <circle cx="369" cy="722.5" r="11" fill="#FFFFFF" className="pulse" />
            </svg>
 
            {/* Coverage Legend */}
            <div className="mt-6 space-y-2 px-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "rgba(210, 45, 70, 0.75)" }} />
                <p className="text-white/70 text-xs font-semibold">Service Coverage Areas</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                <p className="text-white/70 text-xs font-semibold">Headquarters (Port Harcourt)</p>
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
      <div className="relative container-page py-14 flex flex-col md:flex-row items-center justify-between gap-6">
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
          className="inline-flex items-center gap-2 btn-primary font-bold px-7 py-3.5 rounded whitespace-nowrap"
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
    "Job Application",
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
      <div className="container-page">
        <p className="eyebrow text-center mb-3">
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
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 btn-primary font-semibold px-8 py-3.5 rounded"
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
                32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria.
              </ContactRow>
              <ContactRow Icon={PhoneIcon} label="Phone">
                0803 709 5470 &middot; 0707 231 6078
              </ContactRow>
              <ContactRow Icon={MailIcon} label="Email">
                sanddmembs@gmail.com
              </ContactRow>
              <ContactRow Icon={ClockIcon} label="Hours">
                Mon &ndash; Fri: 8am &ndash; 5pm &middot; Field Ops: 24/7
              </ContactRow>
              <div className="border-t border-white/15 pt-5">
                <ContactRow Icon={AlertIcon} label="Emergency Contact">
                  <span className="text-white font-semibold">0703 653 2697</span> &mdash; available 24/7 for active incidents.
                </ContactRow>
              </div>
              <a
                href="https://wa.me/2349169426900"
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
                src="https://www.google.com/maps?q=Oromenike+Street,+D-Line,+Port+Harcourt&output=embed"
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
function ChurchIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" {...industryStroke}><path d="M12 2v4M10 4h4"/><path d="M12 8v13M6 21V11l6-5 6 5v10"/><path d="M9 21v-6h6v6"/></svg>; }

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
