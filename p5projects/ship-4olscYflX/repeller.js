class Repeller extends Attractor {
  constructor(x,y,m) {
    super(x,y,m)
  }
  
  repel(mover) {
    const force = p5.Vector.sub(this.pos, mover.pos)
    const strength = this.getStrength(mover, force) * -1
    force.setMag(strength)
    mover.applyForce(force)
  }
  
  show() {
    fill(50, 100, 50);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}