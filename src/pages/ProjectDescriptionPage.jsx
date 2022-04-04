import React from "react";
import { useParams } from "react-router-dom";
import { ProjectDetails } from "../utils/utils";
import ProjectsData from "../data/project_data.json";

// {
//     "arr_Id": "list_home",
//     "id": "project1",
//     "imageUrl": "/images/projects/",
//     "imageAlt": "an image description",
//     "description": "Here goes a brief description of the project that I want to show"
//   },

export default function ProjectDescriptionPage(props) {
  const projectsData = JSON.parse(JSON.stringify(ProjectsData));

  const { arr_handle, project_handle } = useParams();

  const projectArr = projectsData[arr_handle];

  const project = ProjectDetails(projectArr, project_handle);

  const { arr_Id, id, imageUrl, imageAlt, description } = project;

  return (
    <div>
      <h1>{arr_Id}</h1>
      <h2>{id}</h2>
      <p>{imageUrl}</p>
      <p>{imageAlt}</p>
      <p>{description}</p>
    </div>
  );
}
