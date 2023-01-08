import React from "react";

export default function ColumnLayout(props: {className: string, children?: JSX.Element[]}) {
  const { className } = props;

  return <div className={className}>{props.children}</div>;
}
