import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const {
    project_name,
    image_Url,
    project_description,
    url_project,
    id,
    arrId,
  } = props.projectData;

  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`projects/${arrId}/${id}`);
  };
  const projectLink = `/projects/${arrId}/${id}`;

  return (
    <div className="card-showcase">
      <div className="image-container ">
        <img src={image_Url} alt={image_Url}></img>
        <div className="overlay"></div>
      </div>
      <div>
        <h1>{project_name}</h1>
        <p>{project_description}</p>
        <a href={url_project}>Go to the site</a>
      </div>
    </div>
  );
}
