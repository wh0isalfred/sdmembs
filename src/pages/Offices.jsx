import { useEffect } from "react";
import { Link } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { COMPANY } from "../data/company";

export default function Offices() {
  useDocumentMeta({
    path: "/offices",
    title: "Our Offices | S & D Membs Security Services",
    description: "Contact S & D Membs offices and operations teams in Port Harcourt, Abuja, Lagos and Bayelsa for professional security services across Nigeria.",
  });

  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter">
      <section className="bg-navy-dark text-white py-20 sm:py-28">
        <div className="container-page max-w-3xl">
          <p className="text-white/60 font-semibold text-sm tracking-[0.2em] uppercase mb-4">
            National Operations
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Our Offices &amp; Contacts
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Based in Port Harcourt, serving businesses and institutions across Nigeria.
            Contact the office or operational lead closest to your requirements.
          </p>
        </div>
      </section>

      <section className="py-20 sm:py-28 bg-offwhite">
        <div className="container-page">
          <div className="grid lg:grid-cols-2 gap-7">
            {COMPANY.offices.map((office) => (
              <article
                key={office.id}
                id={office.id}
                className="scroll-mt-24 bg-white border border-charcoal/10 rounded-lg p-7 sm:p-9 shadow-card"
              >
                <p className="eyebrow mb-2">{office.type}</p>
                <h2 className="font-heading font-extrabold text-2xl text-navy mb-5">
                  {office.name}
                </h2>

                {office.address ? (
                  <address className="not-italic text-charcoal/65 leading-relaxed mb-7">
                    {office.address}
                  </address>
                ) : (
                  <p className="text-charcoal/65 leading-relaxed mb-7">
                    Regional coordination and operational support across Bayelsa State.
                  </p>
                )}

                <div className="border-t border-charcoal/10 pt-5 space-y-4">
                  {office.contacts.map((contact) => (
                    <div key={contact.role} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-5">
                      <span className="text-sm text-charcoal/60">{contact.role}</span>
                      <a href={contact.href} className="font-heading font-bold text-navy hover:text-burgundy transition-colors">
                        {contact.display}
                      </a>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white">
        <div className="container-page max-w-3xl text-center">
          <p className="eyebrow mb-3">General Enquiries</p>
          <h2 className="font-heading font-extrabold text-3xl text-navy mb-4">
            Not sure who to contact?
          </h2>
          <p className="text-charcoal/65 leading-relaxed mb-8">
            Send us your requirements and our team will direct your enquiry to the right office or department.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact" className="btn-primary font-semibold px-7 py-3.5 rounded">
              Send an Enquiry
            </Link>
            <a href={`mailto:${COMPANY.email}`} className="border border-navy/25 text-navy hover:border-navy font-semibold px-7 py-3.5 rounded transition-colors">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
