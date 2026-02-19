"use client";
import service_data from "@/data/ServiceData";
import Image from "next/image";
import Link from "next/link";

import shape from "@/assets/images/shape/service-two-item-shape.png";
import { CpuIcon } from "lucide-react";

const ServiceArea = () => {
  return (
    <section className="service-inner-area pt-40 pb-120">
      <section className="bg-gracetech-dark text-white py-5 position-relative overflow-hidden">
        <div
          className="container py-5 text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-4 fw-bold ">Our Services</h1>
        </div>
        <CpuIcon
          className="position-absolute bottom-0 end-0 opacity-10 text-white"
          size={400}
        />
      </section>
      <div className="container">
        <div className="row g-4">
          {service_data
            .filter((items) => items.page === "home_2")
            .map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6">
                <div className="service-two__item">
                  <div className="image">
                    <Image
                      src={item.thumb ? item.thumb : ""}
                      alt={item.title}
                    />
                  </div>
                  <div className="service-two__content">
                    <div className="icon">
                      <Image src={item.icon} alt="icon" />
                    </div>
                    {/* This maintains your specific curve shape UI */}
                    <div className="shape">
                      <Image src={shape} alt="shape" />
                    </div>

                    {/* Dynamic Title from data */}
                    <h4>
                      <Link
                        href={`service-details/${item.slug || ""}`}
                        className="primary-hover"
                      >
                        {item.title}
                      </Link>
                    </h4>

                    {/* Main Description */}
                    <p>{item.desc}</p>

                    {/* Features List injected into the UI */}
                    {item.features && (
                      <ul className="list-unstyled mb-3">
                        {item.features.map((feature, i) => (
                          <li
                            key={i}
                            className="mb-1 d-flex align-items-start"
                            style={{ fontSize: "14px" }}
                          >
                            <i className="fa-solid fa-check text-primary me-2 mt-1"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Tagline before the button */}
                    {item.tagline && (
                      <p className="small fw-bold text-primary mb-3">
                        <em>{item.tagline}</em>
                      </p>
                    )}

                    <Link
                      className="read-more-btn"
                      href={`service-details/${item.slug || ""}`}
                    >
                      Read More{" "}
                      <i className="fa-regular fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
