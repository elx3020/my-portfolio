import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import useCurrentPage from "../../hooks/useCurrentPage";

import "./style.sass";
export default function Page404(props) {
  const { handlePage } = props;

  useCurrentPage(handlePage);

  return (
    <div className="not-found-page" data-scroll-section>
      <HeroGenericComponent
        className="content-404"
        fontSize="45px"
        text="Error 404"
      >
        <p> Oops! The resource you are looking can not be found.</p>
      </HeroGenericComponent>
    </div>
  );
}
