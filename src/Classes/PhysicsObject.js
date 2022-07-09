const utils = require("../utils/utils");

const Vector2 = utils.Vector2;
const DrawLine = utils.DrawLine;

class PhysicsObject {
  constructor(x, y, gravity = false) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.useGravity = gravity;
    this.restitution = -1;
  }

  start() {}

  update(ctx, other) {
    if (!this.BoundaryConstrain(ctx) && this.useGravity) {
      this.velocity.y += 1;
    }

    if (this.useGravity) {
      this.drag();
    }

    this.show(ctx);

    this.collision(ctx, this, other);
    // console.log(this.velocity.length());

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  show(ctx) {}

  collision(ctx, thisObject, other) {
    for (let i = 0; i < other.length; i++) {
      if (thisObject === other[i]) continue;

      const normalVector = other[i].position.rest(this.position);

      //   DrawLine(
      //     ctx,
      //     this.position.x,
      //     this.position.y,
      //     this.position.x + normalVector.normalized().x * this.radius,
      //     this.position.y + normalVector.normalized().y * this.radius,
      //     "lightblue"
      //   );

      if (normalVector.length() <= this.radius * 2) {
        if (true) {
          //   console.log("hit start");

          //   other[i].color = "red";
          const relativeVelocity = this.velocity.rest(other[i].velocity);
          const collisionVelocity =
            this.restitution * relativeVelocity.dot(normalVector.normalized());

          this.velocity.x += collisionVelocity * normalVector.normalized().x;
          other[i].velocity.x -=
            collisionVelocity * normalVector.normalized().x;
          this.velocity.y += collisionVelocity * normalVector.normalized().y;
          other[i].velocity.y -=
            collisionVelocity * normalVector.normalized().y;

          this.position.x -=
            normalVector.normalized().x *
            (this.radius - normalVector.length() / 2);
          this.position.y -=
            normalVector.normalized().y *
            (this.radius - normalVector.length() / 2);

          //   this.position.x += this.radius - normalVector.length() / 2;
          //   this.position.y -= this.radius - normalVector.length() / 2;
        }

        // console.log("hit enters");
      } else {
        // if (other[i].color === "black") continue;
        // other[i].color = "black";
        // // console.log("hit finish");
      }
    }
  }

  drag() {
    this.velocity.x *= 0.985;
    this.velocity.y *= 0.985;
    if (this.velocity.length() < 1) {
      this.velocity.x *= this.velocity.x * this.velocity.x;
      this.velocity.y *= this.velocity.y * this.velocity.y;
    }
  }

  BoundaryConstrain(ctx) {
    if (
      this.position.x + this.radius > ctx.canvas.width ||
      this.position.x - this.radius < 0
    ) {
      this.velocity.x = -this.velocity.x * 0.9;
      if (this.position.x + this.radius > ctx.canvas.width) {
        this.position.x = ctx.canvas.width - this.radius;
      } else if (this.position.x - this.radius < 0) {
        this.position.x = this.radius;
      }
    }
    if (
      this.position.y + this.radius > ctx.canvas.height ||
      this.position.y - this.radius < 0
    ) {
      this.velocity.y = -this.velocity.y * 0.9;
      if (this.position.y + this.radius > ctx.canvas.height) {
        this.position.y = ctx.canvas.height - this.radius + 0.7;
      } else if (this.position.y - this.radius < 0) {
        this.position.y = this.radius;
      }
      return true;
    }
    return false;
  }
}

export default PhysicsObject;
