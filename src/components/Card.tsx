import React from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Card(props: { projectData: ProjectDataT, index: number, maxSize: number }) {
  const { project_Name, image_Url, description, project_url, } =
    props.projectData;

  let navigate = useNavigate();

  const [isOpen, setIsOpen] = React.useState(false);
  const [cardClassName, setCardClassName] = React.useState('card-3d');
  const globalContext = useGlobalContext();
  const buttonText = globalContext.content.workPage.buttons.button_card;
  const cardRef = React.useRef<HTMLDivElement>(null);
  function show(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const el = cardRef.current!;
    if (isOpen) {
      el.style.zIndex = `${props.maxSize - props.index}`;
      setCardClassName('card-3d');
      setIsOpen(false);
    } else {
      el.style.zIndex = '20'
      setCardClassName('card-3d open');
      setIsOpen(true);
    }

  }

  // const handleClick = () => {
  //   navigate(`projects/${arr_Id}/${id}`);
  // };
  // const projectLink = `/projects/${arr_Id}/${id}`;

  return (
    <div className={cardClassName} style={{ left: `${props.index * 4.5 + 5}rem`, top: `${(Math.sin((props.index / props.maxSize) * Math.PI * 4)) + 12}rem`, zIndex: `${props.maxSize - props.index}`, }} onClick={show} ref={cardRef} >
      <div className="image-container ">
        <img src={image_Url} alt={image_Url}></img>
        <div className="overlay"></div>
      </div>
      <div className="card-content">
        <h1>{project_Name}</h1>
        <p>{description}</p>
        <a href={project_url} target="_blank" rel="noreferrer">{buttonText}</a>
      </div>
    </div>
  );
}
