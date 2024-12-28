// styles
import { useEffect, useRef, useState } from "react";
import { cubeElement } from "../../animations/cubeElement";
import "../../styles/layoutStyles/layoutContainers.sass";
import { string_with_span_at } from "../../utils/utils";
import LetterSpanHolder from "../functional/LetterSpanHolder";
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

  const inWords = title.split(" ").map((word: string) => { return <LetterSpanHolder string={word} emphasisIndex={[0]} timeStepinS={1} /> });
  // hero section content

  return (
    <div className="hero-wrapper">
      {backgroundImageElement}
      {cubeElement}
      <p className="location-text">{location}</p>
      <div className="hero-content">
        {props.children}
        <h1 id="title">
          <LetterSpanHolder string={title} emphasisIndex={[0]} timeStepinS={1} />
        </h1>
        <p>
          {description}
        </p>
        <img className="flag-img" src={flag} alt="ecuadorian" />
      </div>
    </div>
  );
};

export default HeroContainer;
