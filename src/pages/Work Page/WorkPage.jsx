import { mapToList } from "../../utils/utils";
import { Helmet } from "react-helmet";

// art images use directly in the work page
import window1 from "../../images/WorkPage/web-art-0.png";
import window2 from "../../images/WorkPage/web-art-1.png";
import window3 from "../../images/WorkPage/web-art-2.png";
import window4 from "../../images/WorkPage/web-art-3.png";
import uiCircle from "../../images/WorkPage/circle.png";
import uiCursor from "../../images/WorkPage/cursor.png";
import computerIllustration from "../../images/WorkPage/1computer-work.svg";
//  components been use in this page
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import CardContainer from "../../components/Layout/CardContainer";
import useCurrentPage from "../../hooks/useCurrentPage";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import HeroGenericComponent from "../../components/Layout/HeroGenericComponent";
import ImageCardComponent from "../../components/Layout/ImageCard/ImageCardComponent";

// style document been use in this page
import "./style.sass";

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

  const uiProjects = ui_projects.map((project) => {
    return <ImageCardComponent key={project.id} data={project} />;
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
        fontSize="clamp(2vw, 150px, 17vw)"
        text="My Work."
        figure={computerIllustration}
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
            <img className="ui-circle" src={uiCircle} alt="decorative" />
            <img className="cursor" src={uiCursor} alt="decorative" />
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
