import React from "react";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function CanvasComponent({ draw, width, height, setToContainerSize }) {
  const canvas = useRef();
  const requestRef = useRef();

  function tick() {
    const context = canvas.current.getContext("2d");
    draw(context);
    requestAnimationFrame(tick);
  }

  useEffect(() => {
    requestAnimationFrame(tick);
  }, []);

  const renderCanvas = setToContainerSize ? (
    <canvas ref={canvas} style={{ width: "100%", height: "100%" }}>
      {" "}
    </canvas>
  ) : (
    <canvas ref={canvas} width={width} height={height}></canvas>
  );

  return renderCanvas;
}

CanvasComponent.propTypes = {
  draw: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

export default CanvasComponent;
