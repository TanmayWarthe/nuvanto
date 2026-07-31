export const siteConfig = {
  name: "Navunto",
  description: "Your business's first mile online.",
  contact: {
    phone: "+91 98765 43210",
    email: "hello@navunto.studio", // placeholder
    address: "Nagpur, India"
  },
  socials: {
    whatsapp: "https://wa.me/919876543210"
  },
  navLinks: [
    { name: "Studio", href: "/studio" },
    { name: "Team", href: "/team" },
    { name: "Work", href: "/work" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ]
};

export const homeContent = {
  hero: {
    eyebrow: "Nagpur, India — est. 2026",
    headline: "Your business's first mile online.",
    subhead: "Every road distance in India was once measured from a stone in this city. We build with the same idea — a considered starting point, not a rushed template.",
    ctaPrimary: { label: "See our work", href: "/work" },
    ctaSecondary: { label: "Start a project", href: "/contact" }
  },
  marqueeText: "RESTAURANTS — CAFÉS — NGOS — REDESIGNS — RESTAURANTS — CAFÉS — NGOS — REDESIGNS — ",
  studioTeaser: "Three Computer Science students, one small studio, no jargon — read our story.",
  servicesPreview: [
    { index: "01", title: "Restaurants & cafés", body: "Menus, galleries, maps, and a WhatsApp button — the details that turn a browser into a walk-in." },
    { index: "02", title: "NGOs & community groups", body: "Clear stories, event pages, and donation or sign-up flows that respect the cause behind them." },
    { index: "03", title: "Redesigns & rescues", body: "Old, slow, or broken site? We rebuild it properly, then keep it running with ongoing care." }
  ],
  workPreview: {
    eyebrow: "Featured work",
    heading: "Aashri Restaurant",
    body: "A cinematic, premium scroll-based restaurant website featuring masonry photo collages, full menus, and seamless banquet reservations.",
    image: "/aashri.png",
    linkText: "View project details"
  },
  processPreview: {
    eyebrow: "How we work",
    heading: "Live in five to seven days.",
    steps: ["We meet", "We build", "You review", "We stay"],
    linkText: "Read our full process"
  },
  ctaBand: {
    line: "Every business deserves a first mile worth remembering.",
    cta: "Start a project"
  }
};

export const studioContent = {
  eyebrow: "The studio",
  heading: "Three developers. One small studio. No jargon.",
  paragraphs: [
    "We're three Computer Science students who got tired of watching good local businesses run on nothing more than a phone number and a Facebook page. So we started building considered, honest websites instead — the kind we'd want for our own family's restaurant.",
    "No agency layers, no bloated retainers, no recycled template with your logo pasted on top. Just three people who understand your business and answer the phone when you call."
  ],
  stats: [
    { value: "03", label: "Developers" },
    { value: "1", label: "City, Nagpur" },
    { value: "24h", label: "Reply time" }
  ]
};

export const workContent = {
  eyebrow: "Selected work",
  heading: "A few things we've built.",
  items: [
    { 
      category: "Restaurant", 
      title: "Aashri Restaurant", 
      body: "A cinematic, premium scroll-based restaurant website featuring masonry photo collages, full menus, and seamless banquet reservations.", 
      image: "/aashri.png",
      href: "https://aashri-restaurant.vercel.app/"
    }
  ],
  footnote: "More case studies added as we launch.",
  ctaBand: {
    line: "Like what you see?",
    cta: "Start a project"
  }
};

export const processContent = {
  eyebrow: "How we work",
  heading: "Live in five to seven days.",
  steps: [
    { index: "01", title: "We meet", body: "Thirty minutes, no pitch deck — we learn your business and what matters to you." },
    { index: "02", title: "We build", body: "Two to three days turning that into a site — your name, photos, menu or services, brand colours." },
    { index: "03", title: "You review", body: "One preview link, one free round of changes. Then we go live on your domain." },
    { index: "04", title: "We stay", body: "Hosting, backups, and updates handled — you just run the business." }
  ]
};

export const contactContent = {
  eyebrow: "Get in touch",
  heading: "Tell us about your business.",
  body: "Thirty minutes is usually enough to know if we're a fit. No pressure, no long pitch — just a conversation.",
  phonePlaceholder: "+91 98765 43210",
  hours: "10 AM – 8 PM, including Sundays",
  formFields: ["Full name", "Business type (select: Restaurant / Café, NGO / Community org, Redesign of existing site, Something else)", "Message"],
  businessTypes: ["Restaurant / Café", "NGO / Community org", "Redesign of existing site", "Something else"],
  submitLabel: "Send message",
  successMessage: "Thanks — we'll reply within a day.",
  ctaBand: {
    line: "Let's build your first mile.",
    cta: "Send message"
  }
};

export const footerContent = {
  line1: "Navunto — Nagpur, India",
  line2: "© 2026 — built with care, not templates"
};
