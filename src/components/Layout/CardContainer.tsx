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

  const containerRef = React.useRef<HTMLDivElement>(null);

  const cards = data.map((project_Data, index) => {
    return <Card key={project_Data.project_Name + '_' + index.toString()} projectData={project_Data} index={index} maxSize={props.maxSize} />;
  });

  const filteredArray = cards.filter((card, index) => { return index < props.maxSize });



  function onWheel(e: any) {
    const container = containerRef.current!;
    container.scrollBy({ left: e.deltaY });


  }

  useEffect(() => {
    containerRef.current!.scrollLeft = offset;

  }, [offset]);


  return <div className="cards-wrapper" ref={containerRef} onWheel={onWheel} >
    <div className="cards-content">
      <div style={{ minWidth: '45vw' }}></div>
      {filteredArray}
      <div style={{ minWidth: '50vw' }}></div>
    </div>
  </div>;
}
