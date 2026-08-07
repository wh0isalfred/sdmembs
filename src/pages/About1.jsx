import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function About() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Same smart-scroll pattern used in Navbar/Footer/Services — needed because
  // this page has no #contact section of its own to jump to.
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

  return (
    <div className="page-enter">
      {/* Hero Section - Full width with background image overlay */}
      <section className="relative bg-navy-dark text-white pt-32 pb-32 sm:pt-48 sm:pb-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-page">
          <h1 className="font-heading font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-tight max-w-3xl">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Image */}
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="S & D Membs headquarters"
                className="w-full h-[450px] object-cover rounded-lg shadow-card"
              />
            </div>

            {/* Right: Content */}
            <div>
              <p className="eyebrow mb-4">
                Our Story
              </p>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-6">
                Built with Integrity.
                <br />
                <span className="text-burgundy">Committed to Excellence.</span>
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4 text-lg">
                S &amp; D Membs Security Services Limited was founded in 2008 on a simple 
                yet powerful conviction: every person and organization deserves to feel safe. 
                What began as an operation in Port Harcourt has grown into a licensed security 
                provider with offices in Abuja and Lagos.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">
                Over 17 years in business, we've built our reputation on unwavering integrity, 
                professional excellence, and a genuine commitment to the safety of our clients. 
                We don't just provide security—we provide peace of mind. Today, we're proud to 
                serve clients across Rivers, Lagos, Bayelsa, Enugu and the FCT, from residential 
                estates to businesses and public institutions, with a team dedicated to the 
                highest standards of professionalism and care.
              </p>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                We measure our success not only by our performance metrics and uptime record, 
                but by how we care for our clients and the professionals who serve them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team - Executive Leadership
      <section className="py-20 sm:py-28 bg-offwhite">
        <div className="container-page">
          <p className="eyebrow mb-2">
            Our Team
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-16">
            Leadership You Can Rely On
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Managing Director",
                title: "Overall company leadership and strategic direction.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Operations Director",
                title: "Day-to-day field operations and deployment.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Head of Training",
                title: "Personnel training and capability development.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop"
              },
              {
                name: "Admin & HR Manager",
                title: "Recruitment, welfare and administration.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop"
              },
            ].map((leader, i) => (
              <div key={i} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-40 h-40 rounded-full object-cover mx-auto mb-4 shadow-md"
                />
                <h3 className="font-heading font-bold text-lg text-navy mb-1">
                  {leader.name}
                </h3>
                <p className="text-charcoal/70 text-sm font-medium">
                  {leader.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose S & D Membs */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-page">
          <p className="eyebrow mb-2">
            Why S &amp; D Membs?
          </p>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-6 max-w-3xl">
            Reputation Based on Values of Trust, Integrity &amp; Quality Standards
          </h2>
          <p className="text-charcoal/70 leading-relaxed mb-12 text-lg max-w-3xl">
            Our goal at S &amp; D Membs is to deliver top-tier security programs for our clients. 
            Since our founding in 2008, we have worked diligently to build our reputation as a 
            respected security provider with the experience and resources to meet your unique goals. 
            Through steady, service-led growth, we continually nurture lasting partnerships and 
            seek practical ways to exceed expectations, setting ourselves apart in the security 
            industry.
          </p>

          {/* 2-Column Benefits Grid with Professional SVG Icons */}
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Strategic Growth",
                desc: "Our growth has come organically, one client at a time, primarily through expanding into areas where our clients need us rather than through mergers and acquisitions."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Experienced Leadership",
                desc: "Our leadership and training teams bring years of hands-on security management experience, giving us the expertise to meet your needs with precision."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Licensed & Certified",
                desc: "Training is the cornerstone of security and a top priority for our company, backed by our certifications and licensed standing as a security provider."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                ),
                title: "Account Support",
                desc: "As our client, you have a primary point of contact who oversees your security program. They do this through frequent communication and site visits, and 24/7 availability."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: "Company Culture",
                desc: "We strive to be the employer of choice in security by investing in our employees, offering meaningful benefits, performance recognition, and career development."
              },
              {
                icon: (
                  <svg className="w-12 h-12 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Customized Security Services",
                desc: "Our tailored security programs combine trained uniformed officers, mobile patrol and monitoring technology, and structured, certified training."
              },
            ].map((item, i) => (
              <div key={i} className="bg-offwhite p-8 rounded-lg border border-charcoal/10 flex gap-6">
                <div className="flex-shrink-0 pt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="text-charcoal/70 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision - Professional Two Column */}
      <section className="py-20 sm:py-28 bg-navy-dark text-white">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Mission */}
            <div className="border-l-4 border-burgundy-soft pl-8">
              <p className="text-burgundy-soft font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                Our Mission
              </p>
              <p className="text-white/90 leading-relaxed text-lg">
                To protect lives and property through dependable security solutions delivered 
                with professionalism, integrity and care. We believe that security is more than 
                just monitoring and response—it's about creating an environment where people can 
                work and live with confidence.
              </p>
            </div>

            {/* Vision */}
            <div className="border-l-4 border-burgundy-soft pl-8">
              <p className="text-burgundy-soft font-bold text-sm tracking-[0.2em] uppercase mb-4 block">
                Our Vision
              </p>
              <p className="text-white/90 leading-relaxed text-lg">
                To be Nigeria's most trusted security company, setting the standard for excellence. 
                We aspire to be recognized as the security partner of choice, known for innovation, 
                reliability, and our unwavering commitment to our clients' success and safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Impressive & Bold */}
      <section className="relative py-16 sm:py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy to-navy-dark" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-burgundy/10 rounded-full -mr-40 -mt-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-burgundy/5 rounded-full -ml-40 -mb-40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            Let's Protect What Matters
          </h2>
          
          {/* Subheading */}
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            Join the growing number of organizations across Nigeria that trust S &amp; D Membs for professional security solutions.
          </p>

          {/* CTA Buttons - Vertical on mobile, horizontal on desktop */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            {/* Primary Button */}
            <a
              href="tel:+2348037095470"
              className="group inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white font-bold px-7 sm:px-9 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Call Now</span>
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              onClick={handleContactClick}
              className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 sm:px-9 py-3 sm:py-3.5 rounded-lg text-base sm:text-lg border border-white/30 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>Consultation</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
