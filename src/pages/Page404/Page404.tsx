import React from "react";
import useCurrentPage from "../../hooks/useCurrentPage";

import "./style.sass";
export default function Page404(props: { handlePage: any; }) {
  const { handlePage } = props;

  useCurrentPage(handlePage);

  return (
    <div className="not-found-page"  >
      <div className="content-404">
        <h1>Error 404</h1>
        <p> Oops! The resource you are looking can not be found.</p>
      </div>
    </div>
  );
}
