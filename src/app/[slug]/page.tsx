import React, { Suspense } from "react";
import Case_data from "@/data/CaseData";
import FooterOne from "@/layouts/footers/FooterOne";
import CaseDetailsArea from "@/components/pages/cases/case-details/CaseDetailsArea";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

// ✅ REQUIRED for static export
export async function generateStaticParams() {
  return Case_data.map((item) => ({
    slug: item.slug,
  }));
}

// ✅ Metadata
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;

  const project = Case_data.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | SparkFuture`,
  };
}

// ✅ Page
const PortfolioDetailsPage = async ({ params }: PageProps) => {
  const { slug } = params;

  const project = Case_data.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main>
        <Suspense
          fallback={<div className="text-center py-5">Loading Project...</div>}
        >
          <CaseDetailsArea project={project} />
        </Suspense>
      </main>
      <FooterOne />
    </>
  );
};

export default PortfolioDetailsPage;
