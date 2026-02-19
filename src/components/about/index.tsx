import FooterOne from "@/layouts/footers/FooterOne";

import Testimonial from "../homes/home-one/Testimonial";

import Process from "../homes/home-one/Process";
import Team from "../pages/teams/team";
import About from "./about";

const AboutPage = () => {
  return (
    <>
      <main>
        <About />

        <Process />
        <Team />
        <Testimonial />
      </main>
      <FooterOne />
    </>
  );
};

export default AboutPage;
