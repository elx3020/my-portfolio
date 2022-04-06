import React from "react";
export default function Card(props) {
  const { project_name, image_Url, project_description, url_project } =
    props.projectData;

  return (
    <div className="card-showcase">
      <a href={url_project}>
        <img src={image_Url} alt={image_Url}></img>
        <div className="overlay"></div>
      </a>
      <div>
        <h1>{project_name}</h1>
        <p>{project_description}</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}
