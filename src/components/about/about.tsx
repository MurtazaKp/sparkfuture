"use client";
import React from "react";

import {
  Cpu,
  Target,
  Eye,
  TrendingUp,
  ShieldCheck,
  Layers,
  CheckCircle,
  Award,
  Settings,
} from "lucide-react";

const About = () => {
  const whyChooseUs = [
    {
      title: "Strategic Technology Alignment",
      desc: "We align every solution with your business goals, ensuring measurable impact and long-term value.",
      icon: <TrendingUp className="text-primary" size={32} />,
    },
    {
      title: "Enterprise-Grade Quality",
      desc: "Built with scalability, security, and performance at their core, meeting global compliance expectations.",
      icon: <ShieldCheck className="text-primary" size={32} />,
    },
    {
      title: "Tailored Solutions",
      desc: "We do not believe in one-size-fits-all. Every engagement is customized to unique operational requirements.",
      icon: <Layers className="text-primary" size={32} />,
    },
    {
      title: "End-to-End Expertise",
      desc: "From consulting and design to development, deployment, and ongoing support.",
      icon: <Settings className="text-primary" size={32} />,
    },
    {
      title: "Commitment to Excellence",
      desc: "We prioritize transparency and accountability to ensure successful project delivery.",
      icon: <Award className="text-primary" size={32} />,
    },
  ];

  return (
    <div className="about-wrapper">
      {/* 1. Hero Section */}
      <section className="bg-gracetech-dark text-white py-5 position-relative overflow-hidden">
        <div
          className="container py-5 text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <span
            className="text-primary fw-bold text-uppercase mb-3 d-block"
            style={{ letterSpacing: "2px" }}
          >
            Innovating the Future
          </span>
          <h1 className="display-4 fw-bold ">About Sparkfuture Technologies</h1>
        </div>
        <Cpu
          className="position-absolute bottom-0 end-0 opacity-10 text-white"
          size={400}
        />
      </section>

      {/* 2. Company Story */}
      <section className="container py-5 my-5 mt-0">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Tech Innovation"
                className="img-fluid rounded shadow-lg"
              />
              <div className="bg-gracetech-dark text-white p-3 position-absolute top-0 start-0 m-3 shadow">
                <strong>Est. 2026</strong>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 className="display-6 fw-bold mb-4">
              Empowering Growth through Technology
            </h2>
            <p className="text-muted mb-4">
              Founded by three technology-driven professionals, Sparkfuture
              Technologies delivers strategic technology solutions that enable
              sustainable business growth.
            </p>
            <p className="text-muted mb-4">
              Our expertise spans custom software development, cloud solutions,
              and cybersecurity. We work closely with businesses to design
              tailored frameworks that align with long-term objectives.
            </p>
            <div className="row g-3">
              {[
                "Technical Excellence",
                "Structured Processes",
                "Secure Systems",
              ].map((item) => (
                <div key={item} className="col-md-6 d-flex align-items-center">
                  <CheckCircle className="text-primary me-2" size={20} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 p-5 border-0 shadow-sm border-gold">
                <Target className="text-primary mb-4" size={48} />
                <h3 className="fw-bold">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To revolutionize business growth by delivering technology
                  solutions that enhance efficiency, scalability, and
                  operational excellence.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 p-5 border-0 shadow-sm border-blue">
                <Eye className="text-primary mb-4" size={48} />
                <h3 className="fw-bold">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To leverage transformative technology that redefines business
                  operations, enabling organizations to achieve unprecedented
                  agility and competitive advantage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="container py-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">
            Why Choose Sparkfuture Technologies
          </h2>
          <div
            className="bg-warning mx-auto mt-3"
            style={{ width: "60px", height: "3px" }}
          ></div>
        </div>
        <div className="row g-4 justify-content-center">
          {whyChooseUs.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="p-4 border h-100 hover-card bg-white transition-all">
                <div className="mb-3">{item.icon}</div>
                <h5 className="fw-bold mb-3">{item.title}</h5>
                <p className="text-muted small mb-0">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
