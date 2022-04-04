import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListItem(props) {
  const { imageUrl, description, imageAlt, projectId, project_Name, arrId } =
    props;
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(`projects/${arrId}/${projectId}`);
  };

  return (
    <div className="list-item" onClick={handleClick}>
      <div className="img-list-container">
        <img className="img-list" src={imageUrl} alt={imageAlt} />
      </div>

      <div>
        <h2>{project_Name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
