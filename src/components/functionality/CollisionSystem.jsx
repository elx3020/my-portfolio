import React, { useRef } from "react";

import CanvasComponent from "./CanvasComponent";
import { Vector2, DrawLine } from "../../utils/utils";
import CircleParticle from "../../Classes/CircleParticle";
import { useState, useEffect } from "react";

function CollisionSystem() {
  const canvasSettings = useRef({
    width: window.innerWidth - 100,
    height: 800,
  });

  function InstanciateObjects(object, numberOfObjects) {
    let canvasObjects = [];
    const radius = 20;

    for (let i = 0; i < numberOfObjects; i++) {
      let x =
        Math.random() * (canvasSettings.current.width - radius * 2) + radius;
      let y =
        Math.random() * (canvasSettings.current.height - radius * 2) + radius;
      let spawnPosition = new Vector2(x, y);

      if (i !== 0) {
        for (let j = 0; j < canvasObjects.length; j++) {
          if (
            canvasObjects[j].position.rest(spawnPosition).length() <
            radius * 2 + 0.1
          ) {
            x =
              Math.random() * (canvasSettings.current.width - radius * 2) +
              radius;
            y =
              Math.random() * (canvasSettings.current.height - radius * 2) +
              radius;
            spawnPosition = new Vector2(x, y);
            j = -1;
          }
        }
      }

      const particle = new object(
        spawnPosition.x,
        spawnPosition.y,
        false,
        radius
      );
      particle.velocity.x = (Math.random() - 0.5) * 10;
      particle.velocity.y = (Math.random() - 0.5) * 10;

      canvasObjects.push(particle);
    }

    return canvasObjects;
  }

  const drawObjects = InstanciateObjects(CircleParticle, 250);

  function drawCollision(ctx) {
    // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    drawObjects.forEach((particle) => {
      particle.update(ctx, drawObjects);

      //   DrawLine(ctx, 0, 0, particle.position.x, particle.position.y, "red");
      //   DrawLine(
      //     ctx,
      //     particle.position.x,
      //     particle.position.y,
      //     particle.position.x + particle.velocity.x * 30,
      //     particle.position.y + particle.velocity.y * 30,
      //     "yellow"
      //   );
    });
  }

  useEffect(() => {}, []);

  return (
    <CanvasComponent
      draw={drawCollision}
      width={canvasSettings.current.width}
      height={canvasSettings.current.height}
    />
  );
}

export default CollisionSystem;
