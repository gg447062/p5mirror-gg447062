let dot;
let dots = [];
let hues = [220, 320, 125];
let switches = [1, -1];
let r, amount;
function setup() {
  createCanvas(800, 600);
  colorMode(HSL);
  noStroke();

  let r = 100;

  let amount = (width * r) / r;

  amount = 10;

  let d = 20;

  let x = width / 2;
  let y = height / 2;

  let xd = d;
  let yd = d / 2;

  let h = hues[round(random(2))];
  h = hues[2];

  // dot = new Dot(x, y, r, h, xd, yd, 10);

  for (let i = 0; i < amount; i++) {
    dots.push(new Dot(random(width), random(height), r, h, xd, yd, 10));
    
    xd *= -1;
    yd *= -1
  }
}

function draw() {
  background(250, 0, 20);

  dots.forEach(dot => dot.render())

  if (frameCount % 6 === 0) {
   dots.forEach(dot => dot.update())

  }
}

class Dot {
  constructor(x, y, r, h, xd, yd, e) {
    this.initX = x;
    this.initY = y;
    this.x = x;
    this.y = y;
    this.r = r;
    this.h = h;
    this.xd = xd;
    this.yd = yd;
    this.e = e;
    this.ed = this.e * 20;
    this.eSpace = 1;
    this.l = 50;
    this.prevX = [];
    this.prevY = [];
  }

  updatePoints() {
    this.prevX.unshift(this.x);
    if (this.prevX.length > this.ed) {
      this.prevX.pop();
    }
    this.prevY.unshift(this.y);
    if (this.prevY.length > this.ed) {
      this.prevY.pop();
    }
  }

  update() {
    if (this.x > width || this.x < 0) {
      this.xd *= -1;
    }
    if (this.y > height || this.y < 0) {
      this.yd *= -1;
    }

    this.x += this.xd;
    this.y += this.yd;

    this.updatePoints();
  }

  render() {
    fill(this.h, 100, this.l);
    circle(this.x, this.y, this.r);
    for (let i = 0; i < this.e; i++) {
      const curr = i * this.eSpace;
      const curry = i * this.eSpace + i;
      const x = this.prevX[curr];
      const y = this.prevY[curr];
      r = this.r - (i * this.r) / 10;
      if (x != undefined && y != undefined) {
        fill(this.h + i, 100, 50, 1 - i/10);
        circle(x, y, r);
      }
    }
  }
}
