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

  headOfficeAddress: "32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria",

  phone: {
    main: { display: "0903 507 7567", href: "tel:+2349035077567" },
    secondary: { display: "0707 231 6078", href: "tel:+2347072316078" },
    emergency: { display: "0703 653 2697", href: "tel:+2347036532697" },
  },

  offices: [
    {
      id: "port-harcourt",
      name: "Port Harcourt",
      type: "Head Office",
      address: "32 Oromenike Street, D/Line, Port Harcourt, Rivers State, Nigeria",
      contacts: [
        { role: "Company General Manager", display: "0903 507 7567", href: "tel:+2349035077567" },
        { role: "Business & Finance Manager", display: "0916 942 6900", href: "tel:+2349169426900" },
        { role: "Operations Manager I", display: "0703 653 2697", href: "tel:+2347036532697" },
        { role: "Operations Manager II", display: "0707 854 4897", href: "tel:+2347078544897" },
        { role: "Company Secretary", display: "0707 231 6078", href: "tel:+2347072316078" },
      ],
    },
    {
      id: "abuja",
      name: "Abuja",
      type: "Office",
      address: "CS 27 Harmonic Plaza, Plot 354 Mike Akhigbe Way, Jabi, Abuja, Nigeria",
      contacts: [
        { role: "Abuja Office", display: "0707 225 8681", href: "tel:+2347072258681" },
      ],
    },
    {
      id: "lagos",
      name: "Lagos",
      type: "Office",
      address: "Suite 40, Aderonke Plaza, 20 Oluwu Street, off Toyin Street, Ikeja, Lagos, Nigeria",
      contacts: [
        { role: "Lagos Office", display: "0810 408 1386", href: "tel:+2348104081386" },
      ],
    },
    {
      id: "bayelsa",
      name: "Bayelsa",
      type: "Regional Operations",
      address: null,
      contacts: [
        { role: "Bayelsa Coordinator", display: "0916 004 9189", href: "tel:+2349160049189" },
      ],
    },
  ],

  whatsapp: { display: "+234 916 942 6900", href: "https://wa.me/2349169426900" },

  email: "sanddmembs@gmail.com",

  hours: {
    office: "Mon \u2013 Fri: 8am \u2013 5pm",
    fieldOps: "24/7",
    emergencyLine: "24/7 for active incidents",
  },

  areasServed: ["Nigeria"],

  canonicalOrigin: "https://www.sanddmembs.org",
};
