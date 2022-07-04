import React from "react";

export default function HeroGenericComponent(props) {
  const { className, fontSize, text, figure } = props;

  return (
    <div className={className} style={{ fontSize: fontSize }} data-scroll>
      <img src={figure} alt="" />
      <h1 data-scroll data-scroll-speed="-1">
        {text}
      </h1>
      {props.children}
    </div>
  );
}
