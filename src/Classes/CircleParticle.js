import PhysicsObject from "./PhysicsObject";

class CircleParticle extends PhysicsObject {
  constructor(x, y, gravity, radius) {
    super(x, y, gravity);
    this.radius = radius;
    this.color = "black";
  }

  show(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = this.color;
    // ctx.fill();
    ctx.closePath();
  }
}

export default CircleParticle;
