balls = [];
let low, high, size

function setup() {
  colorMode(HSL);
  createCanvas(200, 150);
  pixelDensity(1);
  low = createSlider(0,360,100)
  high = createSlider(0,360,240)
  size = createSlider(10,200, 100)
  
  for (let i = 0; i < 10; i++) {
    let x = random(0, width);
    let y = random(0, height);
    balls.push(new Ball(x, y));
  }
}

function draw() {
  for (let ball of balls) {
    ball.update();
  }

  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let total = 0;
      for (let ball of balls) {
        const d = dist(ball.pos.x, ball.pos.y, i, j);
        const col = (size.value() * ball.r) / d;
        total += col;
      }

      let v = constrain(total, low.value(), high.value())
     
      let c = color(v, 100, 50);
      set(i, j, c);
    }
  }
  updatePixels();
}

class Ball {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D().mult(random(8,12));
    this.r = random(15,35);
  }

  update() {
    this.pos.add(this.vel);
    if (this.pos.x > width || this.pos.x < 0) {
      this.vel.mult(-1, 0);
    } else if (this.pos.y > height || this.pos.y < 0) {
      this.vel.mult(0, -1);
    }
  }

  show() {
    circle(this.pos.x, this.pos.y, this.r * 2);
  }
}
