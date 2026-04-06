import BreadCrumb from "@/components/common/BreadCrumb";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import ErrorArea from "./ErrorArea";

const NotFound = () => {
  return (
    <>
      <main>
        <BreadCrumb sub_title="Page Not Found" title="404" />
        <ErrorArea />
      </main>
    </>
  );
};

export default NotFound;
