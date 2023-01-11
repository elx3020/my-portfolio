import React from "react";
export default function TitleParagraphComponent(props: ComponentBT<'single'>) {
  const { title, textContent, className } = props;
  return (
    <div className={className} data-scroll>
      <h3>{title}</h3>
      <p>{textContent}</p>
    </div>
  );
}
