import React from "react";

export default function TitleParagraphComponent(props) {
  const { title, text, className } = props;
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  );
}
