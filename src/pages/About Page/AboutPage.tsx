// components

import ColumnLayout from "../../components/Layout/ColumnLayout";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import TitleParagraphComponent from "../../components/Layout/TitleParagraphComponent";

import { Helmet } from "react-helmet";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
// hooks
import useCurrentPage from "../../hooks/useCurrentPage";

// elements styles
import { downloadIcon } from "../../utils/icons";
import { triangleDown } from "../../utils/svgFigures";
import "./style.sass";

import { useGlobalContext } from "../../hooks/useGlobalContext";

const AboutPage = (props: { handlePage: (value: string) => void }) => {

  const globalContext = useGlobalContext();

  const pageData = globalContext.content.aboutPage;

  const cardsInfo = globalContext.content.aboutPage.cardsData.map((item, index) => {
    return (<TitleParagraphComponent
      className="cards-info"
      title={item.title}
      key={index}
      textContent={item.description}
    />)


  });

  // set as current page
  useCurrentPage(props.handlePage);

  return (
    <div className="about-page"  >
      <LoadingScreen className="loading-screen" />

      <Helmet>
        <title>Esteban Lasso | About</title>
      </Helmet>
      <HeroGenericComponent
        className="generic-hero-wrapper"
        styleOptions={{ fontSize: "clamp(2vw, 80px, 13vw)" }}
        textContent={pageData.heroText}
      >
        {triangleDown}
      </HeroGenericComponent>
      <div className="v-img-wrap">
        <div data-scroll data-scroll-speed="-1">
          <img src="/images/yo.jpg" alt="me at the beatch" />
        </div>
      </div>


      <div className="cards-section">
        <h1 data-scroll data-scroll-speed="1">
          {pageData.title_cards}
        </h1>
        <ColumnLayout className="column-layout">{cardsInfo}</ColumnLayout>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '3vw' }}>

        <div className="cv_button">
          <a href="files/CV_Esteban_2023.pdf" target="_blank">{pageData.button_text} <span> {downloadIcon} </span></a>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;
