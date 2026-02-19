import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";

interface Props {
  serviceId?: string;
}

const ServiceDetails = ({ serviceId }: Props) => {
  return (
    <>
      <main>
        <ServiceDetailsArea serviceId={serviceId || ""} />
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
