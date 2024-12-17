import { Helmet } from "react-helmet";

// style
import "../../styles/layoutStyles/layoutContainers.sass";
import "./style.sass";
// page components

import HeroContainer from "../../components/Layout/HeroContainer";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import useCurrentPage from "../../hooks/useCurrentPage";

// TODO

// hero image elements
import { circle, triangle } from "../../utils/svgFigures";

import { useGlobalContext } from "../../hooks/useGlobalContext";

// assets
// import mePhoto from "../images/background-image.jpg";
const flagImage = "/images/flag.png";

const HomePage = (props: { children?: any, handlePage: (value: string) => void }) => {
  // assign currentPage
  useCurrentPage(props.handlePage);

  const globalContext = useGlobalContext();
  const homePageContent = globalContext.content.homePage;

  const pageContent = (
    <div className="page-content">
      <Helmet>
        <title>Esteban Lasso</title>
      </Helmet>
      <HeroContainer
        title="Esteban Lasso"
        description={homePageContent.heroContainer.description}
        isImage={false}
        backgroundImageAlt="me"
        location={homePageContent.heroContainer.location}
        flag={flagImage}
      // backgroundImage={mePhoto}
      >
        {circle}
      </HeroContainer>
      <section className="messages-section">
        <p className="paragraph-big">
          {homePageContent.firstSection.paragraph_big}
        </p>
        <p className="paragraph-small">
          {homePageContent.firstSection.paragraph_small}
          <span className="span-arrow">{triangle}</span>
        </p>
      </section>

    </div>
  );

  return pageContent;
};

export default HomePage;
