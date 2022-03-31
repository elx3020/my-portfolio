import React from "react";

export default function HeroGenericComponent(props) {
  const { fontSize, text } = props;

  return (
    <div
      className="generic-hero-wrapper"
      style={{ fontSize: fontSize, margin: "auto" }}
    >
      <h1 style={{ fontSize: "inherit" }}>{text}</h1>
    </div>
  );
}
