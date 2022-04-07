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

// assets
// import mePhoto from "../images/background-image.jpg";

const HomePage = (props) => {
  // state
  const [isActive, setIsActive] = useState(false);

  function handlePageStart() {
    setIsActive((prev) => {
      return (prev = !prev);
    });

    // console.log("In");
  }

  useEffect(() => {
    setTimeout(handlePageStart, 2000);
  }, []);

  // assign currentPage
  useCurrentPage(props.handlePage);

  // use locomotive effects
  useLocoScroll(true);

  // data

  const { projectsData } = props;

  const { showcase_Data, list_home } = projectsData;

  const list = list_home.map((item) => {
    return (
      <ListItem
        key={item.id}
        imageUrl={item.imageUrl}
        imageAlt={item.imageAlt}
        description={item.description}
        projectId={item.id}
        arrId={item.arr_Id}
        project_Name={item.project_Name}
      />
    );
  });

  return (
    <div className="Home-page" data-scroll-section>
      <HeroContainer
        title="Esteban Lasso"
        description="Programmer, web designer, ui/x-designer."
        isImage={true}
        backgroundImageAlt="me"
        // backgroundImage={mePhoto}
      />
      <ColumnLayout className="messages-section">
        <p data-scroll data-scroll-speed="1" className="paragraph-big">
          Creating innovative solutions and pushing the design and efficiency to
          the limit.
        </p>{" "}
        <p className="paragraph-small" data-scroll data-scroll-speed="1.5">
          Let's work together to put your project in the WWW. map.{" "}
        </p>
      </ColumnLayout>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1 data-scroll data-scroll-speed="1">
            Showcase
          </h1>
          <CardContainer data={showcase_Data} />
        </div>
      </div>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1>Recent Projects</h1>
          <div className="flex-column">
            <div className="list-wrapper">{list}</div>
            <Link to="work">See more work</Link>
          </div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
};

export default HomePage;
