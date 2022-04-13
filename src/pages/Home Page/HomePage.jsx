import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
// style
import "../../styles/layoutStyles/layoutContainers.sass";
import "./style.sass";
// page components

import HeroContainer from "../../components/Layout/HeroContainer";
import CardContainer from "../../components/Layout/CardContainer";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import GoToTop from "../../components/functionality/GoToTop";
import ListItem from "../../components/List/ListItem";
import useLocoScroll from "../../hooks/useLocoScroll";
import useCurrentPage from "../../hooks/useCurrentPage";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

//

import flagImage from "../../images/flag.png";

// hero image elements
import { triangle, circle, line } from "../../utils/svgFigures";
// assets
// import mePhoto from "../images/background-image.jpg";

const HomePage = (props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true);
    }, 200);
    return () => {
      setIsActive(false);
    };
  }, []);

  // assign currentPage
  useCurrentPage(props.handlePage);

  // props.isLoading(); //TODO this is not working correctly

  // use locomotive effects
  // useLocoScroll(isActive);

  // data

  const { projectsData } = props;

  const { showcase_Data, mini_projects } = projectsData;

  const mProjectList = mini_projects.map((item) => {
    return (
      <ListItem
        key={item.id}
        description={item.description}
        projectId={item.id}
        arrId={item.arr_Id}
        project_url={item.project_url}
        project_Name={item.project_Name}
      />
    );
  });

  const pageContent = (
    <div className="Home-page" data-scroll-section>
      <LoadingScreen className="loading-screen" />
      <HeroContainer
        title="Esteban Lasso"
        description="Programmer, web designer, UI/UX-designer."
        isImage={true}
        backgroundImageAlt="me"
        line={line}
        location="Living in Berlin - Germany"
        flag={flagImage}
        // backgroundImage={mePhoto}
      >
        {triangle}
        {circle}
      </HeroContainer>

      <div className="home-sec-wrap" data-scroll data-scroll-offset="90%">
        <ColumnLayout className="messages-section">
          <p data-scroll data-scroll-speed="1" className="paragraph-big">
            Creating innovative websites to attract the interest of clients.
            Pushing the design into new frontiers.
          </p>{" "}
          <p className="paragraph-small" data-scroll data-scroll-speed="1.5">
            Let's work together to put your project in the World Wide Web.{" "}
          </p>
        </ColumnLayout>
      </div>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            Showcase
          </h1>
          <div className="two-column">
            <CardContainer data={showcase_Data} />
            <h2 data-scroll data-scroll-speed="1">
              Take a look at some of my last projects
            </h2>
          </div>
        </div>
      </div>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            Mini Projects
          </h1>
          <div className="mini-project-content">
            <div data-scroll data-scroll-speed="1">
              <h2>HTML CSS JAVASCRIPT REACT</h2>
            </div>
            <div className="flex-column">
              {mProjectList}
              <Link to="work">See more work</Link>
            </div>
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );

  return pageContent;
};

export default HomePage;
