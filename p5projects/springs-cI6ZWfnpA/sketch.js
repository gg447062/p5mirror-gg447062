let gravity;
let particles = [];
let springs = [];
let spacing = 20;

function setup() {
  createCanvas(600, 600);
  colorMode(HSL);
  for (let i = 0; i < spacing; i++) {
    let particle = new Particle(300, i * spacing);
    particles.push(particle);
    if (i !== 0) {
      let a = particles[i]
      let b = particles[i-1]
      let spring = new Spring(0.01, spacing, a,b)
      springs.push(spring)
    }
  }
  particles[0].locked = true
  gravity = createVector(0, 0.01);
}

function draw() {
  background(200, 100, 50);
  let head = particles[0]
  let tail = particles[particles.length - 1]
  if (mouseIsPressed) {
    let tail = particles[particles.length - 1]
    tail.pos.set(mouseX, mouseY)
    tail.vel.set(0,0)
  }
  for (let spring of springs) {
    // spring.show()
    spring.update()
  }
  beginShape()
  
  vertex(head.pos.x, head.pos.y)
  for (let particle of particles) {
    // particle.show();
    tail.show()
    noFill()
    strokeWeight(2)
    stroke(100,100,80)
    curveVertex(particle.pos.x, particle.pos.y)
    particle.applyForce(gravity)
    particle.update()
  }
  vertex(tail.pos.x, tail.pos.y)
  endShape()
}
