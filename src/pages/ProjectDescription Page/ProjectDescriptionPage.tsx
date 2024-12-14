import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../../utils/utils";

// components

// hook
import useCurrentPage from "../../hooks/useCurrentPage";

// style
import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";

export default function ProjectDescriptionPage(props: { handlePage: (value: string) => void }) {
  // set data to the component render
  //  data is an object which is value is an array

  // obtain params
  const { arr_handle, project_handle } = useParams();

  const projectContent = useGlobalContext().content.workPage;
  // param match key name and select array of projects
  const projectArr = projectContent[arr_handle! as 'ui_projects'];
  // use project_handle to mach projectID so filter to proper data.

  const project = ProjectDetails<UIProjectData>(projectArr, project_handle as string);

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
              src={imageCollection![0]}
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
    <section className="project-description-page"  >
      {pageContent}
    </section>
  );
}
