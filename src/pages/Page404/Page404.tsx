import React from "react";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import useCurrentPage from "../../hooks/useCurrentPage";

import "./style.sass";
export default function Page404(props: { handlePage: any; }) {
  const { handlePage } = props;

  useCurrentPage(handlePage);

  return (
    <div className="not-found-page" data-scroll-section>
      <HeroGenericComponent
        className="content-404"
        styleOptions={{fontSize: "45px"}}
        textContent="Error 404"
      >
        <p> Oops! The resource you are looking can not be found.</p>
      </HeroGenericComponent>
    </div>
  );
}
