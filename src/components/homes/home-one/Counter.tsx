import Count from "@/components/common/Count";
import Image, { StaticImageData } from "next/image";

import icon_1 from "@/assets/images/icon/counter-icon1.png";
import icon_2 from "@/assets/images/icon/counter-icon2.png";
import icon_3 from "@/assets/images/icon/counter-icon3.png";
import shape_1 from "@/assets/images/shape/counnter-bg-shape.png";

interface DataType {
  id: number;
  icon: StaticImageData;
  count: number;
  title: string;
}

const counter_data: DataType[] = [
  {
    id: 1,
    icon: icon_1,
    count: 20,
    title: "Satisfied Clients",
  },
  {
    id: 2,
    icon: icon_2,
    count: 25,
    title: "Finished Projects",
  },
  {
    id: 3,
    icon: icon_3,
    count: 30,
    title: "Skilled Experts",
  },
];

const Counter = () => {
  return (
    <section className="counter-area pb-100">
      <div className="container">
        <div className="counter__wrp gradient-bg">
          <div
            className="counter__shape wow slideInRight"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <Image src={shape_1} alt="shape" />
          </div>
          {counter_data.map((item) => (
            <div
              key={item.id}
              className="counter__item wow bounceInUp"
              data-wow-delay="00ms"
              data-wow-duration="1000ms"
            >
              <Image src={item.icon} alt="icon" />
              <div className="content">
                <h3>
                  <span className="count">
                    <Count number={item.count} />
                  </span>
                  +
                </h3>
                <p className="text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Counter;
