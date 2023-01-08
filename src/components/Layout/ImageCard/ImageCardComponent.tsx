import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./style.sass";

function ImageCardComponent(props) {
  // status state
  const [status, setStatus] = useState("disable");

  const { arr_Id, id, project_Name, tumbnailUrl, imageAlt } = props.data;

  //active component

  useEffect(() => {
    if (arr_Id !== undefined) {
      setStatus("enable");
    }
  }, []);

  const navigate = useNavigate();

  const handleClick =
    status === "enable"
      ? () => {
          navigate(`/projects/${arr_Id}/${id}`);
        }
      : undefined;

  return (
    <div className="imageCard" onClick={handleClick}>
      <div data-scroll data-scroll-offset="50%" className="overlay">
        <h3>{project_Name}</h3>
      </div>

      <img src={tumbnailUrl} alt={imageAlt} />
    </div>
  );
}

export default ImageCardComponent;
