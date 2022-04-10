import React from "react";

export default function TitleParagraphComponent(props) {
  const { title, text, className } = props;
  return (
    <div className={className}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
