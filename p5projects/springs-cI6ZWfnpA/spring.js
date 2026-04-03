class Spring {
  constructor(k, restLength, a, b) {
    this.k = k;
    this.restLength = restLength;
    this.a = a;
    this.b = b;
    
  }

  update() {
    const force = p5.Vector.sub(this.b.pos, this.a.pos);
    const x = force.mag() - this.restLength;
    force.normalize()
    force.mult(this.k * x);
    this.a.applyForce(force);
    force.mult(-1)
    this.b.applyForce(force);
  }

  show() {
    strokeWeight(3)
    stroke(220, 100, 80);
    line(this.a.pos.x, this.a.pos.y, this.b.pos.x, this.b.pos.y);
  }
}
