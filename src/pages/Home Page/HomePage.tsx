import { Link } from "react-router-dom";

import { Helmet } from "react-helmet";
// style
import "../../styles/layoutStyles/layoutContainers.sass";
import "./style.sass";
// page components

import HeroContainer from "../../components/Layout/HeroContainer";
import CardContainer from "../../components/Layout/CardContainer";
import ColumnLayout from "../../components/Layout/ColumnLayout";
import ListItem from "../../components/List/ListItem";

import useCurrentPage from "../../hooks/useCurrentPage";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

// TODO

// hero image elements
import { triangle, circle, line } from "../../utils/svgFigures";

import { useGlobalContext } from "../../hooks/useGlobalContext";
import FullScreenSection from "../../components/Layout/FullScreenSection";

// assets
// import mePhoto from "../images/background-image.jpg";
const flagImage = "/images/flag.png";

const HomePage = (props: {children?: any,  handlePage: (value: string) => void }) => {
  // assign currentPage
  useCurrentPage(props.handlePage);

  const globalContext = useGlobalContext();

  const homePageContent = globalContext.content.homePage;

  const mProjectList = homePageContent.mini_projects.map((item) => {
    return (
      <ListItem
      data={{description: item.description, 
        id: item.id, 
        project_url: item.project_url,
        arr_Id: item.arr_Id,
        project_Name: item.project_Name}}
        key={item.id}
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
        description={homePageContent.heroContainer.description}
        isImage={false}
        backgroundImageAlt="me"
        line={line}
        location={homePageContent.heroContainer.location}
        flag={flagImage}
        // backgroundImage={mePhoto}
      >
        {triangle}
        {circle}
      </HeroContainer>

      <section className="home-sec-wrap" data-scroll data-scroll-offset="90%">
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

      <FullScreenSection >
      <h1 data-scroll data-scroll-speed="1">
            {homePageContent.sec_projects.title}
          </h1>
          <div className="two-column">
            <CardContainer data={homePageContent.showcase_Data} />
            <h2 data-scroll data-scroll-speed="1">
            {homePageContent.sec_projects.subtitle}
              <span className="span-arrow">{triangle}</span>
            </h2>
          </div>
      </FullScreenSection>


      <section className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            {homePageContent.sec_projects.content_1}
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
              <Link to="work">{homePageContent.sec_projects.end_Part}</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );

  return pageContent;
};

export default HomePage;
