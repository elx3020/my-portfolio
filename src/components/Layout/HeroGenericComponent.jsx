import React from "react";

export default function HeroGenericComponent(props) {
  const { className, fontSize, text } = props;

  return (
    <div
      className={className}
      style={{ fontSize: fontSize, margin: "auto" }}
      data-scroll
    >
      <h1 style={{ fontSize: "inherit" }} data-scroll data-scroll-speed="1">
        {text}
      </h1>
      {props.children}
    </div>
  );
}
