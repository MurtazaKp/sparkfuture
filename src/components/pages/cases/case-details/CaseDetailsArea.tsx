import { PortfolioDataType } from "@/data/CaseData";
import Image from "next/image";
import { ExternalLink, CheckCircle2, Cpu } from "lucide-react";

interface Props {
  project: PortfolioDataType;
}

const CaseDetailsArea = ({ project }: Props) => {
  return (
    <div className="case-study-wrapper bg-white">
      {/* 1. Header Section: Center Aligned Title */}
      <section className="py-5 mt-4">
        <div className="container text-center">
          <div className="d-flex justify-content-center align-items-center gap-2 mb-3">
            <span
              className="badge rounded-pill bg-primary-soft text-primary px-3 py-2 fw-bold small text-uppercase"
              style={{ backgroundColor: "rgba(0, 21, 41, 0.05)" }}
            >
              Portfolio
            </span>
            <span className="text-muted fw-medium">{project.sub_title}</span>
          </div>

          <h1 className="display-3 fw-bold text-dark mb-4 px-lg-5">
            {project.title}
          </h1>

          <p
            className="lead text-muted mx-auto mb-0"
            style={{ maxWidth: "850px" }}
          >
            {project.summary}
          </p>
        </div>
      </section>

      {/* 2. Hero Image Section: Full Width Cinematic */}
      <section className="container mb-5">
        <div className="position-relative shadow-2xl overflow-hidden rounded-4">
          <Image
            src={project.thumb}
            alt={project.title}
            style={{ minHeight: "400px" }}
            className="object-fit-contain w-100"
            priority
          />
        </div>
      </section>

      {/* 3. Main Content: Strategy, Deliverables & Call to Action Sidebar */}
      <section className="py-5">
        <div className="container">
          <div className="row g-5">
            {/* Left Column */}
            <div className="col-lg-8">
              <div className="mb-5">
                <h3 className="fw-bold mb-4 border-start border-primary border-4 ps-3">
                  The Strategy
                </h3>
                <p className="fs-6 lh-lg text-secondary-emphasis">
                  {project.overview}
                </p>
              </div>

              <div>
                <h3 className="fw-bold mb-4 border-start border-primary border-4 ps-3">
                  Deliverables
                </h3>
                <div className="row g-3">
                  {project.deliverables?.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="d-flex align-items-center p-3 border rounded-3 bg-light-subtle">
                        <CheckCircle2 className="text-primary me-3" size={24} />
                        <span className="fw-medium">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Impact Card + New Button Placement */}
            <div className="col-lg-4">
              <div>
                <div
                  className="p-4 rounded-4 text-white shadow-lg"
                  style={{ background: "#001529" }}
                >
                  <div
                    className="opacity-25 fs-1 mb-n2"
                    style={{ fontFamily: "serif" }}
                  >
                    “
                  </div>
                  <h5
                    className="text-primary fw-bold text-uppercase small mb-2"
                    style={{ color: "#ffb400 !important" }}
                  >
                    Key Result & Impact
                  </h5>
                  <p className="lead mb-4">{project.impact}</p>

                  {/* Button moved here for higher conversion */}
                  {project.external_link && (
                    <a
                      href={project.external_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 rounded-3 mt-2"
                      style={{ border: "2px solid rgba(255,255,255,0.2)" }}
                    >
                      Visit Live Project <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Separate Tech Stack Section */}
      <section className="py-5 bg-light mt-5 border-top">
        <div className="container">
          <div className="d-flex align-items-center gap-3 mb-5">
            <div className="p-3 bg-white rounded-circle shadow-sm">
              <Cpu className="text-primary" size={32} />
            </div>
            <h2 className="fw-bold m-0">Core Technologies</h2>
          </div>

          <div className="row row-cols-2 row-cols-md-4 row-cols-lg-6 g-3">
            {project.tech_stack?.map((tech, i) => (
              <div key={i} className="col">
                <div className="bg-white p-3 rounded-3 text-center border shadow-sm hover-shadow transition-all">
                  <span className="fw-bold text-dark small">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseDetailsArea;
