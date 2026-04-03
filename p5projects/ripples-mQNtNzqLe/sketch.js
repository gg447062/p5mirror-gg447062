let emitters = [];
function setup() {
  createCanvas(400, 400);
  colorMode(HSL);

  for (let i = 0; i < 1; i++) {
    emitters.push(new Emitter(i * 200 + 100, i * 100 + 100, 30));
  }
}

function draw() {
  background(200, 100, 50);

  for (let emitter of emitters) {
    // emitter.show();
    emitter.emit();
  }
}

class Emitter {
  constructor(x, y, rv) {
    this.x = x;
    this.y = y;
    this.rv = rv;
    this.ripples = [];
  }

  addRipple() {
    this.ripples.push(new Ripple(this.rv, this.x, this.y));
  }

  emit() {
    if (frameCount % 60 == 0) {
      this.addRipple();
    }
    for (let r of this.ripples) {
      if (r.lifetime <= 0) {
        this.ripples.shift();
      }

      r.update();
      r.show();
    }
  }

  show() {
    noStroke();
    fill(100, 100, 50);
    ellipse(this.x, this.y, 20);
  }
}

class Ripple {
  constructor(v, x, y) {
    this.numVertex = v;
    this.spacing = TWO_PI / v;
    this.inc = 1;
    this.x = x;
    this.y = y;
    this.lifetime = 20;
    this.decay = 0.1;
    this.vertices = [];
  }

  update() {
    for (let v of this.vertices) {
      v.update();
    }
    this.lifetime -= this.decay;
  }

  makeVertices() {
    for (let i = 0; i < this.numVertex; i++) {
      let r = 10
      let angle = i * this.spacing;
      let y = sin(angle) * r;
      let x = cos(angle) * r;
      let vertex = createVector(x, y);
      this.vertices.push(new RVertex(vertex));
    }
  }

  show() {
    if (this.vertices.length == 0) {
      this.makeVertices();
    }
    push();
    translate(this.x, this.y);
    noFill();
    strokeWeight(3);
    stroke(200, 100, 50 + this.lifetime);
    beginShape();
    for (let v of this.vertices) {
      vertex(v.x, v.y);
    }

    endShape(CLOSE);
    pop();
  }
}

class RVertex {
  constructor(v) {
    this.x = v.x;
    this.y = v.y;
    this.vel = v;
    this.acc = v.copy().setMag(1);
  }

  update() {
    this.vel.add(this.acc);
    this.x = this.vel.x;
    this.y = this.vel.y;
  }
}
