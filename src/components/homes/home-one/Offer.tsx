"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX } from "react";

import shape_1 from "@/assets/images/shape/offer-shadow-shape.png";
import shape_2 from "@/assets/images/shape/offer-bg-shape-left.png";
import shape_3 from "@/assets/images/shape/offer-bg-shape-right.png";
import shape_4 from "@/assets/images/icon/section-title.png";
import shape_5 from "@/assets/images/shape/offter-item-shape-top.png";
import shape_6 from "@/assets/images/shape/offter-item-shape-bottom.png";

interface DataType {
  id: number;
  icon: JSX.Element;
  title: string;
}

// Tech stack data for the automated ticker
const tech_stack = [
  { name: ".NET", color: "#512BD4" },
  { name: "WordPress", color: "#21759B" },
  { name: "Python", color: "#3776AB" },
  { name: "React.js", color: "#61DAFB" },
  { name: "Angular", color: "#DD0031" },
  { name: "Flutter", color: "#02569B" },
  { name: "Next.js", color: "#000000" },
  { name: "MySQL", color: "#4479A1" },
  { name: "Microsoft Azure", color: "#0078D4" },
  { name: "AWS", color: "#FF9900" },
  { name: "SQL Server", color: "#CC2927" },
  { name: "Swift", color: "#F05138" },
  { name: "Kotlin", color: "#7F52FF" },
  { name: "PHP", color: "#777BB4" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "Bootstrap", color: "#7952B3" },
];

const offer_data: DataType[] = [
  {
    id: 1,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    title: "Frontend",
  },
  {
    id: 2,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6.01" y2="6"></line>
        <line x1="6" y1="18" x2="6.01" y2="18"></line>
      </svg>
    ),
    title: "Backend",
  },
  {
    id: 3,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    title: "Mobile App",
  },
  {
    id: 4,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
        <path d="M2 17l10 5 10-5"></path>
        <path d="M2 12l10 5 10-5"></path>
      </svg>
    ),
    title: "Full Stack",
  },
  {
    id: 5,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
      </svg>
    ),
    title: "Database",
  },
  {
    id: 6,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3C72FC"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
      </svg>
    ),
    title: "Cloud/DevOps",
  },
];

const Offer = () => {
  return (
    <section className="offer-area secondary-bg pt-120 pb-120 position-relative overflow-hidden">
      <div
        className="offer__shadow wow fadeIn"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_1} alt="shadow" />
      </div>
      <div className="offer__shape-left">
        <Image
          className="wow fadeInUpBig"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
          src={shape_2}
          alt="shape"
        />
      </div>
      <div className="offer__shape-right">
        <Image
          className="wow fadeInDownBig"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
          src={shape_3}
          alt="shape"
        />
      </div>
      <div className="container">
        <div className="d-flex gap-4 flex-wrap align-items-center justify-content-between mb-95">
          <div className="section-header">
            <h5
              className="wow fadeInLeft"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              <Image className="me-1" src={shape_4} alt="icon" />
              Our Expertise
            </h5>
            <h2
              className="text-white wow fadeInLeft"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              Mastering Modern <br /> Technology Stacks
            </h2>
          </div>
          <Link
            href="/services"
            className="btn-one wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            Explore Our Stack <i className="fa-regular fa-arrow-right-long"></i>
          </Link>
        </div>

        <div className="row g-4 justify-content-center">
          {offer_data.map((item, index) => (
            <div
              key={item.id}
              className="col-lg-2 col-md-4 col-sm-6 wow bounceInUp"
              data-wow-delay={`${index * 100}ms`}
              data-wow-duration="1500ms"
            >
              <div className="offer__item text-center">
                <div className="shape-top">
                  <Image src={shape_5} alt="shape" />
                </div>
                <div className="shape-bottom">
                  <Image src={shape_6} alt="shape" />
                </div>
                <div className="offer__icon d-flex justify-content-center align-items-center">
                  {item.icon}
                </div>
                <h4 className="text-white mt-20" style={{ fontSize: "18px" }}>
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* --- AUTOMATED TECH STACK TICKER --- */}
        <div className="row mt-100">
          <div className="col-12">
            <div className="tech-marquee">
              <div className="marquee-content">
                {/* Loop 1 */}
                {tech_stack.map((tech, index) => (
                  <div key={`tech-1-${index}`} className="tech-marquee-item">
                    <div className="tech-marquee-card">
                      <div
                        className="tech-marquee-icon"
                        style={{ borderColor: tech.color }}
                      >
                        <span style={{ color: tech.color }}>
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                      <span className="tech-marquee-name text-white">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
                {/* Loop 2 (For seamless scrolling) */}
                {tech_stack.map((tech, index) => (
                  <div key={`tech-2-${index}`} className="tech-marquee-item">
                    <div className="tech-marquee-card">
                      <div
                        className="tech-marquee-icon"
                        style={{ borderColor: tech.color }}
                      >
                        <span style={{ color: tech.color }}>
                          {tech.name.charAt(0)}
                        </span>
                      </div>
                      <span className="tech-marquee-name text-white">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
