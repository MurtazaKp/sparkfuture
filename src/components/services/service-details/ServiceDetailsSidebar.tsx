"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { service_data } from "@/data/ServiceData";

// Opening hours for Sparkfuture
const opening_data: string[] = [
  "Mon - Sat: 10.00 AM - 6.00 PM",
  "Sunday: Closed",
  "Emergency Support: 24/7",
];

interface Props {
  activeId?: string;
}

const ServiceDetailsSidebar = ({ activeId }: Props) => {
  const pathname = usePathname();

  // Filter services from your central data file that belong to the inner page (home_2)
  const services = service_data.filter((s) => s.page === "home_2");

  return (
    <div className="service-single__right-item">
      {/* Dynamic Services List */}
      <div className="item sub-bg mb-30">
        <h4 className="mb-20">Our Services</h4>
        <ul className="category service-category">
          {services.map((service) => {
            // Check if this link is currently active
            const isActive =
              activeId === service.slug ||
              pathname.includes(service.slug || "");

            return (
              <li key={service.id} className={isActive ? "active" : ""}>
                <Link
                  href={`/service-details/${service.slug}`}
                  className={isActive ? "text-primary fw-bold" : ""}
                >
                  {service.title}
                </Link>
                <i
                  className={`fa-regular fa-arrow-right-long ${isActive ? "text-primary" : "primary-color"}`}
                ></i>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Opening Hours */}
      <div className="item sub-bg mb-30">
        <h4 className="mb-20">Business Hours</h4>
        <ul className="category">
          {opening_data.map((open, i) => (
            <li
              key={i}
              className="secondary-color justify-content-start gap-3 border-bottom-0 pb-2"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8505 9.41291L8.61967 7.73979V4.3316C8.61967 3.98891 8.34266 3.71191 7.99998 3.71191C7.65729 3.71191 7.38029 3.98891 7.38029 4.3316V8.04966C7.38029 8.24485 7.47201 8.42892 7.62817 8.54541L10.1069 10.4044C10.2138 10.485 10.3441 10.5285 10.478 10.5284C10.667 10.5284 10.8529 10.4435 10.9744 10.2799C11.1802 10.0066 11.1244 9.61804 10.8505 9.41291Z"
                  fill="#3C72FC"
                />
                <path
                  d="M8 0C3.58853 0 0 3.58853 0 8C0 12.4115 3.58853 16 8 16C12.4115 16 16 12.4115 16 8C16 3.58853 12.4115 0 8 0ZM8 14.7607C4.27266 14.7607 1.23934 11.7273 1.23934 8C1.23934 4.27266 4.27266 1.23934 8 1.23934C11.728 1.23934 14.7607 4.27266 14.7607 8C14.7607 11.7273 11.7273 14.7607 8 14.7607Z"
                  fill="#3C72FC"
                />
              </svg>
              <span style={{ fontSize: "14px" }}>{open}</span>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .service-category li {
          transition: all 0.3s ease;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }
        .service-category li.active {
          background: rgba(60, 114, 252, 0.05);
          border-left: 3px solid #3c72fc;
        }
        .service-category li:hover {
          background: rgba(60, 114, 252, 0.03);
          padding-left: 20px;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetailsSidebar;
