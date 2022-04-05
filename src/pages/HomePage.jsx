// style
import "../styles/layoutStyles/layoutContainers.css";

// page components

import HeroContainer from "../components/Layout/HeroContainer";
import CardContainer from "../components/Layout/CardContainer";
import ColumnLayout from "../components/Layout/ColumnLayout";
import GoToTop from "../components/functionality/GoToTop";
import ListItem from "../components/List/ListItem";
// assets
import mePhoto from "../images/background-image.jpg";
import ProjectsData from "../data/project_data.json";

const HomePage = (props) => {
  // get data of projects
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  const { showcase_Data, list_home } = projectsData;

  const list = list_home.map((item) => {
    return (
      <ListItem
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
    <div>
      <HeroContainer
        title="Esteban Lasso"
        description="Programmer, web designer, ui/x-designer."
        isImage={true}
        backgroundImageAlt="me"
        backgroundImage={mePhoto}
      />
      <ColumnLayout className="section-text-column">
        <p className="paragraph-big">
          Create innovative solutions and push desing and efficcy to the limit
        </p>{" "}
        <p className="paragraph-small">Some other text</p>
      </ColumnLayout>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1>Showcase</h1>
          <CardContainer data={showcase_Data} />
        </div>
      </div>

      <div className="section-wrapper">
        <div className="container-wrapper">
          <h1>Recent Projects</h1>
          <div className="list-wrapper">{list}</div>
        </div>
      </div>

      <GoToTop />
    </div>
  );
};

export default HomePage;
