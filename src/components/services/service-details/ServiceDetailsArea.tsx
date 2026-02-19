"use client";
import VideoPopup from "@/modals/VideoPopup";
import ServiceDetailsSidebar from "./ServiceDetailsSidebar";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Import Lucide Icons and the LucideIcon type for strict typing
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { service_details_data, WhyPartnerType } from "@/data/ServiceData";

import service_img_1 from "@/assets/images/service/service-single-image1.jpg";
import service_img_2 from "@/assets/images/service/service-single-image2.jpg";

interface Props {
  serviceId: string;
}

// Define the shape of our FAQ state
interface FAQState {
  id: number;
  title: string;
  desc: string;
  showAnswer: boolean;
}

const ServiceDetailsArea = ({ serviceId }: Props) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [faqData, setFaqData] = useState<FAQState[]>([]);

  const content =
    service_details_data[serviceId] ||
    service_details_data["website-development"];

  useEffect(() => {
    if (content && content.faqs) {
      const updatedFaq: FAQState[] = content.faqs.map((faq, index) => ({
        ...faq,
        showAnswer: index === 0,
      }));
      setFaqData(updatedFaq);
    }
  }, [serviceId, content]);

  const toggleAnswer = (faqId: number) => {
    setFaqData((prev) =>
      prev.map((faq) =>
        faq.id === faqId
          ? { ...faq, showAnswer: !faq.showAnswer }
          : { ...faq, showAnswer: false },
      ),
    );
  };

  return (
    <>
      <section className="service-details-area pt-120 pb-120">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-8 order-1 order-lg-1">
              <div className="service-details__content">
                {/* 1. Feature Hero Image */}
                <div className="service-details__image mb-50 position-relative overflow-hidden rounded-4">
                  <Image
                    src={service_img_1}
                    alt={content.title}
                    className="w-100 transition-transform"
                    priority
                  />
                </div>

                {/* 2. Intro Text */}
                <div className="service-details__header mb-40">
                  <span className="subtitle-tag">{content.subtitle}</span>
                  <h2 className="title-large mt-10 mb-20">{content.title}</h2>
                  <p className="description-lead fs-5 text-muted">
                    {content.mainDesc}
                  </p>
                </div>

                {/* 3. "What We Do" - Grid Style */}
                <h3 className="section-title mb-30">Our Key Capabilities</h3>
                <div className="row g-4 mb-50">
                  {content.whatWeDo.map((item, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="capability-box h-100">
                        <div className="box-icon">
                          <i className="fa-solid fa-check"></i>
                        </div>
                        <h5 className="mb-0">{item}</h5>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 4. Strategy & Visualization Section */}
                <div className="row g-4 align-items-center mb-60">
                  <div className="col-md-6">
                    <h3 className="section-title mb-25">Strategic Approach</h3>
                    <div className="approach-list">
                      {content.approach.map((item, i) => (
                        <div className="approach-item" key={i}>
                          <div className="step-num">{i + 1}</div>
                          <p>{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="side-image rounded-4 overflow-hidden shadow-lg">
                      <Image src={service_img_2} alt="Sparkfuture Strategy" />
                    </div>
                  </div>
                </div>

                {/* 5. Why Partner With Us? - RESOLVED TYPESCRIPT ERROR */}
                <h3 className="section-title mb-30">Why Partner With Us?</h3>
                <div className="row g-4 mb-60">
                  {content.whySparkfuture.map(
                    (item: WhyPartnerType, i: number) => {
                      // Type-safe Icon resolution
                      const IconComponent =
                        (LucideIcons[
                          item.iconName as keyof typeof LucideIcons
                        ] as LucideIcon) || LucideIcons.HelpCircle;

                      return (
                        <div className="col-md-4" key={i}>
                          <div className="why-box text-center p-4 rounded-4 h-100">
                            <div className="why-icon mb-3">
                              <IconComponent
                                size={32}
                                strokeWidth={1.5}
                                className="text-primary"
                              />
                            </div>
                            <h6 className="mb-0 fw-bold">{item.title}</h6>
                          </div>
                        </div>
                      );
                    },
                  )}
                </div>

                {/* 6. Highlight Quote / Tagline */}
                <div className="quote-box mb-60">
                  <div className="quote-icon">
                    <i className="fa-solid fa-quote-left"></i>
                  </div>
                  <h4 className="quote-text">{content.tagline}</h4>
                </div>

                {/* 7. FAQ */}
                <h3 className="section-title mb-30">
                  Service Intelligence (FAQ)
                </h3>
                <div className="accordion-custom mb-60">
                  {faqData.map((item) => (
                    <div
                      key={item.id}
                      className={`acc-item ${item.showAnswer ? "active" : ""}`}
                    >
                      <div
                        className="acc-header"
                        onClick={() => toggleAnswer(item.id)}
                      >
                        <span>{item.title}</span>
                        <i
                          className={`fa-solid ${
                            item.showAnswer ? "fa-minus" : "fa-plus"
                          }`}
                        ></i>
                      </div>
                      <div
                        className={`acc-body ${item.showAnswer ? "show" : ""}`}
                      >
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 8. Banner CTA */}
                <div className="contact-banner-box">
                  <div className="banner-content">
                    <h3>Transform Your Digital Ecosystem Today</h3>
                    <p>
                      Experience technical excellence with Sparkfuture’s
                      dedicated team.
                    </p>
                    <Link href="/contact" className="btn-modern mt-20">
                      Get Started Now{" "}
                      <i className="fa-regular fa-arrow-right-long ms-2"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 order-2 order-lg-2">
              <ServiceDetailsSidebar activeId={serviceId} />
            </div>
          </div>
        </div>
      </section>

      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId="eEzD-Y97ges"
      />
    </>
  );
};

export default ServiceDetailsArea;
