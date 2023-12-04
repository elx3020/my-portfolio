import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Card(props: {projectData: ProjectDataT}) {
  const {
    project_Name,
    image_Url,
    description,
    project_url,
    id,
    arr_Id,
  } = props.projectData;

  let navigate = useNavigate();

  const globalContext = useGlobalContext();
  const buttonText = globalContext.content.workPage.buttons.button_card

  const handleClick = () => {
    navigate(`projects/${arr_Id}/${id}`);
  };
  const projectLink = `/projects/${arr_Id}/${id}`;

  return (
    <div data-scroll data-scroll-offset="50%" className="card-showcase">
      <div className="image-container ">
        <img src={image_Url} alt={image_Url}></img>
        <div className="overlay"></div>
      </div>
      <div className="card-content">
        <h1>{project_Name}</h1>
        <p>{description}</p>
        <a href={project_url}>{buttonText}</a>
      </div>
    </div>
  );
}
