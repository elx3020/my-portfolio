import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./style.sass";
export default function ListItem(props) {
  const { project_url, description, projectId, project_Name, arrId } = props;

  return (
    <div data-scroll data-scroll-offset="25%" className="list-item">
      <h3>{project_Name}</h3>
      <p>{description}</p>
      <a href={project_url}>Try it</a>
    </div>
  );
}
