const utils = require("../utils/utils");

const Vector2 = utils.Vector2;
const DrawLine = utils.DrawLine;

class PhysicsObject {
  constructor(x, y, gravity = false) {
    this.position = new Vector2(x, y);
    this.velocity = new Vector2(0, 0);
    this.useGravity = gravity;
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

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  show(ctx) {}

  collision(ctx, thisObject, other) {
    for (let i = 0; i < other.length; i++) {
      if (thisObject === other[i]) continue;
      const distanceVector = other[i].position.rest(this.position);

      if (distanceVector.length() < this.radius * 2) {
        if (this.velocity.length() === 0) return;
        const dotProduct = this.velocity
          .normalized()
          .dot(distanceVector.normalized());

        const collisionVelocity = new Vector2(
          this.velocity.x * dotProduct,
          this.velocity.y * dotProduct
        );

        const dotProductOther = other[i].velocity
          .normalized()
          .dot(distanceVector.normalized());

        const collisionVelocityOther = other[i].velocity
          .add(distanceVector)
          .normalized();

        console.log(
          collisionVelocity
            .normalized()
            .dot(collisionVelocityOther.normalized())
        );
        const instanceVelocity = new Vector2(this.velocity.x, this.velocity.y);
        // console.log({ x: collisionVelocity.x, y: collisionVelocity.y });
        // instanceVelocity.x = this.velocity.x + other[i].velocity.x + collisionVelocity.x;
        // other[i].velocity.x = this.velocity.x + collisionVelocity.x;
        // this.velocity.x = collisionVelocity.x;
        // this.velocity.y +=
        //   -collisionVelocity.y * this.velocity.length() * dotProduct;

        DrawLine(
          ctx,
          this.position.x,
          this.position.y,
          this.position.x + collisionVelocity.x * 5,
          this.position.y + collisionVelocity.y * 5,
          "white"
        );
      }
    }
  }

  drag() {
    this.velocity.x *= 0.995;
    this.velocity.y *= 0.98;
  }

  BoundaryConstrain(ctx) {
    if (
      this.position.x + this.radius > ctx.canvas.width ||
      this.position.x - this.radius < 0
    ) {
      this.velocity.x = -this.velocity.x;
    }
    if (
      this.position.y + this.radius > ctx.canvas.height ||
      this.position.y - this.radius < 0
    ) {
      this.velocity.y = -this.velocity.y;
      return true;
    }
    return false;
  }
}

export default PhysicsObject;
