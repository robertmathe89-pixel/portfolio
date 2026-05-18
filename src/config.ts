// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "ROBERT.",
};

// ============================================================
// Social & Contact
// ============================================================

export interface SocialConfig {
  github: string;
  linkedin: string;
  twitter: string;
  email: string;
}

export const socialConfig: SocialConfig = {
  github: "https://github.com/robertmathe89-pixel",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "ai.studioprojects2025@gmail.com",
};

// ============================================================
// Contact Form
// ============================================================

export interface ContactFormConfig {
  endpoint: string;
  successMessage: string;
  errorMessage: string;
}

export const contactFormConfig: ContactFormConfig = {
  endpoint: "https://formspree.io/f/xnqevwyn",
  successMessage: "Thank you for reaching out! I will get back to you within 24 hours.",
  errorMessage: "Something went wrong. Please try again or email me directly.",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "CAPABILITIES", href: "#capabilities" },
    { label: "PROCESS", href: "#process" },
    { label: "WORK", href: "#work" },
    { label: "CONTACT", href: "#contact" },
  ],
  ctaText: "START A PROJECT",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "ROBERT",
  subtitleLine1: "Full-Stack Developer \u0026 Automation Specialist",
  subtitleLine2: "I build modern web apps, automation workflows, and AI-powered tools that save time and scale.",
  ctaText: "VIEW MY WORK",
};

// ============================================================
// Capabilities (Curriculum section)
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "WHAT I DO",
  items: [
    {
      title: "WEB DEVELOPMENT",
      slug: "web-development",
      description: "Modern web applications built with Next.js, React, and TypeScript. From responsive landing pages to full-stack dashboards with API integrations and database design. I ship clean, maintainable code.",
      image: "images/cap-icon-1.png",
    },
    {
      title: "API & INTEGRATIONS",
      slug: "api-integrations",
      description: "Connecting tools and services through REST, GraphQL, and OAuth. Gmail, Google Sheets, Notion, Slack, and custom APIs. I build the automation layer that makes your apps talk to each other.",
      image: "images/cap-icon-2.png",
    },
    {
      title: "AUTOMATION & BOTS",
      slug: "automation-bots",
      description: "Scheduled scripts, web scrapers, data pipelines, and Telegram bots. I automate repetitive tasks so you can focus on what matters. From job scouting to email workflows to image generation pipelines.",
      image: "images/cap-icon-3.png",
    },
    {
      title: "AI-POWERED TOOLS",
      slug: "ai-tools",
      description: "Practical AI integrations using ComfyUI for local image generation, Gemini API for content creation, and smart automation. Privacy-first AI that runs on your hardware or via secure APIs.",
      image: "images/cap-icon-4.png",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Capability",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Capability not found.",
  capabilities: {
    "web-development": {
      title: "Web Development",
      subtitle: "Modern applications built for performance and user experience.",
      paragraphs: [
        "I build complete web applications using Next.js, React, and TypeScript. From responsive landing pages that convert visitors to full-stack dashboards with real-time data. My frontend work prioritizes clean UI, smooth animations, and mobile-first responsive design.",
        "The backend work I deliver includes RESTful and GraphQL APIs, database design with PostgreSQL and Supabase, and secure authentication flows. I implement proper error handling, input validation, and API documentation that makes integration straightforward.",
        "Every project follows modern development practices: component-based architecture, TypeScript for type safety, Git for version control, and CI/CD via Vercel or GitHub Actions. I write code that's meant to be maintained — clean, documented, and tested.",
        "Recent work includes an AI portfolio site with live image generation integration, a job scouting automation system that delivers 20+ curated leads daily, and multiple client landing pages built with Next.js and Tailwind CSS.",
      ],
    },
    "api-integrations": {
      title: "API \u0026 Integrations",
      subtitle: "Connecting your tools and services into automated workflows.",
      paragraphs: [
        "I build the integration layer that connects your apps and services. Gmail, Google Sheets, Notion, Slack, Telegram, and custom APIs — I make them talk to each other through REST, GraphQL, and OAuth. Whether it's syncing data between platforms or triggering actions across tools, I design workflows that eliminate manual work.",
        "My integration work includes Composio multi-tool setups, custom webhook receivers, scheduled data pipelines, and Telegram bot automations. I handle authentication flows, rate limiting, error retry logic, and idempotency to ensure reliable data transfer even when services are temporarily unavailable.",
        "For custom APIs, I design clean RESTful endpoints with proper HTTP semantics, request validation, and comprehensive documentation. GraphQL APIs when clients need flexible data fetching. Every integration includes logging and monitoring so you can track data flow and catch issues before they impact operations.",
        "Recent work includes a workflow automation hub connecting Gmail, Sheets, Notion, Slack, and Calendar through Composio, a Telegram bot that delivers curated job leads from multiple freelance platforms, and an email automation system that handles SMTP and IMAP integrations.",
      ],
    },
    "automation-bots": {
      title: "Automation & Bots",
      subtitle: "Scheduled scripts and bots that eliminate repetitive work.",
      paragraphs: [
        "I build automation systems that handle the boring stuff so you don't have to. Scheduled job scouts that monitor freelance platforms and deliver curated leads via Telegram. Email workflows that process, categorize, and respond automatically. Data pipelines that sync information across multiple tools without manual copy-pasting.",
        "My automation stack includes Node.js for scripting, GitHub Actions for CI/CD scheduling, cron jobs for recurring tasks, and Telegram Bot API for notifications. I build scrapers with Puppeteer and Playwright that navigate complex sites, extract structured data, and deliver it where you need it.",
        "Every automation includes error handling, retry logic, and logging so you know when something breaks. I design them to be resilient — if a service is down, the script waits and retries rather than crashing. Notifications keep you informed without overwhelming you.",
        "Recent projects include a Freelance Scout that scrapes PeoplePerHour and Freelancer.com daily, scores opportunities by skill match and budget, and delivers the top 10 to Telegram with full analysis. An email automation system that connects Gmail via SMTP and IMAP. And a ComfyUI image generation pipeline that creates AI art on local GPU.",
      ],
    },
    "ai-tools": {
      title: "AI-Powered Tools",
      subtitle: "Practical AI that works on your hardware and your terms.",
      paragraphs: [
        "I build AI-powered tools that are practical, not theoretical. Local image generation with ComfyUI running entirely on your GPU — no cloud APIs, no data leaks, no monthly fees. Content generation through Gemini API for when you need quick copy, translations, or creative ideas. Smart automation that uses AI to make decisions without human intervention.",
        "The ComfyUI pipeline I built generates 768×1024 images in ~10 minutes on a GTX 1050 Ti, with custom workflows for photorealistic portraits, concept art, and creative compositions. The system is fully configurable — change prompts, adjust parameters, or swap models. All processing happens locally, ensuring complete privacy.",
        "For API-based AI, I integrate Gemini and other models through secure connections with proper error handling and rate limiting. These integrations are built into existing workflows — an AI that generates portfolio copy, a bot that summarizes articles, or a pipeline that creates social media assets from text prompts.",
        "Recent work includes an AI portfolio site with live image generation, a cyberpunk-style concept art pipeline, and automated content generation workflows that produce blog drafts, social posts, and product descriptions from simple prompts.",
      ],
    },
  },
};

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "HOW I WORK",
  videoPath: "/videos/process-video.mp4",
  title: "A Proven Process for Complex Systems",
  description: "Every project follows a structured methodology refined across dozens of production deployments. From initial discovery through architecture, implementation, and ongoing support — I deliver systems that are built to last.",
};

// ============================================================
// Research (AlumniArchives section -> Work section)
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
  href?: string;
  external?: boolean;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "SELECTED WORK",
  projects: [
    {
      title: "Freelance Job Scout",
      year: "2025",
      discipline: "Automation",
      image: "images/proj-img-1.jpg",
      href: "https://github.com/robertmathe89-pixel",
      external: true,
    },
    {
      title: "AI Portfolio Site",
      year: "2025",
      discipline: "Full-Stack",
      image: "images/proj-img-2.jpg",
      href: "https://ai-portfolio-delta-eight.vercel.app",
      external: true,
    },
    {
      title: "ComfyUI Image Pipeline",
      year: "2025",
      discipline: "AI Tools",
      image: "images/proj-img-3.jpg",
      href: "https://github.com/robertmathe89-pixel",
      external: true,
    },
    {
      title: "Workflow Automation Hub",
      year: "2025",
      discipline: "Integrations",
      image: "images/proj-img-1.jpg",
      href: "https://github.com/robertmathe89-pixel",
      external: true,
    },
    {
      title: "Email Automation System",
      year: "2024",
      discipline: "Backend",
      image: "images/proj-img-2.jpg",
      href: "https://github.com/robertmathe89-pixel",
      external: true,
    },
  ],
};

// ============================================================
// Testimonials
// ============================================================

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface TestimonialsConfig {
  sectionLabel: string;
  items: Testimonial[];
}

export const testimonialsConfig: TestimonialsConfig = {
  sectionLabel: "CLIENT WORDS",
  items: [
    {
      quote: "Currently building my reputation as a freelancer. I'm offering priority scheduling and dedicated attention to my first clients. Let's work together and I'll earn your trust through results.",
      author: "Robert Mathe",
      role: "Full-Stack Developer",
      company: "Timișoara, Romania",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerLinkMap: Record<string, string> = {
  "Capabilities": "#capabilities",
  "Process": "#process",
  "Work": "#work",
  "Contact": "#contact",
  "Web Development": "/capability/web-development",
  "API & Integrations": "/capability/api-integrations",
  "Automation & Bots": "/capability/automation-bots",
  "AI-Powered Tools": "/capability/ai-tools",
};

export const footerConfig: FooterConfig = {
  heading: "Let's Build Something.",
  columns: [
    {
      title: "Navigation",
      links: ["Capabilities", "Process", "Work", "Contact"],
    },
    {
      title: "Services",
      links: ["Web Development", "API \u0026 Integrations", "Automation \u0026 Bots", "AI-Powered Tools"],
    },
  ],
  copyright: "\u00A9 2026 Robert Mathe. All rights reserved.",
  bottomLinks: [
    { label: "GitHub", href: socialConfig.github, external: true },
    { label: "LinkedIn", href: socialConfig.linkedin, external: true },
    { label: "Twitter", href: socialConfig.twitter, external: true },
  ],
};
