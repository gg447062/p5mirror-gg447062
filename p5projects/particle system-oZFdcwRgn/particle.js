class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(3))
    this.acc = createVector(0, 0);
    this.size = 4;
    this.color = color(100, 100, 50);
    this.lifetime = 1;
    this.mass = 1;
    this.shape = ellipse(this.pos.x, this.pos.y, this.size * 2);
    
    // this.transparency
  }
  
  isDead() {
    return (this.lifetime < 0)
  }

  edges() {
    if (this.pos.y + this.size > height) {
      this.pos.y = height - this.size;
      this.vel.y *= -1;
    }
  }

  applyForce(force) {
    const f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  update() {
    this.vel.mult(0.99);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.lifetime -= 0.01;
  }

  show() {
    noStroke();
    fill(160, 80, 50, this.lifetime);
    // ellipse(this.pos.x, this.pos.y, this.size * 2);
    rect(this.pos.x, this.pos.y, this.size, this.size * 2)
   
  }
}
