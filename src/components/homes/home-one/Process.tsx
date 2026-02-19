"use client";
import Image from "next/image";

import shape from "@/assets/images/icon/section-title.png";

interface DataType {
  id: number;

  title: string;
  subtitle: string;
  points: string[];
  result: string;
}

const process_data: DataType[] = [
  {
    id: 1,
    title: "Discover the Problem",
    subtitle: "Every great product starts with clarity.",
    points: [
      "Deep-dive into business and users",
      "Identify real problems worth solving",
      "Challenge assumptions & refine ideas",
    ],
    result: "A sharp problem statement & clear vision.",
  },
  {
    id: 2,
    title: "Design the Future",
    subtitle: "We turn ideas into actionable plans.",
    points: [
      "Smart architecture & tech stack",
      "UX-first thinking for real users",
      "Scalable, secure system design",
    ],
    result: "A future-ready blueprint built to last.",
  },
  {
    id: 3,
    title: "Build Fast. Build Right.",
    subtitle: "Speed matters — quality matters more.",
    points: [
      "Agile, sprint-based development",
      "Clean, production-grade code",
      "Continuous collaboration & demos",
    ],
    result: "A working product that evolves fast.",
  },
  {
    id: 4,
    title: "Test Everything",
    subtitle: "If it’s not tested, it’s not done.",
    points: [
      "Functional & security testing",
      "Real-world usage scenarios",
      "Rapid fixes and refinements",
    ],
    result: "A rock-solid product you can trust.",
  },
  {
    id: 5,
    title: "Launch with Confidence",
    subtitle: "Go live without the stress.",
    points: [
      "Smooth deployments & rollouts",
      "Production monitoring day one",
      "Zero-surprise go-live support",
    ],
    result: "A seamless, confident launch.",
  },
  {
    id: 6,
    title: "Scale & Optimize",
    subtitle: "We help you grow — continuously.",
    points: [
      "Performance & cost optimization",
      "Feature upgrades & integrations",
      "Scalability planning",
    ],
    result: "Tech that grows with your business.",
  },
  {
    id: 7,
    title: "Partner for the Long Run",
    subtitle: "We think beyond delivery.",
    points: [
      "Product evolution & roadmaps",
      "Data-driven improvements",
      "Long-term tech partnership",
    ],
    result: "A future-proof digital foundation.",
  },
];

const Process = () => {
  return (
    <section className="process-area pt-120 pb-120 bg-light">
      <div className="container">
        {/* Header Section */}
        <div className="section-header text-center mb-80">
          <h5
            className="wow fadeInUp d-flex align-items-center justify-content-center"
            data-wow-delay="0ms"
          >
            <Image
              className="me-2"
              src={shape}
              alt="icon"
              width={20}
              height={20}
            />
            OUR STEP-BY-STEP PROCESS
          </h5>
          <h2 className="display-5 fw-bold mt-3 mb-4">
            From idea to impact —{" "}
            <span className="text-primary">faster, smarter, better.</span>
          </h2>
          <p className="lead mx-auto text-muted" style={{ maxWidth: "800px" }}>
            At <strong>Sparkfuture Technologies LLP</strong>, we build solutions
            that move businesses forward through a focused and scalable
            methodology.
          </p>
        </div>

        {/* Vertical Cards Grid */}
        <div className="row g-4 ">
          {process_data.map((item, index) => (
            <div
              key={item.id}
              className="col-xl-4 col-lg-6 col-md-6 d-flex wow fadeInUp"
              data-wow-delay={`${index * 100}ms`}
            >
              <div className="card border-0 shadow-sm rounded-4 overflow-hidden w-100 transition-hover">
                {/* Card Header: Step & Image Side-by-Side */}
                <div className="card-header bg-white border-0 pt-4 px-4">
                  <div className="d-flex align-items-center justify-content-between">
                    {/* Big Step Number beside the image */}
                    <div className="step-label text-end">
                      <span className="d-block small text-uppercase fw-bold text-muted opacity-50">
                        Step
                      </span>
                      <span
                        className="display-3 fw-black text-primary"
                        style={{ lineHeight: 1, fontWeight: 900 }}
                      >
                        0{item.id}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body px-4 pt-3 pb-4">
                  <h4 className="fw-bold mb-2">{item.title}</h4>
                  <p className="small text-primary fw-semibold mb-4 text-uppercase tracking-wider">
                    {item.subtitle}
                  </p>

                  <ul className="list-unstyled mb-0">
                    {item.points.map((point, i) => (
                      <li key={i} className="mb-3 d-flex align-items-start">
                        {/* Styled Bullet Dot */}
                        <span
                          className="flex-shrink-0 me-3 mt-2"
                          style={{
                            width: "8px",
                            height: "8px",
                            borderRadius: "50%",
                            backgroundColor: "#0d6efd",
                            boxShadow: "0 0 0 4px rgba(13, 110, 253, 0.15)",
                          }}
                        ></span>
                        <span
                          className="fw-medium"
                          style={{
                            color: "#333",
                            fontSize: "16px",
                            lineHeight: "1.4",
                          }}
                        >
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer */}
                <div className="card-footer bg-dark text-white p-4 border-0 mt-auto">
                  <div
                    className="small opacity-50 text-uppercase fw-bold mb-1"
                    style={{ letterSpacing: "1px" }}
                  >
                    Deliverable
                  </div>
                  <div className="fw-medium text-info">{item.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
