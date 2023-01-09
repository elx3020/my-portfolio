import React from "react";

import "./style.sass";
import { ProjectDataT } from "../../types/globalTypes";
export default function ListItem(props: {data: ProjectDataT}) {
  const { project_url, description, project_Name } = props.data;

  return (
    <div data-scroll data-scroll-offset="25%" className="list-item">
      <h3>{project_Name}</h3>
      <p>{description}</p>
      <a href={project_url}>Try it</a>
    </div>
  );
}
