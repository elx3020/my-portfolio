import React from "react";

import CanvasComponent from "./CanvasComponent";

function CanvasLearning() {
  const canvasWidth = window.innerWidth;

  let x = 300;

  function drawLesson1(context) {
    context.fillStyle = "rgba(0,255,0,0.5)";
    context.fillRect(100, 100, 100, 100);
    context.fillStyle = "rgba(200,55,0,0.5)";
    context.fillRect(300, 100, 100, 100);

    context.fillRect(500, 100, 100, 100);
    //   line
    context.beginPath();
    context.moveTo(50, 300);
    context.lineTo(300, 100);
    context.lineTo(400, 300);
    context.strokeStyle = "#fa345f";
    context.stroke();

    //   arc
    context.beginPath();
    context.arc(500, 500, 20, 0, 2 * Math.PI);
    context.stroke();

    for (let i = 0; i < 100; i++) {
      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight;

      context.beginPath();
      context.arc(xPosition, yPosition, 20, 0, 2 * Math.PI);
      context.stroke();
    }
  }

  function drawMoveLesson2(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.beginPath();
    ctx.arc(x, 300, 20, 0, Math.PI * 2);
    ctx.stroke();
    x += 1;
  }

  return (
    <CanvasComponent draw={drawMoveLesson2} width={canvasWidth} height={750} />
  );
}

export default CanvasLearning;
