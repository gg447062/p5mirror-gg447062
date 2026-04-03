class Mover {
  constructor(x, y, vx,vy,m) {
    this.pos = createVector(x, y);
    // this.vel = p5.Vector.random2D();
    this.vel = createVector(vx, vy)
    this.vel.mult(0.6)
    this.r = sqrt(m) * 2;
    this.acc = createVector(0,0);
    this.mass = m
    this.reduce = -0.8
  }

  edges() {
    if (this.pos.x >= width - this.r) {
      this.pos.x = width - this.r;
      this.vel.x *= this.reduce;
    }
    if (this.pos.x < this.r) {
      this.pos.x = this.r;
      this.vel.x *= this.reduce;
    }
    if (this.pos.y > height - this.r) {
      this.pos.y = height - this.r;
      this.vel.y *= this.reduce;
    }
    if (this.pos.y < this.r) {
      this.pos.y = this.r;
      this.vel.y *= this.reduce;
    }
  }
  
   getStrength(mover, force) {
    const distanceSq = constrain(force.magSq(), 100, 1000);
    const G = 1
    const strength = G * (this.mass * mover.mass) / distanceSq;
    return strength
  }

  attract(mover) {
    const force = p5.Vector.sub(this.pos, mover.pos);
    const strength = this.getStrength(mover, force)
    force.setMag(strength)
    mover.applyForce(force);
  }
  
  drag () {
    const drag = this.vel.copy()
    drag.normalize().mult(-1)
    const speedSq = this.vel.magSq()
    const c = 0.02
    drag.setMag(c * speedSq * this.r)
    this.applyForce(drag)
  }
  
  friction () {
    const d = height - (this.pos.y + this.r)
    if (d < 1) {
      
    const friction = this.vel.copy()
    friction.normalize().mult(-1)
    
    const mu = 0.1
    const normal = this.mass
    
    friction.setMag(mu * normal)
    
    this.applyForce(friction)
    }
  }

  applyForce(force) {
    const f = p5.Vector.div(force,this.mass)
    this.acc.add(f)
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0,0)
  }

  show() {
    noStroke();
    fill(100, 100, 50);
    ellipse(this.pos.x, this.pos.y, this.r * 2);
  }
}
