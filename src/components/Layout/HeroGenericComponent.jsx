import React from "react";

export default function HeroGenericComponent(props) {
  const { className, fontSize, text, figure } = props;

  return (
    <div className={className} style={{ fontSize: fontSize }} data-scroll>
      <h1 style={{ fontSize: "inherit" }} data-scroll data-scroll-speed="1.5">
        {text}
        <span style={{ display: "block" }}>{figure}</span>
      </h1>
      {props.children}
    </div>
  );
}
