import React from "react";

import CanvasComponent from "./CanvasComponent";
import { useEffect, useRef } from "react";

function CanvasLearning() {
  let canvasWidth = useRef(window.innerWidth);

  function Vector2(x, y) {
    this.x = x;
    this.y = y;

    this.add = function (vector) {
      const x = this.x + vector.x;
      const y = this.y + vector.y;
      return new Vector2(x, y);
    };
    this.rest = function (vector) {
      const x = this.x - vector.x;
      const y = this.y - vector.y;
      return new Vector2(x, y);
    };
    this.dot = function (vector) {
      const x = this.x * vector.x;
      const y = this.y * vector.y;
      return new Vector2(x, y);
    };
    this.length = function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    };

    this.isEqual = function (vector) {
      if (this.x === vector.x && this.y === vector.y) {
        return true;
      }
      return false;
    };
  }

  function MouseInput(x, y) {
    this.position = new Vector2(x, y);
  }

  const mouseInput = new MouseInput(0, 0);

  const mouseEvent = {
    name: "mousemove",
    callback: function (e) {
      const rect = e.target.getBoundingClientRect();
      mouseInput.position.x = e.clientX - rect.left;
      mouseInput.position.y = e.clientY - rect.top;
    },
  };

  function Circle(x, y, dx, dy, radius) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(dx, dy);
    this.desiredVelocity = new Vector2(dx, dy);
    this.radius = radius;

    this.draw = function (ctx) {
      // draw circle
      ctx.beginPath();
      // arc function use to create circle
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = "red";
      // nothing is show if stroke method is not called
      ctx.stroke();
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    };

    this.growCircle = function () {
      if (
        this.position.rest(mouseInput.position).length() < 100 &&
        this.radius < 60
      ) {
        this.radius += 4;
      } else if (
        this.position.rest(mouseInput.position).length() > 100 &&
        this.radius > 10
      ) {
        this.radius -= 0.5;
      }
    };

    let acceleration = 0.5;
    this.cursorPushCircle = function () {
      const vectorDirection = this.position.rest(mouseInput.position);
      if (vectorDirection.length() < 100) {
        this.desiredVelocity.x =
          (vectorDirection.x / vectorDirection.length()) *
          this.desiredVelocity.length();
        this.desiredVelocity.y =
          (vectorDirection.y / vectorDirection.length()) *
          this.desiredVelocity.length();
      }
    };

    this.update = function (ctx) {
      this.draw(ctx);

      if (
        this.position.x + this.radius > ctx.canvas.width ||
        this.position.x - this.radius < 0
      ) {
        this.desiredVelocity.x = -this.desiredVelocity.x;
      }
      if (
        this.position.y + this.radius > ctx.canvas.height ||
        this.position.y - this.radius < 0
      ) {
        this.desiredVelocity.y = -this.desiredVelocity.y;
      }
      this.velocity = this.desiredVelocity;

      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      // interactivity
      // this.growCircle();
      this.cursorPushCircle();
    };
  }

  function CircleMouse(x, y, radius) {
    this.position = new Vector2(x, y);
    this.radius = radius;

    this.draw = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.strokeStyle = "blue";
      ctx.stroke();
      ctx.fillStyle = "green";
      ctx.fill();
      this.position.x = mouseInput.position.x;
      this.position.y = mouseInput.position.y;
    };
  }

  const gravityValue = 1;

  function CircleGravity(x, y, dx, dy, radius) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(dx, dy);
    this.radius = radius;

    this.update = function (ctx) {
      this.boudaryConstrain(ctx);

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      this.draw(ctx);
    };

    this.draw = function (ctx) {
      ctx.beginPath();
      ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "white";
      ctx.fill();
      ctx.closePath();
    };

    this.boudaryConstrain = function (ctx) {
      if (this.position.y + this.radius > ctx.canvas.height) {
        if (this.velocity.y === 0) {
          return;
        }

        if (this.velocity.length() < 1) {
          this.velocity.y = 0;
        }
        this.velocity.y = -this.velocity.y;
      } else {
        // friction
        this.velocity.y *= 0.985;
        // gravity
        this.velocity.y += 0.3;
      }

      if (
        this.position.x + this.radius > ctx.canvas.width ||
        this.position.x - this.radius < 0
      ) {
        if (this.velocity.x === 0) {
          return;
        }

        if (this.velocity.length() < 2) {
          this.velocity.x = 0;
        }
        this.velocity.x = -this.velocity.x;
      } else {
        // friction
        this.velocity.x *= 0.985;
      }
    };
  }

  function InstanciateObject(object, number) {
    let circleArray = [];
    for (let i = 0; i <= number; i++) {
      const radius = Math.random() * 25 + 1;
      let x = radius + Math.random() * (canvasWidth.current - radius * 2);
      let y = radius + Math.random() * (750 - radius * 2);
      let dx = (Math.random() - 0.5) * 10;
      let dy = (Math.random() - 0.5) * 10;
      circleArray.push(new object(x, y, dx, dy, radius));
    }
    return circleArray;
  }

  const circleArray = InstanciateObject(Circle, 100);

  const circleMouse = new CircleMouse(100, 100, 75);

  const circlePhysics = new CircleGravity(400, 400, 0, 0, 25);

  const circlePhysiscArray = InstanciateObject(CircleGravity, 100);

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
    // clear canvas each update
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 1; i < circleArray.length; i++) {
      circleArray[i].draw(ctx);
    }
    circleMouse.draw(ctx);
  }

  function drawGravityLesson3(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    for (let i = 0; i < circlePhysiscArray.length; i++) {
      circlePhysiscArray[i].update(ctx);
    }
  }

  function RenderCollisionBall(ctx) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  }

  // useEffect(() => {
  //   window.addEventListener("resize", function () {
  //     canvasWidth.current = window.innerWidth;
  //   });
  // }, []);

  return (
    <CanvasComponent
      draw={drawGravityLesson3}
      width={canvasWidth.current}
      height={750}
      eventListener={mouseEvent}
    />
  );
}

export default CanvasLearning;
