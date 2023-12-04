import React from "react";

import "./style.sass";
import { useGlobalContext } from "../../hooks/useGlobalContext";
export default function ListItem(props: {data: ProjectDataT}) {
  const { project_url, description, project_Name } = props.data;

  const buttonText = useGlobalContext().content.workPage.buttons.button_list;

  return (
    <div data-scroll data-scroll-offset="25%" className="list-item">
      <h3>{project_Name}</h3>
      <p>{description}</p>
      <a href={project_url}>{buttonText}</a>
    </div>
  );
}
