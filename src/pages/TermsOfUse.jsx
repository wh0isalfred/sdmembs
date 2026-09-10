import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";
import { COMPANY } from "../data/company";

export default function TermsOfUse() {
  const navigate = useNavigate();

  useDocumentMeta({
    path: "/terms-of-use",
    title: "Terms of Use | S & D Membs Security Services",
    description: "The terms that govern your use of the S & D Membs Security Services website.",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-enter bg-white">
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="container-page max-w-3xl">
          <p className="eyebrow mb-3">Legal</p>
          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-navy mb-3">
            Terms of Use
          </h1>
          <p className="text-charcoal/60 text-sm mb-12">Last updated: 9 September 2026</p>

          <div className="space-y-10 text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">1. Acceptance of These Terms</h2>
              <p>
                By using this website, you agree to these Terms of Use. If you don&rsquo;t
                agree with them, please don&rsquo;t use the site.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">2. Purpose of This Website</h2>
              <p>
                This website provides general information about S &amp; D Membs Security
                Services Limited and the services we offer. It is informational — it is not
                itself a contract, a quotation, or an offer to provide services on specific
                terms.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">3. Acceptable Use</h2>
              <p>
                You agree not to use this website in any way that could damage, disable, or
                impair it, or interfere with anyone else&rsquo;s use of it — including
                attempting to gain unauthorized access to any part of the site or its
                underlying systems.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">4. Intellectual Property</h2>
              <p>
                The content on this website — including our name, logo, text, and images we
                own — belongs to S &amp; D Membs Security Services Limited or its licensors.
                You may view and share pages of this site for personal, non-commercial
                purposes, but you may not reproduce, republish, or use our branding without
                our written permission.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">5. Accuracy of Information</h2>
              <p>
                We try to keep the information on this website accurate and current, but we
                don&rsquo;t guarantee that every detail is complete, up to date, or error-free
                at all times. If you&rsquo;re relying on something specific — a licence detail,
                a service scope, or a coverage area — please confirm it with us directly before
                acting on it.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">6. Availability</h2>
              <p>
                We aim to keep this website available, but we don&rsquo;t guarantee
                uninterrupted access, and we may take the site down temporarily for
                maintenance or updates without notice. Our actual security services operate
                under their own separately agreed terms, independent of this website&rsquo;s
                availability.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">7. Third-Party Links</h2>
              <p>
                This site may link to third-party platforms such as WhatsApp or Google Maps.
                We aren&rsquo;t responsible for the content, accuracy, or practices of sites we
                don&rsquo;t operate.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">8. Enquiries Are Not a Contract</h2>
              <p>
                Submitting the contact form, emailing us, or messaging us on WhatsApp is an
                enquiry, not an order or a binding agreement. Any actual security services we
                provide are governed by a separate written agreement signed by both parties,
                covering scope, pricing, and terms specific to that engagement.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">9. Limitation of Liability</h2>
              <p>
                To the extent permitted by law, S &amp; D Membs Security Services Limited is
                not liable for any indirect or consequential loss arising from your use of
                this website. Nothing in these terms limits liability that cannot lawfully be
                limited under Nigerian law.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">10. Governing Law</h2>
              <p>
                These terms are governed by the laws of the Federal Republic of Nigeria.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">11. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. The &ldquo;Last updated&rdquo;
                date at the top of this page reflects the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">12. Contact Us</h2>
              <p>
                Questions about these terms can be sent to{" "}
                <a href={`mailto:${COMPANY.email}`} className="text-navy underline">{COMPANY.email}</a>{" "}
                or {COMPANY.phone.main.display}.
              </p>
            </section>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="mt-14 inline-flex items-center gap-2 text-navy font-semibold text-sm hover:text-burgundy transition-colors"
          >
            ← Back
          </button>
        </div>
      </section>
    </div>
  );
}
