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
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
  email: "robert@neural.systems",
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
  subtitleLine1: "AI Systems Architect \u0026 Full-Stack Developer",
  subtitleLine2: "I design and automate intelligent systems that think, learn, and scale.",
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
      title: "AI AUTOMATION",
      slug: "ai-automation",
      description: "End-to-end AI pipeline architecture — from data ingestion and model training to deployment and monitoring. I build autonomous agents, RAG systems, and workflow automation that reduces operational overhead by 80%.",
      image: "images/cap-icon-1.png",
    },
    {
      title: "FULL-STACK DEVELOPMENT",
      slug: "full-stack-dev",
      description: "Production-grade web applications built with modern architectures. From reactive frontends to scalable backends, API design, and cloud infrastructure. I ship fast, clean, and maintainable code.",
      image: "images/cap-icon-2.png",
    },
    {
      title: "SYSTEMS ARCHITECTURE",
      slug: "systems-architecture",
      description: "Designing resilient, scalable system architectures. Microservices, event-driven patterns, container orchestration, and cloud-native infrastructure on AWS and GCP.",
      image: "images/cap-icon-3.png",
    },
    {
      title: "API \u0026 INTEGRATIONS",
      slug: "api-integrations",
      description: "Seamless third-party integrations and custom API development. Payment gateways, CRM connections, real-time data streams, and webhook automation that connects your entire stack.",
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
    "ai-automation": {
      title: "AI Automation",
      subtitle: "Building autonomous systems that learn, adapt, and execute.",
      paragraphs: [
        "Modern businesses are drowning in repetitive tasks and data pipelines that demand constant human attention. I architect AI automation systems that transform how organizations operate — from intelligent document processing and autonomous customer support agents to predictive analytics pipelines that anticipate problems before they occur.",
        "My approach combines Large Language Models with traditional ML techniques, wrapped in robust orchestration frameworks. I specialize in Retrieval-Augmented Generation (RAG) systems that ground AI responses in your organization's actual data, ensuring accuracy and relevance. These systems integrate seamlessly with existing workflows through custom APIs and webhook automation.",
        "Every automation project begins with a thorough audit of current processes. I identify the highest-impact opportunities where AI can deliver measurable ROI — typically reducing manual processing time by 60-80% while improving accuracy. The systems I build are designed for production from day one, with comprehensive monitoring, error handling, and human-in-the-loop fallback mechanisms.",
        "Recent projects include an autonomous support agent that handles 85% of Tier-1 inquiries without human intervention, a document intelligence pipeline that processes 10,000+ documents daily with 99.2% accuracy, and a predictive maintenance system that reduced downtime by 40% for a manufacturing client.",
      ],
    },
    "full-stack-dev": {
      title: "Full-Stack Development",
      subtitle: "Production-grade applications built for scale and speed.",
      paragraphs: [
        "I build complete web applications that handle real-world complexity — from real-time collaborative dashboards to high-throughput API services serving millions of requests. My stack is modern and battle-tested: React and TypeScript on the frontend, Node.js and PostgreSQL on the backend, deployed on cloud-native infrastructure.",
        "The frontend work I deliver prioritizes performance and user experience. I implement progressive loading strategies, optimistic UI updates, and sophisticated state management that keeps applications responsive under heavy data loads. Every interface is built with accessibility in mind, following WCAG 2.1 AA standards.",
        "On the backend, I design API architectures that scale horizontally. GraphQL for flexible data fetching, REST for third-party integrations, and WebSockets for real-time features. Database design follows normalization best practices with strategic denormalization where query performance demands it. Caching layers, connection pooling, and query optimization ensure sub-100ms response times at scale.",
        "Recent deliveries include a multi-tenant SaaS analytics platform serving 50,000+ daily active users, a real-time trading interface processing $2M+ in daily volume, and an e-commerce platform with a custom recommendation engine that increased average order value by 23%.",
      ],
    },
    "systems-architecture": {
      title: "Systems Architecture",
      subtitle: "Resilient infrastructure designed for growth and reliability.",
      paragraphs: [
        "System architecture is the foundation that determines whether your product thrives or collapses under growth. I design infrastructure that scales gracefully — from containerized microservices on Kubernetes to event-driven architectures that handle millions of events per second with sub-second latency.",
        "My architectural practice emphasizes resilience through redundancy, circuit breakers, and graceful degradation. Every system includes comprehensive observability — distributed tracing, structured logging, and intelligent alerting that catches issues before they impact users. I implement Infrastructure as Code (Terraform/Pulumi) ensuring environments are reproducible and changes are auditable.",
        "Cloud strategy is tailored to each project's needs. AWS and GCP are my primary platforms, with deep expertise in serverless architectures (Lambda, Cloud Functions), managed Kubernetes (EKS, GKE), and managed databases (RDS, Cloud SQL, BigQuery). Cost optimization is built into every design decision — right-sizing instances, leveraging spot pricing, and implementing intelligent auto-scaling.",
        "Notable architecture projects include designing a cloud migration strategy for a fintech company processing $500M+ annually, building an event-driven microservices platform handling 10M+ daily transactions, and implementing a zero-downtime deployment pipeline that reduced release cycles from monthly to daily.",
      ],
    },
    "api-integrations": {
      title: "API \u0026 Integrations",
      subtitle: "Connecting your entire technology stack seamlessly.",
      paragraphs: [
        "Modern businesses rely on dozens of specialized tools — CRMs, payment processors, analytics platforms, communication APIs. I build the integration layer that connects these systems into a cohesive, automated workflow. Custom API development, third-party integrations, and real-time data synchronization are my core expertise.",
        "Payment integration is a particular specialty. I've implemented Stripe, PayPal, and custom payment gateway integrations for platforms processing millions in transaction volume. This includes subscription billing with proration, multi-currency support, automated invoicing, and comprehensive reconciliation reporting.",
        "Real-time data pipelines are another focus area. I build WebSocket-based systems for live dashboards, webhook receivers with idempotency guarantees, and event streaming architectures using Kafka or cloud-native equivalents. These systems maintain data consistency across distributed services with robust error handling and automatic retry mechanisms.",
        "Recent integration work includes connecting a Salesforce CRM to a custom ERP via bi-directional sync, implementing a real-time inventory system across 12 warehouse locations, and building a unified analytics pipeline that aggregates data from 8 different marketing platforms into a single source of truth.",
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
      title: "Autonomous Support Agent",
      year: "2025",
      discipline: "AI Automation",
      image: "images/proj-img-1.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Real-Time Analytics Platform",
      year: "2025",
      discipline: "Full-Stack",
      image: "images/proj-img-2.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "E-Commerce Recommendation Engine",
      year: "2024",
      discipline: "AI / ML",
      image: "images/proj-img-3.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Cloud Infrastructure Migration",
      year: "2024",
      discipline: "DevOps",
      image: "images/proj-img-1.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Multi-Tenant SaaS Platform",
      year: "2024",
      discipline: "Full-Stack",
      image: "images/proj-img-2.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Document Intelligence Pipeline",
      year: "2023",
      discipline: "AI Automation",
      image: "images/proj-img-3.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "IoT Data Processing System",
      year: "2023",
      discipline: "Systems",
      image: "images/proj-img-1.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Payment Gateway Integration",
      year: "2023",
      discipline: "API",
      image: "images/proj-img-2.jpg",
      href: "https://github.com",
      external: true,
    },
    {
      title: "Portfolio Generator Tool",
      year: "2023",
      discipline: "Full-Stack",
      image: "images/proj-img-3.jpg",
      href: "https://github.com",
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
      quote: "Robert transformed our entire customer support operation. The AI agent he built now handles 85% of our Tier-1 tickets with better accuracy than our human team. ROI was visible within the first month.",
      author: "Sarah Chen",
      role: "VP of Operations",
      company: "TechFlow Inc.",
    },
    {
      quote: "We brought Robert in to architect our cloud migration and he delivered beyond expectations. Zero downtime, 40% cost reduction, and a deployment pipeline that lets us ship daily instead of monthly.",
      author: "Marcus Johnson",
      role: "CTO",
      company: "FinScale",
    },
    {
      quote: "The full-stack platform Robert built for us scaled from 0 to 50,000 daily active users without a hiccup. His attention to performance and clean architecture saved us months of technical debt.",
      author: "Elena Rodriguez",
      role: "Product Lead",
      company: "DataVision",
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
  "AI Automation": "/capability/ai-automation",
  "Web Development": "/capability/full-stack-dev",
  "Systems Architecture": "/capability/systems-architecture",
  "API Integration": "/capability/api-integrations",
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
      links: ["AI Automation", "Web Development", "Systems Architecture", "API Integration"],
    },
  ],
  copyright: "\u00A9 2025 Robert. All rights reserved.",
  bottomLinks: [
    { label: "GitHub", href: socialConfig.github, external: true },
    { label: "LinkedIn", href: socialConfig.linkedin, external: true },
    { label: "Twitter", href: socialConfig.twitter, external: true },
  ],
};
