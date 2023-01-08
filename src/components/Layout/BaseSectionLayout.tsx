import React from "react";

export default function BaseSectionLayout(props: any)  {
  return <section className="section-wrapper">{props.children}</section>;
}
BaseSectionLayout('f')