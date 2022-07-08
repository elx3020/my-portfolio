import React from "react";

import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function CanvasComponent({
  draw,
  width,
  height,
  setToContainerSize,
  eventListener,
}) {
  const canvas = useRef();

  function tick() {
    const context = canvas.current.getContext("2d");
    draw(context);
    requestAnimationFrame(tick);
  }

  useEffect(() => {
    requestAnimationFrame(tick);

    if (eventListener) {
      canvas.current.addEventListener(
        eventListener.name,
        eventListener.callback
      );
    }
  }, []);

  const renderCanvas = setToContainerSize ? (
    <canvas ref={canvas} style={{ cursor: "none" }}>
      {" "}
    </canvas>
  ) : (
    <canvas
      style={{ cursor: "none" }}
      ref={canvas}
      width={width}
      height={height}
    ></canvas>
  );

  return renderCanvas;
}

CanvasComponent.propTypes = {
  draw: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number,
};

export default CanvasComponent;