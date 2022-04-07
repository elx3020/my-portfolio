import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../utils/utils";

// components

import GoToTop from "../components/functionality/GoToTop";

// hooks
import useLocoScroll from "../hooks/useLocoScroll";
import useCurrentPage from "../hooks/useCurrentPage";

// {
//     "arr_Id": "list_home",
//     "id": "project1",
//     "imageUrl": "/images/projects/",
//     "imageAlt": "an image description",
//     "description": "Here goes a brief description of the project that I want to show"
//

export default function ProjectDescriptionPage(props) {
  // set data to the component render
  const { projectsData } = props;

  const { arr_handle, project_handle } = useParams();

  const projectArr = projectsData[arr_handle];

  const project = ProjectDetails(projectArr, project_handle);

  const { arr_Id, id, imageUrl, imageAlt, description } = project;

  // use scroll animation

  useLocoScroll(true);

  // set page as currentPage

  useCurrentPage(props.handlePage);

  return (
    <div className="project-description-page" data-scroll-section>
      <h1>{arr_Id}</h1>
      <h2>{id}</h2>
      <p>{imageUrl}</p>
      <p>{imageAlt}</p>
      <p>{description}</p>
      <GoToTop />
    </div>
  );
}
