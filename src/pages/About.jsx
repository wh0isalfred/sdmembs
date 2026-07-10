import { useEffect, useRef } from "react";

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

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref1 = useReveal();
  const ref2 = useReveal();
  const ref3 = useReveal();
  const ref4 = useReveal();

  return (
    <>
      {/* Hero */}
      <section className="bg-navy-dark text-white pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-burgundy font-bold text-sm tracking-[0.2em] uppercase mb-4">
              About S &amp; D Membs
            </p>
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Protecting What Matters.
              <br />
              <span className="text-burgundy-soft">Built on Trust.</span>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              Over a decade of proven excellence in security services. 
              S &amp; D Membs is the partner you can count on to safeguard your 
              people, assets, and peace of mind across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section ref={ref1} className="fade-up py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
                alt="Professional security team in headquarters"
                className="w-full h-[400px] sm:h-[480px] object-cover rounded-lg shadow-card"
              />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-6">
                Who We Are
              </h2>
              <p className="text-charcoal/70 leading-relaxed mb-4 text-lg">
                S &amp; D Membs Security Services Limited is a premier security solutions 
                provider headquartered in Port Harcourt, Rivers State. Founded on principles 
                of integrity and excellence, we've evolved into one of Nigeria's most trusted 
                security partners.
              </p>
              <p className="text-charcoal/70 leading-relaxed mb-6 text-lg">
                We serve diverse clients—from multinational corporations to government 
                institutions—delivering customized security solutions that combine cutting-edge 
                technology with human expertise.
              </p>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-burgundy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-charcoal font-medium">500+ satisfied clients nationwide</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-burgundy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-charcoal font-medium">15+ years of uninterrupted service</span>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-burgundy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-charcoal font-medium">24/7 rapid response capability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref2} className="fade-up py-20 sm:py-28 bg-offwhite">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-charcoal/10">
              <div className="mb-6">
                <div className="w-12 h-12 bg-burgundy/15 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">Our Mission</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                To deliver professional, reliable, and innovative security solutions that 
                protect lives, assets, and communities. We empower our clients with the 
                confidence to operate securely in an ever-changing world.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 rounded-lg shadow-sm border border-charcoal/10">
              <div className="mb-6">
                <div className="w-12 h-12 bg-burgundy/15 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-heading font-bold text-2xl text-navy mb-2">Our Vision</h3>
              </div>
              <p className="text-charcoal/70 leading-relaxed text-lg">
                To be West Africa's most trusted security partner, recognized for innovation, 
                integrity, and uncompromising excellence. We aspire to set the standard for 
                professional security services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section ref={ref3} className="fade-up py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-center mb-16">
            Our Core Values
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            {[
              {
                icon: "shield",
                title: "Integrity",
                desc: "Unwavering honesty and transparency in every action. We do what's right, always."
              },
              {
                icon: "target",
                title: "Excellence",
                desc: "Commitment to the highest standards in training, equipment, and service delivery."
              },
              {
                icon: "clock",
                title: "Reliability",
                desc: "24/7 dependable protection. Our clients know they can count on us."
              },
              {
                icon: "people",
                title: "People First",
                desc: "Your safety and satisfaction drive everything we do. Your success is our success."
              },
            ].map((value, i) => (
              <div key={i} className="bg-offwhite p-8 rounded-lg border border-charcoal/10">
                <h3 className="font-heading font-bold text-xl text-burgundy mb-3">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 sm:py-28 bg-navy-dark text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-burgundy-soft mb-2">
                15+
              </div>
              <p className="text-white/70 font-medium">Years of Service</p>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-burgundy-soft mb-2">
                500+
              </div>
              <p className="text-white/70 font-medium">Satisfied Clients</p>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-burgundy-soft mb-2">
                100%
              </div>
              <p className="text-white/70 font-medium">Uptime Record</p>
            </div>
            <div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-burgundy-soft mb-2">
                24/7
              </div>
              <p className="text-white/70 font-medium">Rapid Response</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={ref4} className="fade-up py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy text-center mb-16">
            Why S &amp; D Membs
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "Professional Excellence",
                desc: "Every officer undergoes rigorous training and certification. We maintain the highest standards of professionalism."
              },
              {
                title: "Advanced Technology",
                desc: "From CCTV monitoring to AI-powered threat detection, we leverage cutting-edge security technology."
              },
              {
                title: "Customized Solutions",
                desc: "No two clients are the same. We design security plans tailored to your specific needs and risks."
              },
              {
                title: "Local Expertise, Global Standards",
                desc: "Deep knowledge of Nigeria's security landscape combined with international best practices."
              },
              {
                title: "Transparent Partnerships",
                desc: "Regular reporting, clear communication, and accountability in every engagement."
              },
              {
                title: "Proven Track Record",
                desc: "15 years of protecting lives and assets with zero compromise on safety and integrity."
              },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-burgundy pl-6 py-4">
                <h3 className="font-heading font-bold text-lg text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-navy-dark text-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl mb-6">
            Partner With Us Today
          </h2>
          <p className="text-lg text-white/75 mb-8 leading-relaxed">
            Experience the difference that professional, dedicated security can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+2348031234567"
              className="inline-flex items-center justify-center gap-2 bg-burgundy hover:bg-burgundy-dark transition-colors text-white font-bold px-8 py-4 rounded text-lg"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 transition-colors text-white font-bold px-8 py-4 rounded text-lg border border-white/20"
            >
              Get a Consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
