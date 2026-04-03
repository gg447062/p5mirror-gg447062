let tileSize = 20;
let off = 0;
let xoff = 0;
let yoff = 0;
let scl = 0.07;
let buffer = 10;

let xTO, yTO, xRO, yRO;
let w, h;

let speed = 5;

let tiles = [];

function setup() {
  noStroke();

  strokeWeight(4);
  createCanvas(600, 400);
  w = width / tileSize + buffer;
  h = height / tileSize + buffer;
}

function keyPressed() {
  if (key == "ArrowUp") yoff -= speed;
  if (key == "ArrowDown") yoff += speed;
  if (key == "ArrowLeft") xoff -= speed;
  if (key == "ArrowRight") xoff += speed;
}

function move() {
  if (keyIsDown(LEFT_ARROW)) xoff -= speed;
  if (keyIsDown(RIGHT_ARROW)) xoff += speed;
  if (keyIsDown(UP_ARROW)) yoff -= speed;
  if (keyIsDown(DOWN_ARROW)) yoff += speed;
}

function draw() {
  background(0, 120, 255);
  move();
  drawTiles();
}

function drawTiles() {
  // xRO = xoff % tileSize;
  // yRO = yoff % tileSize;
  xTO = floor(xoff / tileSize);
  yTO = floor(yoff / tileSize);
  // xTO = xoff
  // yTO = yoff

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      let c = getColors(i, j);
      tiles[i + j * w] = c;
    }
  }

  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      fill(tiles[i + j * w]);
      rect(
        (i - buffer / 2) * tileSize, // - xRO,
        (j - buffer / 2) * tileSize, // - yRO,
        tileSize,
        tileSize
      );
    }
  }
}

function getColors(x, y) {
  let v = noise((x + xTO) * scl, (y + yTO) * scl);
  // return color(255, 255, 255, v*255);
  if (v < 0.4) {
    return color(255, 255, 255);
  } else {
    return color(255, 255, 255, 0);
  }
}
