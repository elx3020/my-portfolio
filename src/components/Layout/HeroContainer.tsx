// styles
import React from "react";
import { cubeElement } from "../../animations/cubeElement";
import "../../styles/layoutStyles/layoutContainers.sass";
const HeroContainer = (props: any) => {
  // props to pass

  const {
    isImage,
    backgroundImageAlt,
    backgroundImage,
    title = "Title",
    description = "This is the paragraph to insert text for your hero image",
    location,
    flag,
  } = props;

  // is necessary an image?

  const backgroundImageElement = isImage ? (
    <img
      src={backgroundImage}
      alt={backgroundImageAlt}
      className="hero-paralax-image"
    ></img>
  ) : null;

  // hero section content

  return (
    <div className="hero-wrapper">
      {backgroundImageElement}
      {cubeElement}
      <p className="location-text">{location}</p>
      <div className="hero-content">
        {props.children}
        <h1 id="title" data-scroll data-scroll-speed="1.5">
          {title}
        </h1>
        <p data-scroll data-scroll-speed="1.5">
          {description}
        </p>
        <img className="flag-img" src={flag} alt="ecuadorian" />
      </div>
    </div>
  );
};

export default HeroContainer;
