import React, { useEffect } from "react";

// components
import Card from "./Cards/Card3DCSS";

// styling

// data shape

// "project1": {
//     "project_name": "Web1",
//     "image_Url": "../images/me.png",
//     "project_description" : "Some sample text to fill up spaces"
// },

export default function CardContainer(props: { data: ProjectDataT[], maxSize: number }) {
  const { data } = props;


  const containerRef = React.useRef<HTMLDivElement>(null);

  const cards = data.map((project_Data, index) => {
    return <Card key={project_Data.project_Name + '_' + index.toString()} projectData={project_Data} index={index} maxSize={props.maxSize} />;
  });

  const filteredArray = cards.filter((card, index) => { return index < props.maxSize });



  function onWheel(e: any) {
    e.preventDefault();
    const container = containerRef.current!;
    container.scrollBy({ left: e.deltaY * 0.5, });
  }

  function onEnter(e: any) {
    e.preventDefault();
    document.body.style.overflow = 'hidden';
  }

  function onLeave(e: any) {
    e.preventDefault();
    document.body.style.overflow = 'auto';
  }

  // useEffect(() => {
  //   containerRef.current!.scrollLeft = offset;

  // }, [offset]);


  return <div className="cards-wrapper" ref={containerRef} onWheel={onWheel} onMouseEnter={onEnter} onMouseLeave={onLeave} >
    <div className="cards-content">
      <div style={{ minWidth: '45vw' }}></div>
      {filteredArray}
      <div style={{ minWidth: '50vw' }}></div>
    </div>
  </div>;
}
