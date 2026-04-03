let cat;
let t = 0;
let pixelSize = 1;

function preload() {
  cat = loadImage("cat.jpg");
}

function setup() {
  createCanvas(cat.width, cat.height);
  noStroke()
}

function draw() {
  cat.loadPixels();
  pixelSize = floor(map(sin(t),-1,1,1,40));
  for (let x = 0; x < cat.width; x += pixelSize) {
    for (let y = 0; y < cat.height; y += pixelSize) {
      let i = (y * width + x) * 4;
      let r = cat.pixels[i + 0]; // r
      let g = cat.pixels[i + 1]; // g
      let b = cat.pixels[i + 2]--; // b

      fill(r, g, b);
      rect(x, y, pixelSize, pixelSize);
    }
  }
  t += 0.05;
  // cat.updatePixels();
  // image(cat, 0, 0);
}
