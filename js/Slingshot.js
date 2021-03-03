class Slingshot {
  constructor(body1, pointB) {
    var option = {
      bodyA: body1,
      pointB: pointB,
      lenth: 15,
      restitution: 5,
      stiffness: 0.005,
    };
    this.chain = Constraint.create(option);
    World.add(world, this.chain);

    this.pointB = pointB;
  }
  display() {
    if (this.chain.bodyA) {
      var pointA = this.chain.bodyA.position;
      var pointB = this.pointB;

      strokeWeight(5);
      stroke("brown");
      line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
  }

  fly() {
    this.chain.bodyA = null;
  }
}
