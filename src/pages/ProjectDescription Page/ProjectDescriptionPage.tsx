import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../../utils/utils";

// components
import GoToTop from "../../components/functionality/GoToTop";

// hook
import useCurrentPage from "../../hooks/useCurrentPage";

// style
import "./style.sass";

export default function ProjectDescriptionPage(props: {projectsData: GlobalDataT, handlePage: (value: string) => void}) {
  // set data to the component render
  //  data is an object which is value is an array
  const { projectsData } = props;

  // obtain params
  const { arr_handle, project_handle } = useParams();

  // param match key name and select array of projects
// @ts-ignore
  const projectArr = projectsData[arr_handle];
  // use project_handle to mach projectID so filter to proper data.

  const project = ProjectDetails<UIProjectDataT>(projectArr, project_handle as string);

  let pageContent;

  switch (arr_handle) {
    case "ui_projects":
      const { project_Name, description, imageCollection } = project;

      pageContent = (
        <div>
          <article className="project-content">
            <h1 data-scroll data-scroll-speed="1">
              {project_Name}
            </h1>
            <p>{description}</p>
          </article>
          <div className="img-container-dp">
            <img
              data-scroll
              data-scroll-speed="-1"
              src={imageCollection[0]}
              alt="somealt"
            />
          </div>
        </div>
      );

      break;

    default:
      break;
  }

  // set page as currentPage

  useCurrentPage(props.handlePage);

  return (
    <section className="project-description-page" data-scroll-section>
      {pageContent}
      <GoToTop />
    </section>
  );
}
