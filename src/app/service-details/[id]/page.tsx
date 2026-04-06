import ServiceDetails from "@/components/services/service-details";
import Wrapper from "@/layouts/Wrapper";
import { service_details_data } from "@/data/ServiceData";
import { notFound } from "next/navigation";

// ✅ Next.js 15: params is a Promise
interface PageProps {
  params: Promise<{ id: string }>;
}

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(service_details_data).map((id) => ({
    id,
  }));
}

// ✅ Metadata — await params
export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const service = service_details_data[id];

  return {
    title: service
      ? `${service.title} | SparkFuture Technologies`
      : "Service Details | SparkFuture Technologies",
  };
}

// ✅ Page — await params
const Page = async ({ params }: PageProps) => {
  const { id } = await params;
  const service = service_details_data[id];

  if (!service) {
    notFound();
  }

  return (
    <Wrapper>
      <ServiceDetails serviceId={id} />
    </Wrapper>
  );
};

export default Page;
