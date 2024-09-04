import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Carrier from "../components/Carrier";
import CarrierBenefits from "../components/CarrierBenefits";
import Tools from "../components/Tools";
const BlogDetailsInner = React.lazy(() =>
  import("../components/BlogDetailsInner")
);
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const BlogDetails = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          {/* <Breadcrumb title={"CARRIER"}  /> */}

          <Carrier />
          <CarrierBenefits />
          <Tools />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default BlogDetails;
