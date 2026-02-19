import Case_data from "@/data/CaseData";
import Image from "next/image";
import Link from "next/link";

const CaseArea = () => {
  return (
    <section className="case-area pt-20 pb-120">
      <section className="bg-gracetech-dark text-white py-5 position-relative overflow-hidden">
        <div
          className="container py-5 text-center position-relative"
          style={{ zIndex: 2 }}
        >
          <h1 className="display-4 fw-bold ">Our Portfolio</h1>
        </div>
      </section>
      <div className="container">
        <div className="row g-4">
          {Case_data.filter((items) => items.page === "case_2").map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="case-card">
                <div className="case-card__image">
                  <Image
                    src={item.thumb}
                    alt={item.title}
                    fill
                    className="case-card__img"
                  />
                </div>

                <div className="case-card__content">
                  <span className="case-card__subtitle">{item.sub_title}</span>

                  <h3 className="case-card__title">
                    <Link href="/case-details">{item.title}</Link>
                  </h3>

                  <p className="case-card__summary">{item.summary}</p>

                  <Link href={item.slug} className="case-card__btn">
                    View Details →
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

export default CaseArea;
