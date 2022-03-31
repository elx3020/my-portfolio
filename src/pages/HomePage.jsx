// style
import "../styles/layoutStyles/layoutContainers.css";

// page components

import HeroContainer from "../components/Layout/HeroContainer";
import CardContainer from "../components/Layout/CardContainer";
import TwoColumnLayout from "../components/Layout/TwoColumnLayout";
// assets
import mePhoto from "../images/background-image.jpg";
import ProjectsData from "../data/project_data.json";

const HomePage = (props) => {
  // get data of projects
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  return (
    <div>
      <HeroContainer
        title="Esteban Lasso"
        description="Hello There"
        isImage={true}
        backgroundImageAlt="me"
        backgroundImage={mePhoto}
      />
      <TwoColumnLayout>
        <p className="paragraph-big">
          Create innovative solutions and push desing and efficcy to the limit
        </p>{" "}
        <p className="paragraph-small">Some other text</p>
      </TwoColumnLayout>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1>Showcase</h1>
          <CardContainer data={projectsData} />
        </div>
      </div>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1>Hello there</h1>
          <div className="list-wrapper">
            <div className="list-item">
              <img src="" alt="" />{" "}
              <p>Some text to fill the space for the list item</p>
            </div>
            <div className="list-item">
              <img src="" alt="" />{" "}
              <p>Some text to fill the space for the list item</p>
            </div>
            <div className="list-item">
              <img src="" alt="" />{" "}
              <p>Some text to fill the space for the list item</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
