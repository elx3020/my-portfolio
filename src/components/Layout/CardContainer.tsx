import React, { useEffect } from "react";

// components
import Card from "../Card";

// styling

// data shape

// "project1": {
//     "project_name": "Web1",
//     "image_Url": "../images/me.png",
//     "project_description" : "Some sample text to fill up spaces"
// },

export default function CardContainer(props: { data: ProjectDataT[], maxSize: number }) {
  const { data } = props;

  const [offset, setOffset] = React.useState(0);
  const [lastClientX, setLastClientX] = React.useState(0);

  const containerRef = React.useRef<HTMLDivElement>(null);

  const cards = data.map((project_Data, index) => {
    return <Card key={project_Data.project_Name + '_' + index.toString()} projectData={project_Data} index={index} maxSize={props.maxSize} />;
  });

  const filteredArray = cards.filter((card, index) => { return index < props.maxSize });

  function touchStart(e: any) { }

  function touchEnd(e: any) {
    if (e.changedTouches.length > 0) {
      setLastClientX(0);
    }
  }

  function touchMove(e: any) {
    if (e.changedTouches.length > 0) {
      const clientX = e.changedTouches[0].clientX;

      if (lastClientX === 0) {
        setLastClientX(clientX);
        return;
      }
      const deltaX = clientX - lastClientX;
      setLastClientX(clientX);
      setOffset((offset + deltaX));
    }
  }


  return <div className="cards-wrapper" ref={containerRef} onTouchStart={touchStart} onTouchEnd={touchEnd} onTouchMove={touchMove}>{filteredArray}</div>;
}
