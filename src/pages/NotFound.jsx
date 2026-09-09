import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function NotFound() {
  const navigate = useNavigate();

  useDocumentMeta({
    title: "Page Not Found | S & D Membs Security Services",
    description: "The page you're looking for doesn't exist.",
    robots: "noindex, follow",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function goToContact() {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById("contact");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }

  return (
    <div className="page-enter bg-white">
      <section className="pt-40 sm:pt-48 pb-24 sm:pb-32">
        <div className="container-page max-w-xl text-center">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-4">
            We couldn&rsquo;t find that page
          </h1>
          <p className="text-charcoal/60 leading-relaxed mb-12">
            The page you&rsquo;re looking for may have been moved or no longer exists.
            Here are a few places to go instead.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/" className="btn-primary font-semibold px-7 py-3 rounded inline-flex items-center justify-center">
              Go Home
            </a>
            <a href="/services" className="inline-flex items-center justify-center border border-navy/20 text-navy font-semibold px-7 py-3 rounded hover:border-navy/40 transition-colors">
              View Services
            </a>
            <button
              onClick={goToContact}
              className="inline-flex items-center justify-center border border-navy/20 text-navy font-semibold px-7 py-3 rounded hover:border-navy/40 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
