"use client";
import Image from "next/image";
import Link from "next/link";

import shape_1 from "@/assets/images/shape/footer-regular-left.png";
import shape_2 from "@/assets/images/shape/footer-solid-left.png";
import shape_3 from "@/assets/images/shape/footer-regular-right.png";
import shape_4 from "@/assets/images/shape/footer-solid-right.png";
import shape_5 from "@/assets/images/shape/footer-shadow-shape.png";

const FooterOne = () => {
  return (
    <footer className="footer-area secondary-bg">
      <div
        className="footer__shape-regular-left wow slideInLeft"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_1} alt="shape" />
      </div>
      <div
        className="footer__shape-solid-left wow slideInLeft"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image className="sway_Y__animation" src={shape_2} alt="shape" />
      </div>
      <div
        className="footer__shape-solid-right wow slideInRight"
        data-wow-delay="00ms"
        data-wow-duration="1500ms"
      >
        <Image className="sway_Y__animation" src={shape_3} alt="shape" />
      </div>
      <div
        className="footer__shape-regular-right wow slideInRight"
        data-wow-delay="200ms"
        data-wow-duration="1500ms"
      >
        <Image src={shape_4} alt="shape" />
      </div>
      <div className="footer__shadow-shape">
        <Image src={shape_5} alt="shodow" />
      </div>
      <div className="container">
        <div className="footer__wrp pt-100 pb-100">
          <div
            className="footer__item item-big wow fadeInUp"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            <Link href="/" className="logo mb-30">
              <img src="/assets/images/logo/logo.png" />
            </Link>
            <p>
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="social-icon">
              <Link href="#">
                <i className="fa-brands fa-facebook-f"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-twitter"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-linkedin-in"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-youtube"></i>
              </Link>
            </div>
          </div>
          <div
            className="footer__item item-sm wow fadeInUp"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">IT Solution</h3>
            <ul>
              <li>
                <Link href="/service-details/website-development">
                  <i className="fa-regular fa-angles-right me-1"></i> Web
                  Development
                </Link>
              </li>
              <li>
                <Link href="/service-details/custom-software">
                  <i className="fa-regular fa-angles-right me-1"></i> Custom
                  Software
                </Link>
              </li>
              <li>
                <Link href="/service-details/mobile-app-development">
                  <i className="fa-regular fa-angles-right me-1"></i> App
                  Development
                </Link>
              </li>
              <li>
                <Link href="/service-details/cybersecurity">
                  <i className="fa-regular fa-angles-right me-1"></i> Cyber
                  Security
                </Link>
              </li>
              <li>
                <Link href="/service-details/ui-ux-design">
                  <i className="fa-regular fa-angles-right me-1"></i> UI / UX
                  Design
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-sm wow fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">Quick Link</h3>
            <ul>
              <li>
                <Link href="/about">
                  <i className="fa-regular fa-angles-right me-1"></i> About
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <i className="fa-regular fa-angles-right me-1"></i> Our
                  Services
                </Link>
              </li>

              <li>
                <Link href="/portfolio">
                  <i className="fa-regular fa-angles-right me-1"></i> Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="footer__item item-big wow fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <h3 className="footer-title">Contact Us</h3>
            <p className="mb-20">Mumbai, Maharashtra, India.</p>
            <ul className="footer-contact">
              <li>
                <i className="fa-regular fa-clock"></i>
                <div className="info">
                  <h5>Opening Hours:</h5>
                  <p>Mon - Sat: 10.00 AM - 4.00 PM</p>
                </div>
              </li>
              <li>
                <i className="fa-duotone fa-phone"></i>
                <div className="info">
                  <h5>Phone Call:</h5>
                  <Link href={"tel:+917021216852"}>+91 7021216852</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="container">
          <div className="d-flex gap-1 flex-wrap align-items-center justify-content-md-between justify-content-center">
            <p
              className="wow fadeInDown"
              data-wow-delay="00ms"
              data-wow-duration="1500ms"
            >
              &copy; All Copyright 2026 by <Link href="#">SparkFuture</Link>
            </p>
            <ul
              className="d-flex align-items-center gap-4 wow fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <li>
                <Link href="#">Terms & Condition</Link>
              </li>
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
