import { StaticImageData } from "next/image";

// Thumbs & Template Icons
import icon_1 from "@/assets/images/icon/service-icon1.png"
import icon_2 from "@/assets/images/icon/service-icon2.png"
import icon_3 from "@/assets/images/icon/service-icon3.png"
import icon2_1 from "@/assets/images/icon/service-two-icon1.png"
import icon2_2 from "@/assets/images/icon/service-two-icon2.png"
import icon2_3 from "@/assets/images/icon/service-two-icon3.png"
import icon2_4 from "@/assets/images/icon/service-two-icon4.png"
import icon2_5 from "@/assets/images/icon/service-two-icon5.png"
import icon2_6 from "@/assets/images/icon/service-two-icon6.png"

import service_thumb1 from "@/assets/images/service/service-image1.jpg"
import service_thumb2 from "@/assets/images/service/service-image2.jpg"
import service_thumb3 from "@/assets/images/service/service-image3.jpg"
import service_thumb4 from "@/assets/images/service/service-image4.jpg"
import service_thumb5 from "@/assets/images/service/service-image5.jpg"
import service_thumb6 from "@/assets/images/service/service-image6.jpg"
import service_thumb7 from "@/assets/images/service/service-it.jpg"

// --- INTERFACES ---

export interface FAQType {
   id: number;
   title: string;
   desc: string;
}

export interface DataType {
   id: number;
   page: string;
   thumb?: StaticImageData;
   icon: StaticImageData;
   title: string;
   desc: string;
   tagline?: string;
   features?: string[];
   slug?: string;
}

export interface WhyPartnerType {
   title: string;
   iconName: string; // The Lucide icon name (e.g., "ShieldCheck")
}

export interface ServiceDetailType {
   id: string;
   title: string;
   subtitle: string;
    thumb?: StaticImageData;
   mainDesc: string;
   whatWeDo: string[];
   approach: string[];
   whySparkfuture: WhyPartnerType[]; // Updated to use object with iconName
   tagline: string;
   faqs: FAQType[];
}

// --- GENERAL SERVICE LIST ---
export const service_data: DataType[] = [
   { id: 1, page: "home_1", slug: "website-development", icon: icon_1, title: "Website Development", desc: "High-performance websites built to convert.", tagline: "Built to look great. Engineered to perform.", features: ["Corporate websites", "E-commerce", "SEO", "Secure tech stacks"] },
   { id: 2, page: "home_1", slug: "custom-software", icon: icon_2, title: "Custom Software Development", desc: "Tailored software solutions for your business.", tagline: "Software designed around your business.", features: ["Internal tools", "ERP & CRM", "APIs", "Scalable"] },
   { id: 3, page: "home_1", slug: "mobile-app-development", icon: icon_3, title: "Mobile App Development", desc: "Intuitive mobile apps for iOS and Android.", tagline: "From idea to app store — done right.", features: ["Native apps", "UX design", "Backend", "Scalable solutions"] },
   { id: 1, page: "home_2", slug: "website-development", thumb: service_thumb1, icon: icon2_1, title: "Website Development", desc: "Your website is your first impression.", tagline: "Built to perform.", features: ["Business sites", "CMS", "Scalability", "Modern stacks"] },
   { id: 2, page: "home_2", slug: "custom-software", thumb: service_thumb2, icon: icon2_2, title: "Custom Software", desc: "Custom solutions for unique workflows.", tagline: "Designed for you.", features: ["Business apps", "ERP/CRM", "API-ready", "Secure"] },
   { id: 3, page: "home_2", slug: "mobile-app-development", thumb: service_thumb3, icon: icon2_3, title: "Mobile App Development", desc: "High-performance apps users love.", tagline: "Done right.", features: ["Android/iOS", "Cross-platform", "UX-first", "Support"] },
   { id: 4, page: "home_2", slug: "cybersecurity", thumb: service_thumb4, icon: icon2_4, title: "Cybersecurity Solutions", desc: "Proactive security strategies.", tagline: "Protecting your business.", features: ["Infra security", "Risk analysis", "Secure arch", "Compliance"] },
   { id: 5, page: "home_2", slug: "ui-ux-design", thumb: service_thumb5, icon: icon2_5, title: "UI / UX Design", desc: "Design that delivers experiences.", tagline: "Design with purpose.", features: ["UX research", "Prototyping", "UI design", "Design systems"] },
   { id: 6, page: "home_2", slug: "cloud-services", thumb: service_thumb6, icon: icon2_6, title: "Cloud Services", desc: "Leverage the cloud for speed.", tagline: "Built for growth.", features: ["Migration", "Cloud-native", "Optimization", "Monitoring"] },
   { id: 7, page: "home_2", slug: "it-consulting", thumb: service_thumb7, icon: icon2_1, title: "IT Consulting & Strategy", desc: "Align technology with vision.", tagline: "Smart strategy.", features: ["Digital transformation", "IT evaluation", "Automation", "Roadmaps"] }
];

// --- DETAILED SERVICE DATA ---
export const service_details_data: Record<string, ServiceDetailType> = {
  "website-development": {
    id: "website-development",
    title: "Website Development Services",
    subtitle: "Build a Website That Works for Your Business",
    thumb: service_thumb1, // Added thumbnail
    mainDesc: "Your website should do more than look good — it should load fast, rank well, and convert visitors into customers. At Sparkfuture Technologies LLP, we build modern, secure, and performance-driven websites tailored to your business goals.",
    whatWeDo: [
      "Business & corporate websites",
      "E-commerce & CMS-based platforms",
      "Landing pages & marketing websites",
      "Website optimization & modernization"
    ],
    approach: [
      "Mobile-first, responsive design",
      "SEO & performance optimization",
      "Secure, scalable architecture",
      "Clean and maintainable code"
    ],
    whySparkfuture: [
      { title: "Fast-loading, conversion-focused", iconName: "Zap" },
      { title: "Modern tech stacks", iconName: "Code2" },
      { title: "Built for scalability", iconName: "BarChart3" }
    ],
    tagline: "Let’s build a website that drives real results.",
    faqs: [
      { id: 1, title: "How long does it take?", desc: "4-6 weeks for corporate, 8-12 weeks for e-commerce." },
      { id: 2, title: "Post-launch support?", desc: "Yes, we offer monthly maintenance." }
    ]
  },
  "custom-software": {
    id: "custom-software",
    title: "Custom Software Development",
    subtitle: "Software Built Around Your Business",
    thumb: service_thumb2, // Added thumbnail
    mainDesc: "Off-the-shelf software slows businesses down. We build custom solutions that fit your workflows, users, and growth plans.",
    whatWeDo: [
      "Custom business applications",
      "Internal tools & automation systems",
      "ERP, CRM & third-party integrations",
      "API-driven platforms"
    ],
    approach: [
      "Deep business process understanding",
      "Scalable, modular architecture",
      "Secure and future-ready design",
      "Agile, milestone-based delivery"
    ],
    whySparkfuture: [
      { title: "Tailored to exact needs", iconName: "Settings2" },
      { title: "Long-term scalability", iconName: "Expand" },
      { title: "Security-first approach", iconName: "ShieldCheck" }
    ],
    tagline: "Your business is unique — your software should be too.",
    faqs: [
      { id: 1, title: "Can you integrate existing tools?", desc: "Yes, we specialize in building custom API integrations." }
    ]
  },
  "mobile-app-development": {
    id: "mobile-app-development",
    title: "Mobile App Development",
    subtitle: "Mobile Apps Users Love to Use",
    thumb: service_thumb3, // Added thumbnail
    mainDesc: "We create high-performance mobile applications that are intuitive, secure, and built to scale. From concept to app store — we’ve got you covered.",
    whatWeDo: [
      "Android & iOS applications",
      "Cross-platform mobile apps",
      "Consumer & enterprise mobile solutions",
      "Backend & API integrations"
    ],
    approach: [
      "UX-first app design",
      "Clean, scalable development",
      "Performance & security optimization",
      "End-to-end app lifecycle support"
    ],
    whySparkfuture: [
      { title: "Smooth user experiences", iconName: "Smartphone" },
      { title: "Scalable architecture", iconName: "Layers" },
      { title: "Reliable post-launch support", iconName: "LifeBuoy" }
    ],
    tagline: "From concept to app store — we’ve got you covered.",
    faqs: [
      { id: 1, title: "Do you build for both iOS and Android?", desc: "Yes, we specialize in both Native and Cross-platform (React Native/Flutter) development." }
    ]
  },
  "ui-ux-design": {
    id: "ui-ux-design",
    title: "UI / UX Design Services",
    subtitle: "Design That Delivers Real Experiences",
    thumb: service_thumb5, // Added thumbnail
    mainDesc: "Great design is not just about looks — it’s about usability, engagement, and clarity. We focus on creating purpose-driven designs with impact.",
    whatWeDo: [
      "UX research & user journey mapping",
      "Wireframes & interactive prototypes",
      "UI design & design systems",
      "Product & brand-focused interfaces"
    ],
    approach: [
      "User-centric design thinking",
      "Data-driven design decisions",
      "Brand-aligned visuals",
      "Continuous feedback & refinement"
    ],
    whySparkfuture: [
      { title: "Designs users enjoy", iconName: "Smile" },
      { title: "Improved conversions", iconName: "TrendingUp" },
      { title: "Consistent design systems", iconName: "Palette" }
    ],
    tagline: "Design with purpose. Experience with impact.",
    faqs: [
      { id: 1, title: "What is your design process?", desc: "We follow a cycle of discovery, wireframing, high-fidelity design, and user testing." }
    ]
  },
  "cybersecurity": {
    id: "cybersecurity",
    title: "Cybersecurity Solutions",
    subtitle: "Secure Your Digital Assets",
    thumb: service_thumb4, // Added thumbnail
    mainDesc: "Cyber threats are evolving — your security should evolve faster. We help businesses protect applications, data, and infrastructure with proactive solutions.",
    whatWeDo: [
      "Web & mobile applications",
      "Cloud & server infrastructure",
      "APIs & integrations",
      "Business-critical systems"
    ],
    approach: [
      "Vulnerability assessment & risk analysis",
      "Secure architecture & best practices",
      "Compliance-ready security planning",
      "Continuous monitoring & improvement"
    ],
    whySparkfuture: [
      { title: "Security in every layer", iconName: "Lock" },
      { title: "Reduced risk & downtime", iconName: "Activity" },
      { title: "Future-ready strategies", iconName: "ShieldAlert" }
    ],
    tagline: "Security is not optional. We make it reliable.",
    faqs: [
      { id: 1, title: "How often should we audit?", desc: "We recommend bi-annual vulnerability assessments and continuous monitoring for critical systems." }
    ]
  },
  "cloud-services": {
    id: "cloud-services",
    title: "Cloud Services",
    subtitle: "Build, Scale & Perform in the Cloud",
    thumb: service_thumb6, // Added thumbnail
    mainDesc: "We help businesses leverage the cloud for speed, scalability, and cost efficiency. Build, deploy, and scale with total confidence.",
    whatWeDo: [
      "Cloud migration & setup",
      "Cloud-native application development",
      "Infrastructure optimization",
      "Monitoring & scaling solutions"
    ],
    approach: [
      "Performance & cost-focused architecture",
      "Secure cloud configurations",
      "Scalable infrastructure planning",
      "Ongoing optimization & support"
    ],
    whySparkfuture: [
      { title: "Faster deployments", iconName: "CloudLightning" },
      { title: "Optimized cloud costs", iconName: "DollarSign" },
      { title: "Reliable environments", iconName: "Server" }
    ],
    tagline: "Cloud solutions built for growth.",
    faqs: [
      { id: 1, title: "Which platforms do you support?", desc: "We are experts in AWS, Google Cloud (GCP), and Microsoft Azure." }
    ]
  },
  "it-consulting": {
    id: "it-consulting",
    title: "IT Consulting & Strategy",
    subtitle: "Technology Decisions That Drive Growth",
    thumb: service_thumb7, // Added thumbnail
    mainDesc: "We align technology with your business vision to help you scale smarter and faster. We focus on practical, actionable recommendations.",
    whatWeDo: [
      "Digital transformation strategy",
      "IT system evaluation & modernization",
      "Process automation & optimization",
      "Long-term technology roadmaps"
    ],
    approach: [
      "Business-first consulting mindset",
      "Practical, actionable recommendations",
      "Risk & scalability planning",
      "Long-term partnership focus"
    ],
    whySparkfuture: [
      { title: "Clear strategic direction", iconName: "Compass" },
      { title: "Reduced technical debt", iconName: "Trash2" },
      { title: "Future-proof IT foundations", iconName: "Globe" }
    ],
    tagline: "Smart strategy. Strong execution.",
    faqs: [
      { id: 1, title: "What is your consulting model?", desc: "We work on a partnership basis, starting with a deep audit followed by a staged implementation roadmap." }
    ]
  }
};

export default service_data;