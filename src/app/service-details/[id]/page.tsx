import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { service_details_data } from "@/data/ServiceData";

// 1. Fix generateMetadata by awaiting params
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // Wait for the params to resolve
  const service = service_details_data[id];

  return {
    title: service
      ? `${service.title} | Sparkfuture Technologies`
      : "Service Details | Sparkfuture Technologies",
  };
}

// 2. Fix the Page component by awaiting params
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params; // Wait for the params to resolve

  return (
    <Wrapper>
      {/* Pass the resolved id to your component */}
      <ServiceDetails serviceId={id} />
    </Wrapper>
  );
};

export default page;
