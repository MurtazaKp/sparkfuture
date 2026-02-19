import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ServiceArea from "./ServiceArea";
import About from "@/components/homes/home-one/About";
import Counter from "@/components/homes/home-one/Counter";

const ServiceOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <BreadCrumb sub_title="IT Solutions" title="IT Solutions" />
        <ServiceArea />
        <About />
        <Counter />
      </main>
      <FooterOne />
    </>
  );
};

export default ServiceOne;
