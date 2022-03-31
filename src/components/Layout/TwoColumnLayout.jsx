import React from "react";

export default function TwoColumnLayout(props) {
  return (
    <div className="container-wrapper">
      <div className="section-text-column">{props.children}</div>
    </div>
  );
}
