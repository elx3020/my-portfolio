import React from "react";
import { mapToList } from "../../utils/utils";
import { Helmet } from "react-helmet";


import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import CardContainer from "../../components/Layout/CardContainer";
import useCurrentPage from "../../hooks/useCurrentPage";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import ImageCardComponent from "../../components/Layout/ImageCard/ImageCardComponent";

// style document been use in this page
import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";


const imagesUrl = ['/images/WorkPage/web-art-0.png', '/images/WorkPage/web-art-1.png', '/images/WorkPage/web-art-2.png', '/images/WorkPage/web-art-3.png', '/images/WorkPage/circle.png', '/images/WorkPage/cursor.png']

const computerIllustration = '/images/WorkPage/1computer-work.svg';
const WorkPage = (props) => {
  const { handlePage } = props;

  const globalContext = useGlobalContext();
  const workPageContent = globalContext.content.workPage;


  const uiProjects = workPageContent.ui_projects.map((project, index) => {
    return <ImageCardComponent key={index} content={project} />;
  });

  // pass current Page
  useCurrentPage(handlePage);

  const pageContent = (
    <div className="work-page"  >
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>{workPageContent.helmet_Title}</title>
      </Helmet>

      {/* Work - Page Hero */}
      <HeroGenericComponent
        className="generic-hero-wrapper work-page"
        styleOptions={{ fontSize: "clamp(2vw, 150px, 17vw)" }}
        textContent={workPageContent.titles.title_1}
        image_Url={computerIllustration}
      >
        {/* <p>Explore all the projects I have</p> */}
      </HeroGenericComponent>
      {/* Web Developer Work */}
      <div className="work-section">
        <div className="header-workpage">
          <h1 data-scroll data-scroll-offset="200px">
            {workPageContent.titles.title_2}
          </h1>
          <div className="windows-wrapper">
            <div className="circle-background"></div>
            <div data-scroll data-scroll-speed="1.3">
              <img src={imagesUrl[0]} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={imagesUrl[1]} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="1.1">
              <img src={imagesUrl[2]} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={imagesUrl[3]} alt="window" />
            </div>
          </div>
        </div>

        <h2>{workPageContent.titles.title_3}</h2>

        <CardContainer data={workPageContent.showcase_Data} />
      </div>

      <div className="work-section black" data-scroll data-scroll-offset="120%">
        <div className="large-projects">
          <h2>{workPageContent.titles.title_4}</h2>
          <ColumnLayout className="projects-wrapper">
            {mapToList(workPageContent.web_Proj_Large)}
          </ColumnLayout>
        </div>

        <div className="mini-projects">
          <h2>{workPageContent.titles.title_5}</h2>
          <ColumnLayout className="projects-wrapper">
            {mapToList(workPageContent.mini_projects)}
          </ColumnLayout>
        </div>
      </div>
      {/* UI Work */}

      <section className="ui-section">
        <header className="ui-head">
          <h1>{workPageContent.titles.title_6}</h1>
          <div className="header-image">
            <img className="ui-circle" src={imagesUrl[4]} alt="decorative" />
            <img className="cursor" src={imagesUrl[5]} alt="decorative" />
          </div>
        </header>
        <div className="container-ui">
          <h2>{workPageContent.titles.title_7}</h2>
          <div className="ui-projects-wrapper">{uiProjects}</div>
        </div>
      </section>
    </div>
  );

  return pageContent;
};
export default WorkPage;
