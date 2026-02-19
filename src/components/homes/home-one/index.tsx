import FooterOne from "@/layouts/footers/FooterOne";

import Banner from "./Banner";
import Service from "./Service";
import About from "./About";
import Counter from "./Counter";
import Offer from "./Offer";

const HomeOne = () => {
  return (
    <>
      <main>
        <Banner />

        <About />
        <Counter />

        <Offer />

        <Service />
        <FooterOne />
      </main>
    </>
  );
};

export default HomeOne;
