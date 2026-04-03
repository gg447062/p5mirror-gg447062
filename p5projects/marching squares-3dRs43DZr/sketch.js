let res = 4;
let rows, cols;
let field = [];
let inc = 0.04;
let zOff = 0;
let cam;

function setup() {
  createCanvas(620,420);
  colorMode(HSL);
  cols = 1 + width / res;
  rows = 1 + height / res;

  for (let i = 0; i < cols; i += 1) {
    let r = [];
    for (let j = 0; j < rows; j += 1) {
      r.push(0);
    }
    field.push(r);
  }
 
}

function draw() {
  background(0,0,0);
  updatePoints();
  drawPoints();
  drawContour();
  zOff += 0.01;
  // noLoop()
}


function mousePressed () {
  fullscreen(true)
}

function updatePoints() {
  let yoff = 0;
  for (let i = 0; i < cols; i += 1) {
    yoff += inc;
    let xoff = 0;
    for (let j = 0; j < rows; j += 1) {
      field[i][j] = noise(xoff, yoff, zOff);
      xoff += inc;
    }
  }
}

function drawLine(v1, v2) {
  line(v1.x, v1.y, v2.x, v2.y);
}

function getState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d * 1;
}

function drawPoints() {
  for (let i = 0; i < cols; i += 1) {
    for (let j = 0; j < rows; j += 1) {
      const h = map(field[i][j], 0, 0.8, 50, 100);
      fill(200, 100, h);
      noStroke();
      rect(i * res, j * res, res, res);
    }
  }
}

function drawContour() {
  for (let i = 0; i < cols - 1; i += 1) {
    for (let j = 0; j < rows - 1; j += 1) {
      const x = i * res;
      const y = j * res;
      const a = createVector(x + res * 0.5, y);
      const b = createVector(x + res, y + res * 0.5);
      const c = createVector(x + res * 0.5, y + res);
      const d = createVector(x, y + res * 0.5);

      const state = getState(
        floor(field[i][j] * 2),
        floor(field[i + 1][j] * 2),
        floor(field[i + 1][j + 1] * 2),
        floor(field[i][j + 1] * 2)
      );

      stroke(50, 100, 50);
      strokeWeight(1);
      switch (state) {
        case 1:
          drawLine(c, d);
          break;
        case 2:
          drawLine(b, c);
          break;
        case 3:
          drawLine(b, d);
          break;
        case 4:
          drawLine(a, b);
          break;
        case 5:
          drawLine(a, d);
          drawLine(b, c);
          break;
        case 6:
          drawLine(a, c);
          break;
        case 7:
          drawLine(a, d);
          break;
        case 8:
          drawLine(a, d);
          break;
        case 9:
          drawLine(a, c);
          break;
        case 10:
          drawLine(a, b);
          drawLine(c, d);
          break;
        case 11:
          drawLine(a, b);
          break;
        case 12:
          drawLine(b, d);
          break;
        case 13:
          drawLine(b, c);
          break;
        case 14:
          drawLine(c, d);
          break;
        case 15:
          break;
      }
    }
  }
}
