import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import { mapToList } from "../../utils/utils";
import { Helmet } from "react-helmet";

import CardContainer from "../../components/Layout/CardContainer";
import window1 from "../../images/WorkPage/web-art-0.png";
import window2 from "../../images/WorkPage/web-art-1.png";
import window3 from "../../images/WorkPage/web-art-2.png";
import window4 from "../../images/WorkPage/web-art-3.png";

import useCurrentPage from "../../hooks/useCurrentPage";

import "./style.sass";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const WorkPage = (props) => {
  const { projectsData, handlePage } = props;

  const { showcase_Data, web_Proj_Large, web_Proj_Mini } = projectsData;

  // large projects

  const largeProjects = [mapToList(web_Proj_Large)];

  // mini projects

  const miniProjects = [mapToList(web_Proj_Mini)];

  // pass current Page

  useCurrentPage(handlePage);

  const pageContent = (
    <div className="work-page" data-scroll-section>
      <LoadingScreen className="loading-screen" />
      <Helmet>
        <title>Esteban Lasso | Work</title>
      </Helmet>
      <HeroGenericComponent
        className="generic-hero-wrapper"
        fontSize="clamp(2vw, 150px, 17vw)"
        text="My Work."
      >
        {/* <p>Explore all the projects I have</p> */}
      </HeroGenericComponent>

      <div className="work-section">
        <div className="header-workpage">
          <h1 data-scroll data-scroll-offset="200px">
            Web Development
          </h1>
          <div className="windows-wrapper">
            <div className="circle-background"></div>
            <div data-scroll data-scroll-speed="1.3">
              <img src={window1} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={window2} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="1.1">
              <img src={window3} alt="window" />
            </div>
            <div data-scroll data-scroll-speed="-1.2">
              <img src={window4} alt="window" />
            </div>
          </div>
        </div>

        <h2>Live Projects</h2>

        <CardContainer data={showcase_Data} />
      </div>

      <div className="work-section black" data-scroll data-scroll-offset="100%">
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
    </div>
  );

  return pageContent;
};
export default WorkPage;
