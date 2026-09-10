/**
 * Single source of truth for public-facing company details.
 *
 * Import from here instead of hardcoding phone numbers, the address, email,
 * or hours in individual components. This does NOT cover index.html's
 * static <meta>/JSON-LD tags — those are plain HTML/JSON, not JS, so they
 * can't import this module. If any value below changes, index.html's
 * corresponding tags must be updated by hand at the same time. That's a
 * real limitation, not an oversight — see README for the full explanation.
 *
 * Every value here is verified against the company's actual CAC/tax/NSCDC
 * documents as of this writing. Do not change a value here without
 * re-verifying against a source document.
 */

export const COMPANY = {
  legalName: "S & D Membs Security Services Limited",
  shortName: "S & D Membs",
  rcNumber: "RC 837824",
  incorporationDate: "11 August 2009",
  incorporationYear: 2009,

  // Operational head office as currently displayed on the site. Note: the
  // company's registered office per its tax certificate and audited
  // financials cover page is a DIFFERENT address (6B/68 Iriebe Street,
  // D/Line, Port Harcourt). Whether both should be shown, and which is
  // which, is an open question for Alfred — see README checklist. Do not
  // change this value to "resolve" that question; it needs a real answer.
  headOfficeAddress: "32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria",

  phone: {
    main: { display: "0803 709 5470", href: "tel:+2348037095470" },
    secondary: { display: "0707 231 6078", href: "tel:+2347072316078" },
    emergency: { display: "0703 653 2697", href: "tel:+2347036532697" },
  },

  whatsapp: { display: "+234 916 942 6900", href: "https://wa.me/2349169426900" },

  email: "sanddmembs@gmail.com",

  hours: {
    office: "Mon \u2013 Fri: 8am \u2013 5pm",
    fieldOps: "24/7",
    emergencyLine: "24/7 for active incidents",
  },

  areasServed: ["Rivers State", "Bayelsa State", "Lagos State", "Enugu State", "Federal Capital Territory"],

  canonicalOrigin: "https://www.sanddmembs.org",
};
