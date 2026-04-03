class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.mass = 1;
    this.locked = false;
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    if (!this.locked) {
      this.vel.mult(0.99);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  }

  show() {
    noStroke();
    fill(100, 100, 50);
    ellipse(this.pos.x, this.pos.y, 12);
  }
}
