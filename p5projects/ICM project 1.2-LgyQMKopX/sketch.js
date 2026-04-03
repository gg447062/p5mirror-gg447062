let cam;
let xSize = 4; //"pixel" width;
let ySize = 4; // "pixel" height - bigger numbers make it more pixelated
let t = 0;
let img;
let src;

function preload() {
  img = loadImage("city.jpeg");
}

function setup() {
  noStroke();
  pixelDensity(1);
  cam = createCapture(VIDEO, makeCanvas);
  cam.hide();
  src =cam;
  // colorMode(HSB);
}

function makeCanvas() {
  createCanvas(cam.width, cam.height);
  img.resize(width, 0);
}

function draw() {
  background(20);

  src.loadPixels();
  for (let x = 0; x < src.width; x += xSize) {
    for (let y = 0; y < src.height; y += ySize) {
      let index = (x + y * width) * 4;
      let r = src.pixels[index];
      let g = src.pixels[index + 1];
      let b = src.pixels[index + 2];

      let bright = (r + g + b) / 3;
      let v = map(sin(t + bright * 0.01), -1, 1, 0, 255);

      let r2 = (r - v) % 255;
      let b2 = (v * 0.5 + g) % 255;
      let g2 = (v * 2.2 + b) % 255;

      fill(r2, b2, g2);

      rect(x, y, xSize, ySize);
    }
  }

  t += 0.01;
}
