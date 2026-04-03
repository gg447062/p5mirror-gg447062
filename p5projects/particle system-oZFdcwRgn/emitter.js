class Emitter {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.particles = [];
    this.gravity = createVector(0, 0.1);
  }

  emit() {
    for (let i = 0; i < 4; i++) {
      let particle = new Particle(this.pos.x, this.pos.y);
      this.particles.push(particle);
    }

    for (let particle of this.particles) {
      particle.applyForce(this.gravity);
      particle.update();
      particle.show();
    }
    this.particles = this.particles.filter((particle) => !particle.isDead());
  }
}
