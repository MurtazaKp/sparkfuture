"use client";
import { useState } from "react";
import VideoPopup from "@/modals/VideoPopup";
import Image from "next/image";
import Link from "next/link";

import about_thumb1 from "@/assets/images/about/about-image1.jpg";
import about_thumb2 from "@/assets/images/about/about-image2.png";
import shape_1 from "@/assets/images/shape/about-line.png";
import shape_2 from "@/assets/images/shape/about-circle.png";
import shape_3 from "@/assets/images/icon/section-title.png";
import icon_1 from "@/assets/images/icon/about-icon1.png";
import icon_2 from "@/assets/images/icon/about-icon2.png";

const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="about-section" className="about-area sub-bg pt-120 pb-120">
        <div
          className="about__shape wow slideInLeft"
          data-wow-delay="400ms"
          data-wow-duration="1500ms"
        >
          <Image src={shape_1} alt="shape" />
        </div>
        <div className="container">
          <div className="row g-5">
            <div
              className="col-xl-6"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="about__left-item sticky-column">
                <div className="image big-image">
                  <Image src={about_thumb1} alt="SparkFuture" />
                </div>
                <div className="image sm-image">
                  <Image src={about_thumb2} alt="Innovation" />
                </div>
                <div className="circle-shape">
                  <Image src={shape_2} alt="shape" />
                </div>
              </div>
            </div>

            <div className="col-xl-6">
              <div className="section-header mb-40">
                <h5
                  className="wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <Image className="me-1" src={shape_3} alt="icon" />
                  WHO WE ARE?
                </h5>
                <h2
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Welcome to SparkFuture, your trusted digital partner!
                </h2>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  From dynamic websites to cutting-edge web solutions and
                  innovative apps for Windows, Android, and iOS, we`&apos;`re
                  committed to excellence at every step of your digital journey.
                  <strong> Specializing in custom requirements</strong>, we
                  provide centralized solutions for all business needs, ensuring
                  a seamless digital journey. Our focus is on problem-solving to
                  simplify your life.
                </p>
              </div>

              <div
                className="row g-4 wow fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="col-md-12">
                  <div className="about__right-item align-items-start mb-20">
                    <div className="icon">
                      <Image src={icon_1} alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">Market Experts</h4>
                      <p>
                        We pride ourselves on being experts in various domains
                        and cutting-edge technologies currently booming in the
                        market. We stay ahead of the curve to deliver solutions
                        that exceed expectations.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="about__right-item align-items-start">
                    <div className="icon">
                      <Image src={icon_2} alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="mb-1">
                        WHAT WE DO? Best Support Services
                      </h4>
                      <p>
                        Our commitment extends beyond delivery. Our dedicated
                        support team is always available to address issues and
                        offer timely assistance, empowering you to focus on your
                        goals with confidence.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="about__info mt-50 wow fadeInDown"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <Link href="/about" className="btn-one">
                  Explore More{" "}
                  <i className="fa-regular fa-arrow-right-long"></i>
                </Link>
              </div>
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

export default About;
