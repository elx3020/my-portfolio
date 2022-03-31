import React from "react";

// components
import Card from "../Card";

// styling

// data shape

// "project1": {
//     "project_name": "Web1",
//     "image_Url": "../images/me.png",
//     "project_description" : "Some sample text to fill up spaces"
// },

export default function CardContainer(props) {
  const { data } = props;

  const cards = data.map((project_Data) => {
    return <Card key={project_Data.project_name} projectData={project_Data} />;
  });

  return <div className="cards-wrapper">{cards}</div>;
}
