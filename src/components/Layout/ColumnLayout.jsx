import React from "react";

export default function ColumnLayout(props) {
  const { className } = props;

  return (
    <div className="container-wrapper">
      <div className={className}>{props.children}</div>
    </div>
  );
}
