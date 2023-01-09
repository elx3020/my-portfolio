import React from "react";

import "./style.scss";

export default function LoadingScreen(props: {className: string}) {
  const { className } = props;
  return <div className={className}></div>;
}
