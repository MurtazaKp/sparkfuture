import { StaticImageData } from "next/image";

import kizotopiaImg from "@/assets/images/case/kizotopia.png"
import stringzImg from "@/assets/images/case/stringz.png"
import arbitrium from "@/assets/images/case/arbitrium.jpg"
import jsbsImg from "@/assets/images/case/jsbs.png"
import domImg from "@/assets/images/case/dom_estate.png"

import galaxyImg from "@/assets/images/case/galaxy.jpg"
import Case2_4 from "@/assets/images/case/case-three-image1.jpg"
import Case2_1 from "@/assets/images/case/case-image3.jpg"
import sameerImg from "@/assets/images/case/sameer.jpg"


export interface PortfolioDataType {
   id: number;
   page: string;
   slug: string; 
   thumb: StaticImageData;
   sub_title: string;
   title: string;
   summary?: string;
   tech_stack?: string[];
   overview?: string;
   deliverables?: string[];
   impact?: string;
   external_link?: string;
}

const Case_data: PortfolioDataType[] = [
   {
      id: 1,
      page: "case_2",
      slug: "kidztopia",
      thumb: kizotopiaImg,
      sub_title: "eCommerce & Mobile Apps",
      title: "Kidztopia – Kuwait’s Premium Toy Store",
      summary: "Designed and developed a complete digital commerce ecosystem including a high-performance eCommerce website and cross-platform mobile apps.",
      tech_stack: ["WordPress", "WooCommerce", "Flutter", "Laravel", "MySQL"],
      overview: "Kidztopia is a leading toy destination in Kuwait. The goal was to build a seamless omnichannel experience connecting in-store retail with online and mobile commerce.",
      deliverables: [
         "Modern, responsive online store with smart categorization",
         "iOS & Android apps with real-time product sync",
         "Integrated API architecture for synchronized inventory",
         "Secure checkout & payment integration"
      ],
      impact: "Strengthened digital presence and enabled a fully integrated omnichannel retail experience.",
      external_link: "https://kidztopia.com"
   },
   {
      id: 2,
      page: "case_2",
      slug: "stringz-kuwait",
      thumb: stringzImg,
      sub_title: "Musical Instruments & Accessories",
      title: "Stringz Kuwait",
      summary: "Developed a high-performance eCommerce platform for Stringz Kuwait — a leading musical instruments retailer.",
      tech_stack: ["WordPress", "WooCommerce", "MySQL"],
      overview: "Built a scalable and responsive online store for Kuwait’s dedicated music retail brand, optimized for performance and mobile-first shopping.",
      deliverables: [
         "Structured product catalog for instruments & accessories",
         "Seamless shopping and secure checkout experience",
         "Mobile-optimized UI for smooth browsing"
      ],
      impact: "Enabled the brand to expand beyond physical retail and create a streamlined online community experience.",
      external_link: "https://stringzkuwait.com"
   },
   {
      id: 3,
      page: "case_2",
      slug: "arbitrium",
      thumb: arbitrium,
      sub_title: "Online Dispute Resolution (ODR)",
      title: "Arbitrium",
      summary: "Designed and developed Arbitrium’s complete ODR ecosystem — corporate website + custom case management platform.",
      tech_stack: ["HTML", "Bootstrap", "JQuery", "PHP – Laravel", "MySQL"],
      overview: "Built a fully customized ODR platform enabling digital negotiation, mediation, and arbitration workflows with secure dashboards.",
      deliverables: [
         "Custom ODR Platform supporting end-to-end digital case management",
         "Professional corporate website to educate visitors on ODR benefits",
         "Secure & Scalable Architecture to ensure data integrity"
      ],
      impact: "Digitized legal workflows, increasing transparency and efficiency in dispute resolution."
   },
   {
      id: 4,
      page: "case_2",
      slug: "jsbs-school",
      thumb: jsbsImg,
      sub_title: "Education Initiative",
      title: "JSBS – Business School Website",
      summary: "Developed a modern, responsive Next.js website reflecting the institution’s vision, academic excellence, and community impact.",
      tech_stack: ["Next.js", "Modern Frontend", "Performance Optimization"],
      overview: "Developed a digital experience for Aljamea-tus-Saifiyah Business School that reflects tradition with a contemporary interface.",
      deliverables: [
         "Fully responsive Next.js website",
         "Clean, structured content architecture for institutional storytelling",
         "SEO-friendly implementation for greater discoverability"
      ],
      impact: "Provided a scalable framework for future academic growth and digital expansion.",
      external_link:"https://jsbs.jameasaifiyah.edu/"
   },
   {
      id: 5,
      page: "case_2",
      slug: "galaxie-interiors",
      thumb: galaxyImg,
      sub_title: "Custom Furniture Quotation Tool",
      title: "GalaxieInteriors",
      summary: "Built a dynamic web-based system that captures detailed furniture parameters and generates accurate, real-time quotations.",
      tech_stack: ["HTML", "Bootstrap", "jQuery", ".NET MVC", "SQL Server"],
      overview: "Replaced manual estimation processes with a customized tool that calculates pricing based on materials, finishes, and dimensions.",
      deliverables: [
         "Dynamic quotation engine with rule-based pricing logic",
         "Parameter-driven input system for multiple categories",
         "Centralized data management and secure admin controls"
      ],
      impact: "Reduced manual errors and significantly improved turnaround time for client proposals."
   },
   {
      id: 6,
      page: "case_2",
      slug: "ibake-bakery-system",
      thumb: Case2_4,
      sub_title: "POS + ERP + KOT",
      title: "iBake – Bakery Management System",
      summary: "Developed an end-to-end bakery solution integrating POS billing, Kitchen Order Ticket (KOT), and inventory management.",
      tech_stack: [".NET", "SQL Server", "jQuery", "Bootstrap"],
      overview: "A unified platform connecting front-desk billing with back-end production and inventory workflows in real time.",
      deliverables: [
         "Fast POS billing with multi-payment support",
         "Automatic KOT transfer from POS to kitchen",
         "Recipe-based production planning and stock monitoring"
      ],
      impact: "Centralized operations and provided real-time visibility into sales and profitability."
   },
   {
      id: 7,
      page: "case_2",
      slug: "sameer-roadlines",
      thumb: sameerImg,
      sub_title: "Transport Management System",
      title: "Sameer RoadLines India",
      summary: "Comprehensive TMS automating operations from bilty creation and dispatch to freight payments and invoicing.",
      tech_stack: [".NET", "SQL Server", "jQuery", "Bootstrap"],
      overview: "Customized TMS for a trusted logistics provider to automate their Maharashtra and Gujarat-based operations.",
      deliverables: [
         "Digital Bilty creation and shipment scheduling",
         "Financial management for freight settlements and customer receipts",
         "Automated invoice and money receipt generation"
      ],
      impact: "Boosted organizational efficiency by replacing paper-based processes with a centralized digital platform."
   },
   {
      id: 8,
      page: "case_2",
      slug: "mobile-retail-system",
      thumb: Case2_1,
      sub_title: "Desktop Application",
      title: "Mobile Retail Management System",
      summary: "Developed a custom desktop solution for mobile phone retailers to manage purchases and inventory with IMEI-wise tracking.",
      tech_stack: [".NET (Win Forms)", "SQL Server"],
      overview: "Tailored software for mobile retailers ensuring each handset is tracked via its unique IMEI number.",
      deliverables: [
         "IMEI-wise purchase recording and stock updates",
         "Sales processing with automated invoice generation",
         "Real-time inventory visibility at the device level"
      ],
      impact: "Eliminated stock discrepancies and improved device traceability for small-to-mid-sized retailers."
   },
   {
      id: 9,
      page: "case_2",
      slug: "dom-estates",
      thumb: domImg,
      sub_title: "Mobile App Support & Maintenance",
      title: "DOM Estates",
      summary: "Continuous bug fixes, performance optimization, and feature enhancements for Android and iOS applications.",
      tech_stack: ["Android Kotlin", "iOS Swift", "PHP-Laravel", "MySQL"],
      overview: "Ongoing technical engagement ensuring the DOM Estates apps remain secure and performance-optimized.",
      deliverables: [
         "Bug troubleshooting and resolution",
         "Compatibility updates for new OS versions",
         "UI/UX refinements and release management"
      ],
      impact: "Reduced crash rates and improved user experience across both mobile platforms."
   }
];

export default Case_data;