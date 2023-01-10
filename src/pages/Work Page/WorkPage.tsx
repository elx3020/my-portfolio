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


const imagesUrl = ['/images/WorkPage/web-art-0.png', '/images/WorkPage/web-art-1.png', '/images/WorkPage/web-art-2.png','/images/WorkPage/web-art-3.png','/images/WorkPage/circle.png','/images/WorkPage/cursor.png']

const computerIllustration = '/images/WorkPage/1computer-work.svg';
const WorkPage = (props) => {
  const { projectsData, handlePage } = props;

  // obtain array of data

  const { showcase_Data, web_Proj_Large, web_Proj_Mini, ui_projects } =
    projectsData;

  // large projects

  const largeProjects = [mapToList(web_Proj_Large)];

  // mini projects

  const miniProjects = [mapToList(web_Proj_Mini)];

  // ui projects

  const uiProjects = ui_projects.map((project, index) => {
    return <ImageCardComponent key={index} data={project} />;
  });

  // pass current Page
  useCurrentPage(handlePage);

  const pageContent = (
    <div className="work-page" data-scroll-section>
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>Esteban Lasso | Work</title>
      </Helmet>

      {/* Work - Page Hero */}
      <HeroGenericComponent
        className="generic-hero-wrapper work-page"
        styleOptions={{fontSize: "clamp(2vw, 150px, 17vw)"}}
        textContent="My Work."
        image_Url={computerIllustration}
      >
        {/* <p>Explore all the projects I have</p> */}
      </HeroGenericComponent>
      {/* Web Developer Work */}
      <div className="work-section">
        <div className="header-workpage">
          <h1 data-scroll data-scroll-offset="200px">
            Web Development
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

        <h2>Live Projects</h2>

        <CardContainer data={showcase_Data} />
      </div>

      <div className="work-section black" data-scroll data-scroll-offset="120%">
        <div className="large-projects">
          <h2>Large Projects</h2>
          <ColumnLayout className="projects-wrapper">
            {largeProjects[0]}
          </ColumnLayout>
        </div>

        <div className="mini-projects">
          <h2>Mini Projects</h2>
          <ColumnLayout className="projects-wrapper">
            {miniProjects[0]}
          </ColumnLayout>
        </div>
      </div>
      {/* UI Work */}

      <section className="ui-section">
        <header className="ui-head">
          <h1> UI PORTFOLIO</h1>
          <div className="header-image">
            <img className="ui-circle" src={imagesUrl[4]} alt="decorative" />
            <img className="cursor" src={imagesUrl[5]} alt="decorative" />
          </div>
        </header>
        <div className="container-ui">
          <h2>UI Interfaces</h2>
          <div className="ui-projects-wrapper">{uiProjects}</div>
        </div>
      </section>
    </div>
  );

  return pageContent;
};
export default WorkPage;
