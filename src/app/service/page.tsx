import ServiceTwo from "@/components/services/service-two";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "Service | SparkFuture",
};
const page = () => {
  return (
    <Wrapper>
      <ServiceTwo />
    </Wrapper>
  );
};

export default page;
