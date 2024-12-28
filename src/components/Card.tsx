import React, { useEffect } from "react";
import { useGlobalContext } from "../hooks/useGlobalContext";

export default function Card(props: { projectData: ProjectDataT, index: number, maxSize: number }) {
  const { project_Name, image_Url, description, project_url, } =
    props.projectData;

  const [isOpen, setIsOpen] = React.useState(false);
  const [cardClassName, setCardClassName] = React.useState('card-3d');
  const globalContext = useGlobalContext();
  const buttonText = globalContext.content.workPage.buttons.button_card;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const card_holder_ref = React.useRef<HTMLDivElement>(null);
  function show(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {


    const el = card_holder_ref.current!;
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

  useEffect(() => {
    const child = card_holder_ref.current!;
    const options = {
      root: null,
      rootMargin: '0% -60% 0% 0%',
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.8, 0.9, 1]
    }
    const el = card_holder_ref.current!;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0.8) {
          el.style.zIndex = `${props.maxSize - props.index}`;
          setCardClassName('card-3d')
        }
        else if (entry.intersectionRatio < 0.1) {
          el.style.zIndex = `${props.maxSize - props.index}`;
          setCardClassName('card-3d')
        } else if (entry.intersectionRect.left > 300) {
          setCardClassName('card-3d slide')
        }
      });

    }, options);
    observer.observe(child);

  }, []);

  return (
    <div className="card-holder" style={{ zIndex: `${props.maxSize - props.index}` }} ref={card_holder_ref}>
      <div className={cardClassName} onClick={show} ref={cardRef} >
        <div className="image-container">
          <img src={image_Url} alt={image_Url}></img>
          <div className="overlay"></div>
        </div>
        <div className="card-content">
          <h1>{project_Name}</h1>
          <p>{description}</p>

          <div>
            <button className="inline">
              See live
            </button>
            <a href={project_url} target="_blank" rel="noreferrer">{buttonText}</a>
          </div>
        </div>
      </div>
    </div>

  );
}
