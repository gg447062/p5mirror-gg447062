class Mover {
  constructor(x, y, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(1,-1)
    this.vel.mult(1)
    this.r = sqrt(m) * 2;
    this.acc = createVector(0,0);
    this.angle = 0
    this.mass = m
    this.reduce = -0.8
  }

  edges() {
    let mult = 3
    if (this.pos.x >= width + mult * this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.x < -mult * this.r) {
      this.pos.x = width + this.r;
     
    }
    if (this.pos.y > height + mult *  this.r) {
      this.pos.y = -this.r;
      // this.vel.y *= this.reduce;
    }
    if (this.pos.y < -mult * this.r) {
      this.pos.y = height + mult * this.r
    }
  }
  
  drag () {
    const drag = this.vel.copy()
    drag.normalize().mult(-1)
    const speedSq = this.vel.magSq()
    const c = 0.06
    drag.setMag(c * speedSq * this.r)
    this.applyForce(drag)
  }
  
  turn(amount) {
    this.angle += amount
  }
  
  thrust() {
    const thrust = p5.Vector.fromAngle(this.angle)
    thrust.setMag(4)
    this.applyForce(thrust)
  }

  applyForce(force) {
    const f = p5.Vector.div(force,this.mass)
    this.acc.add(f)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel);
    this.acc.set(0,0)
  }

  show() {
    noStroke();
    fill(100, 100, 50);
    translate(this.pos.x,this.pos.y)
    // rotate(this.angle)
    rotate(this.vel.heading())
    triangle(-this.r, -this.r/2, -this.r, this.r/2, this.r, 0)
  }
}
