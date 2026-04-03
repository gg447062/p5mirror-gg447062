class Attractor {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }
  
  getStrength(mover, force) {
    const distanceSq = constrain(force.magSq(), 250, 2500);
    const G = 5;
    const strength = G * (this.mass * mover.mass) / distanceSq;
    return strength
  }

  attract(mover) {
    const force = p5.Vector.sub(this.pos, mover.pos);
    const strength = this.getStrength(mover, force)
    force.setMag(strength)
    mover.applyForce(force);
  }

  show() {
    fill(20, 100, 50);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
