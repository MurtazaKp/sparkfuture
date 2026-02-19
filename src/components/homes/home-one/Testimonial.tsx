"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import TestimonialForm from "@/components/forms/TestimonialForm";
import Image, { StaticImageData } from "next/image";
import { JSX } from "react";

import shape_1 from "@/assets/images/icon/section-title.png";
import avatar from "@/assets/images/testimonial/avatar.jpg";
import avatar_1 from "@/assets/images/testimonial/GisProfile.png";
import avatar_2 from "@/assets/images/testimonial/HuzefaNullwalaIbake.jpg";

interface DataType {
  id: number;
  avatar: StaticImageData;
  name: string;
  designation: string;
  desc: JSX.Element;
}

const testi_data: DataType[] = [
  {
    id: 1,
    avatar: avatar,
    name: "Mr. Parwez Ahmed Siddiqui",
    designation: "Founder & CEO , Sameer RoadLines India",
    desc: (
      <>
        Implementing Assured IT Services Transport Management Software has been
        a game-changer for our logistics business. This powerful solution has
        significantly streamlined our operations, allowing us to efficiently
        manage our fleet, track shipments, and optimize routes. The intuitive
        interface and robust features make it easy for our team to coordinate
        tasks and monitor performance in real-time. Thanks to Assured IT
        Services, we&apos;ve experienced increased efficiency, reduced costs,
        and improved customer satisfaction. I highly recommend their Transport
        Management Software to any logistics company looking to take their
        operations to the next level.
      </>
    ),
  },
  {
    id: 2,
    avatar: avatar_2,
    name: "Mr. Huzefa Nullwala",
    designation: "CEO & Founder , The Monarch Solutions",
    desc: (
      <>
        “ Assured IT Services has significantly improved our operations with
        their Bakery Management Software. Their expertise and dedication have
        streamlined our processes and enhanced customer experience. We&apos;re
        grateful for their exceptional services and look forward to our
        continued partnership. ”
      </>
    ),
  },
  {
    id: 3,
    avatar: avatar,
    name: "Mr. Sohel Bhoraniya",
    designation: "CEO & Founder ",
    desc: (
      <>
        “ Since integrating Assured IT Services optical retail management
        software into our shop, our daily operations have seen a remarkable
        improvement. This intuitive and robust solution has revolutionized how
        we manage our inventory, appointments, and customer records. The
        user-friendly interface ensures that our staff can easily navigate and
        utilize its features effectively. Assured IT Services has truly lived up
        to their name, providing us with a reliable and efficient software
        solution that has greatly enhanced our business operations. ”
      </>
    ),
  },
  {
    id: 4,
    avatar: avatar_1,
    name: "Mr. Huzefa Khanji",
    designation: "CEO & Founder, Galaxie Interiors ",
    desc: (
      <>
        “ We&apos;re leveraging the Estimate Generator by Assured IT Services,
        renowned for its efficiency and reliability. This tool has significantly
        streamlined our estimate generation process, simplifying input within
        our GIS Estimate Generator web application. Tailored for the furniture
        industry, it provides comprehensive customization and automation for
        estimate generation. Operating on a user-friendly input system, it
        swiftly generates estimates based on our daily project material
        requirements. Additionally, it generates reports and centralizes
        customer and project data, enhancing our workflow efficiency. ”
      </>
    ),
  },
];

const setting = {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: false,
  navigation: {
    nextEl: ".testimonial__arry-next",
    prevEl: ".testimonial__arry-prev",
  },
};

const Testimonial = () => {
  return (
    <section
      id="testimonial-section"
      className="testimonial-area bg-image pt-120 pb-120"
      style={{ backgroundImage: `url(/assets/images/bg/testimonial-bg.png)` }}
    >
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-6 wow fadeInLeft "
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div className="talk-us__item">
              <div className="section-header mb-30">
                <h5 className="text-white">
                  <svg
                    width="28"
                    height="12"
                    viewBox="0 0 28 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.75"
                      y="0.75"
                      width="18.5"
                      height="10.5"
                      rx="5.25"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <rect x="8" width="20" height="12" rx="6" fill="white" />
                  </svg>
                  TALK TO US
                </h5>
                <h2 className="text-white">How May We Help You!</h2>
              </div>
              <TestimonialForm />
            </div>
          </div>
          <div className="col-lg-6 ps-2 ps-lg-5">
            <div className="section-header mb-40">
              <h5
                className="wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <Image className="me-1" src={shape_1} alt="icon" />
                CLIENTS REVIEW
              </h5>
              <h2
                className="wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                What They Say About Our
              </h2>
              <p
                className="wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                Your growth is our mission. We work closely with every
                organization to design solutions that aren&apos;t just
                functional, but future-ready. Discover why businesses choose
                Sparkfuture Technologies for custom development, cloud strategy,
                and enterprise-grade scalability through the honest feedback of
                our valued partners.
              </p>
            </div>
            <Swiper
              {...setting}
              modules={[Autoplay, Navigation]}
              className="swiper testimonial__slider wow fadeInDown"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              {testi_data.map((item) => (
                <SwiperSlide key={item.id} className="swiper-slide">
                  <div className="testimonial__item">
                    <div className="d-flex align-items-center gap-3">
                      {/* Avatar Wrapper for consistent styling */}
                      <div className="testimonial__avatar-wrapper">
                        <Image
                          src={item.avatar}
                          alt={item.name}
                          width={80}
                          height={80}
                          className="testimonial__avatar-img"
                        />
                      </div>

                      <div className="testi-info">
                        <h4>{item.name}</h4>
                        <p className="mb-0">{item.designation}</p>
                        <div className="star mt-1">
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-30">{item.desc}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div
              className="testimonial__arry-btn mt-40 wow fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <button className="arry-prev testimonial__arry-prev">
                <i className="fa-light fa-chevron-left"></i>
              </button>
              <button className="arry-next testimonial__arry-next active">
                <i className="fa-light fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
