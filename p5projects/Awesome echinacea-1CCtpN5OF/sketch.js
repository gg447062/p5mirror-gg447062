let g;
let t = 0;

function setup() {
  createCanvas(400, 400);
  g = createGraphics(width, height);
  g.noFill();
}

function draw() {
  // background(224,150,240);
  background(181, 102, 186);
  g.clear();
  g.blendMode(BLEND);
  g.stroke(0, 120, 244);

  let gap = 1;
  let weight = 2;

  g.strokeCap(SQUARE);
  lineFillRect(0, 0, width, height, weight,gap, g);
  let y = sin(t);
  // g.blendMode(EXCLUSION);
  g.push();

  g.rotate(y);
  lineFillRectV(100,100,200,200, gap, weight, g);
  g.pop();
  t += 0.004;
  image(g, 0, 0);
}

function lineFillRect(xOff, yOff, w, h, weight, gap, graphics) {
  let xAmt = w / (weight + gap);
  let yAmt = h / (weight + gap);

  for (let j = 0; j < yAmt + 1; j++) {
    let x = xOff;
    let y = j * (weight + gap) + yOff;
    graphics.strokeWeight(weight);
    graphics.line(x, y, x + w, y);
  }
}

function lineFillRectV(xOff, yOff, w, h, weight, gap, graphics) {
  let xAmt = w / (weight + gap);
  let yAmt = h / (weight + gap);

  for (let j = 0; j < yAmt + 1; j++) {
    let x = j * (weight + gap) + xOff;
    let y = yOff;
    graphics.strokeWeight(weight);
    graphics.line(x, y, x, y + h);
  }
}
