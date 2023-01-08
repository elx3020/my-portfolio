import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
// style
import "../../styles/layoutStyles/layoutContainers.sass";
import "./style.sass";
// page components

import HeroContainer from "../../components/Layout/HeroContainer";
import CardContainer from "../../components/Layout/CardContainer";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import GoToTop from "../../components/functionality/GoToTop";
import ListItem from "../../components/List/ListItem";

import useCurrentPage from "../../hooks/useCurrentPage";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// TODO
//@ts-ignore
import flagImage from "../../images/flag.png";

// hero image elements
import { triangle, circle, line } from "../../utils/svgFigures";
import React from "react";
import { GlobalDataT } from "../../types/globalTypes";
// assets
// import mePhoto from "../images/background-image.jpg";

const HomePage = (props: {children?: any, projectsData: GlobalDataT, handlePage: (value: string) => void }) => {
  // assign currentPage
  useCurrentPage(props.handlePage);

 
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
      <Helmet>
        <title>Esteban Lasso</title>
      </Helmet>
      <HeroContainer
        title="Esteban Lasso"
        description="Programmer, web designer, UI/UX-designer."
        isImage={false}
        backgroundImageAlt="me"
        line={line}
        location="Living in Berlin - Germany"
        flag={flagImage}
        // backgroundImage={mePhoto}
      >
        {triangle}
        {circle}
      </HeroContainer>

      <section className="home-sec-wrap" data-scroll data-scroll-offset="90%">
        <ColumnLayout className="messages-section">
          <p className="paragraph-big">
            Creating innovative websites to attract the interest of clients.
            Building robust solutions that are scalable and functional.
          </p>
          <p className="paragraph-small">
            Let's work together to put your project in the World Wide Web.
            <span className="span-arrow">{triangle}</span>
          </p>
        </ColumnLayout>
      </section>

      <section className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            Showcase
          </h1>
          <div className="two-column">
            <CardContainer data={showcase_Data} />
            <h2 data-scroll data-scroll-speed="1">
              Take a look at some of my last projects
              <span className="span-arrow">{triangle}</span>
            </h2>
          </div>
        </div>
      </section>

      <section className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            Mini Projects
          </h1>
          <div className="mini-project-content">
            <h2 data-scroll data-scroll-speed="1">
              HTML <br /> CSS
              <br /> JAVASCRIPT
              <br /> REACT
              <span className="span-arrow">{triangle}</span>
            </h2>

            <div className="flex-column">
              {mProjectList}
              <Link to="work">See more work</Link>
            </div>
          </div>
        </div>
      </section>

      <GoToTop />
    </div>
  );

  return pageContent;
};

export default HomePage;
