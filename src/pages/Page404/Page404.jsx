import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import "./style.sass";
export default function Page404() {
  return (
    <div className="not-found-page">
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
