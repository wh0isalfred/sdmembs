import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useDocumentMeta from "../hooks/useDocumentMeta";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  useDocumentMeta({
    title: "Privacy Policy | S & D Membs Security Services",
    description: "How S & D Membs Security Services collects, uses and protects information from visitors to this website.",
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
            Privacy Policy
          </h1>
          <p className="text-charcoal/60 text-sm mb-12">Last updated: 9 September 2026</p>

          <div className="space-y-10 text-charcoal/80 leading-relaxed">
            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">1. Introduction</h2>
              <p>
                This Privacy Policy explains how S &amp; D Membs Security Services Limited
                (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles information
                in connection with this website. It covers the website only — it does not
                cover information collected in the course of delivering physical security
                services under a separate written agreement.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">2. Information You Provide</h2>
              <p className="mb-3">
                The Contact section of this website includes a form asking for your name,
                organization (optional), phone number, email address, the service you&rsquo;re
                interested in, and a message. When you submit it, your device opens your own
                email application with that information pre-filled, addressed to our inbox —
                the message is sent from your email account, not stored on our servers or in
                any database we control. We only see what you choose to actually send.
              </p>
              <p>
                If you contact us by phone, WhatsApp, or by emailing us directly, we receive
                whatever information you choose to share in that conversation.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">3. How We Use Information</h2>
              <p>
                We use the information you send us to respond to your enquiry, discuss the
                security services you&rsquo;re asking about, and — if you go on to engage us —
                to deliver those services under a separate written agreement. We do not use
                contact-form information for advertising, and we do not sell it to third parties.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">4. Hosting &amp; Technical Information</h2>
              <p>
                This website is hosted on Vercel. Like most hosting providers, Vercel&rsquo;s
                infrastructure necessarily processes standard technical information for every
                visitor as part of serving the site — such as IP address, browser/user-agent
                information, the page requested, and the time of the request. This is normal
                web-server activity, not tracking we've added, and we don&rsquo;t have a
                specific retention period to promise you beyond what Vercel's own
                infrastructure applies.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">5. Cookies &amp; Tracking</h2>
              <p>
                As of this policy&rsquo;s last update, this website does not use analytics
                tools (such as Google Analytics), advertising trackers, or non-essential
                cookies. We haven&rsquo;t added a cookie-consent banner because there is
                currently nothing on this site that requires one. If that changes — for
                example, if we add analytics in the future — we will update this policy and
                put the appropriate consent mechanism in place first.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">6. WhatsApp &amp; Email</h2>
              <p>
                If you contact us via the WhatsApp link on this site, that conversation takes
                place on WhatsApp&rsquo;s platform and is subject to WhatsApp&rsquo;s own
                privacy policy, which we don&rsquo;t control. The same applies to any email
                provider you or we use.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">7. Data Security</h2>
              <p>
                We take reasonable steps to protect information you share with us, but no
                method of transmission over email or the internet is completely secure, and
                we cannot guarantee absolute security. Please avoid sending highly sensitive
                information — such as identification numbers, financial account details, or
                detailed site-security information — through the contact form or unencrypted email.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">8. Your Rights</h2>
              <p>
                Under the Nigeria Data Protection Act 2023, you have rights regarding personal
                information we hold about you, including the right to ask what we hold, to
                request correction of inaccurate information, and to request deletion where
                appropriate. To make a request, contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">9. Third-Party Links</h2>
              <p>
                This site may link to third-party services (for example, WhatsApp or Google
                Maps). We aren&rsquo;t responsible for the privacy practices of sites we don&rsquo;t
                operate.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">10. Changes to This Policy</h2>
              <p>
                We may update this policy from time to time as the website or our practices
                change. The &ldquo;Last updated&rdquo; date at the top of this page reflects
                the most recent revision.
              </p>
            </section>

            <section>
              <h2 className="font-heading font-bold text-xl text-navy mb-3">11. Contact Us</h2>
              <p>
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:sanddmembs@gmail.com" className="text-navy underline">sanddmembs@gmail.com</a>{" "}
                or 0803 709 5470.
              </p>
            </section>

            <div className="pt-6 border-t border-charcoal/10 text-sm text-charcoal/50">
              This policy is written to accurately describe this website as it currently
              operates. It has not yet received formal legal review, which is recommended
              before final publication.
            </div>
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
