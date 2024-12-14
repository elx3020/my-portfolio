import { Helmet } from "react-helmet";

// style
import "../../styles/layoutStyles/layoutContainers.sass";
import "./style.sass";
// page components

import HeroContainer from "../../components/Layout/HeroContainer";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import ListItem from "../../components/List/ListItem";
import useCurrentPage from "../../hooks/useCurrentPage";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// TODO

// hero image elements
import { triangle, circle, line } from "../../utils/svgFigures";

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
    <div className="Home-page"  >
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>Esteban Lasso</title>
      </Helmet>
      <div style={{ border: '1px solid white' }}>


        <HeroContainer
          title="Esteban Lasso"
          description={homePageContent.heroContainer.description}
          isImage={false}
          backgroundImageAlt="me"
          location={homePageContent.heroContainer.location}
          flag={flagImage}
        // backgroundImage={mePhoto}
        >
          {triangle}
          {circle}
        </HeroContainer>

        <section>
          <ColumnLayout className="messages-section">
            <p className="paragraph-big">
              {homePageContent.firstSection.paragraph_big}
            </p>
            <p className="paragraph-small">
              {homePageContent.firstSection.paragraph_small}
              <span className="span-arrow">{triangle}</span>
            </p>
          </ColumnLayout>
        </section>

      </div>
    </div>
  );

  return pageContent;
};

export default HomePage;
