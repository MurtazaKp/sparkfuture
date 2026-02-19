"use client";
import Image from "next/image";
import Link from "next/link";
// Import Lucide Icons
import {
  Globe,
  Code2,
  Smartphone,
  Palette,
  ShieldCheck,
  Cloud,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

import shape_1 from "@/assets/images/shape/service-bg-shape.png";
import shape_2 from "@/assets/images/icon/section-title.png";
import shape_3 from "@/assets/images/shape/service-item-shape.png";

interface DataType {
  id: number;
  title: string;
  desc: string;
  tagline: string;
  points: string[];
  icon: React.ReactNode; // Added icon type
}

const service_data: DataType[] = [
  {
    id: 1,
    title: "Website Development",
    desc: "Your website is more than a digital presence — it’s your first impression. We develop responsive, SEO-friendly sites built to convert.",
    tagline: "Built to look great. Engineered to perform.",
    points: [
      "Corporate & business websites",
      "E-commerce & CMS-based solutions",
      "Performance optimization & scalability",
      "Secure and modern tech stacks",
    ],
    icon: <Globe size={32} className="text-primary" />,
  },
  {
    id: 2,
    title: "Custom Software Development",
    desc: "When off-the-shelf solutions don’t fit, we build tailored software aligned with your business workflows and long-term goals.",
    tagline:
      "Software designed around your business — not the other way around.",
    points: [
      "Business applications & internal tools",
      "ERP, CRM & system integrations",
      "API-driven & cloud-ready solutions",
      "Scalable, secure architecture",
    ],
    icon: <Code2 size={32} className="text-primary" />,
  },
  {
    id: 3,
    title: "Mobile App Development",
    desc: "Powerful mobile experiences that users love. We build intuitive, high-performance apps for Android, iOS, and cross-platform.",
    tagline: "From idea to app store — done right.",
    points: [
      "Native & cross-platform apps",
      "UX-focused app design",
      "Backend & API integrations",
      "Secure, scalable mobile solutions",
    ],
    icon: <Smartphone size={32} className="text-primary" />,
  },
  {
    id: 4,
    title: "UI / UX Design",
    desc: "Design that looks good and works even better. Our team focuses on seamless digital experiences that drive engagement.",
    tagline: "Design with purpose. Experience with impact.",
    points: [
      "User research & journey mapping",
      "Wireframing & prototyping",
      "Modern, intuitive interface design",
      "Brand-aligned visual identity",
    ],
    icon: <Palette size={32} className="text-primary" />,
  },
  {
    id: 5,
    title: "Cybersecurity Solutions",
    desc: "Security is not optional — it’s essential. We protect your digital assets with robust strategies and risk analysis.",
    tagline: "Protecting your business in a connected world.",
    points: [
      "Application & infrastructure security",
      "Vulnerability assessment & risk",
      "Secure architecture & best practices",
      "Compliance-ready security planning",
    ],
    icon: <ShieldCheck size={32} className="text-primary" />,
  },
  {
    id: 6,
    title: "Cloud Services",
    desc: "Build, deploy, and scale with confidence. Move to the cloud and optimize for performance, cost, and reliability.",
    tagline: "Cloud solutions built for growth.",
    points: [
      "Cloud migration & setup",
      "Cloud-native application development",
      "Performance & cost optimization",
      "Secure, scalable infrastructure",
    ],
    icon: <Cloud size={32} className="text-primary" />,
  },
  {
    id: 7,
    title: "IT Consulting & Strategy",
    desc: "Technology aligned with business outcomes. We partner with you to modernize and future-proof your IT ecosystem.",
    tagline: "Smart decisions. Strong foundations.",
    points: [
      "Digital transformation strategy",
      "Technology stack evaluation",
      "Process optimization & automation",
      "Long-term IT roadmap planning",
    ],
    icon: <Lightbulb size={32} className="text-primary" />,
  },
];

const Service = () => {
  return (
    <section
      id="service-section"
      className="service-area pt-120 pb-50 bg-light position-relative overflow-hidden"
    >
      <div className="service__shape wow slideInRight position-absolute top-0 end-0">
        <Image className="sway_Y__animation" src={shape_1} alt="shape" />
      </div>

      <div className="container">
        <div className="d-flex flex-wrap gap-4 align-items-center justify-content-between mb-60">
          <div className="section-header">
            <h5
              className="wow fadeInLeft d-flex align-items-center"
              data-wow-delay="0ms"
            >
              <Image
                className="me-2"
                src={shape_2}
                alt="icon"
                width={20}
                height={20}
              />
              WHAT WE OFFER
            </h5>
            <h2
              className="display-5 fw-bold mt-2 wow fadeInLeft"
              data-wow-delay="200ms"
            >
              Excellent IT Services
            </h2>
            <p
              className="mt-3 text-muted wow fadeInLeft"
              style={{ maxWidth: "600px" }}
              data-wow-delay="300ms"
            >
              At <strong>Sparkfuture Technologies LLP</strong>, we deliver
              end-to-end IT software services...
            </p>
          </div>
          <Link
            href="/service"
            className="btn-one wow fadeInUp"
            data-wow-delay="200ms"
          >
            View All Services <ArrowRight size={18} className="ms-2" />
          </Link>
        </div>

        <div className="row g-4">
          {service_data.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 d-flex wow fadeInUp"
              data-wow-delay={`${index * 100}ms`}
            >
              <div className="service-card bg-white rounded-4 shadow-sm border-0 w-100 d-flex flex-column transition-hover position-relative">
                <div className="service-shape position-absolute top-0 end-0">
                  <Image src={shape_3} alt="shape" />
                </div>

                <div className="card-body p-4 p-xl-5 pb-2 pb-xl-2">
                  {/* Replaced Static Image with Lucide Icon */}
                  <div
                    className="service-icon-box mb-4 p-3 d-inline-flex align-items-center justify-content-center rounded-3 bg-primary-soft"
                    style={{ width: "64px", height: "64px" }}
                  >
                    {item.icon}
                  </div>

                  <h4 className="fw-bold mb-3">
                    <Link
                      href="/service-details"
                      className="text-dark text-decoration-none hover-primary"
                    >
                      {item.title}
                    </Link>
                  </h4>

                  <p className="text-muted mb-4" style={{ fontSize: "15px" }}>
                    {item.desc}
                  </p>

                  <ul className="list-unstyled mb-0">
                    {item.points.map((point, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start">
                        <span className="list-dot me-3 mt-2"></span>
                        <span
                          className="fw-medium text-dark-grey"
                          style={{ fontSize: "15px" }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer bg-light p-4 border-0 mt-auto rounded-bottom-4">
                  <p className="mb-0 text-primary fw-bold small italic text-center">
                    &apos;{item.tagline}&apos;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
