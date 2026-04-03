let cam;
let xSize = 8; //"pixel" width;
let ySize = 4; // "pixel" height - bigger numbers make it more pixelated
let t = 0; // time
let gOff = -30; // how much the second differs from the first
let bOff = -30; // how much the third color differs from the second
let timeMult = 0.005; // how fast sketch cycles throught the color wheel
let hueMin = 0; // sets the bottom of the range of hues
let hueMax = 30; // sets the top of the range of hues
let a = 0;
let bCutoff1 = 50; // the cutoff of the first brightness threshold
let bCutoff2 = 250 // the cutoff of the second brightness threshold

function preload() {
  // img = loadImage("city.jpeg");
}

function setup() {
  noStroke();
  pixelDensity(1);
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();
  colorMode(HSB, 360, 100, 100, 100);
}

// function makeCanvas() {
//   createCanvas(cam.width, cam.height);
// }

function draw() {
  background(20, 0, 100);
  image(cam, 0, 0);
  filter(GRAY);

  cam.loadPixels();
  hueMax = floor(map(sin(t), -1, 1, 0, 360));
  hueMin = floor(map(sin(t), -1, 1, 360, 0));

  for (let x = 0; x < cam.width + 1; x += xSize) {
    for (let y = 0; y < cam.height + 1; y += ySize) {
      let index = (x + y * width) * 4;
      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];

      let bright = (r + g + b) / 3;

      let r2 = map(bright, 0, 255, hueMin, hueMax);
 
      let g2 = (r2 + gOff) % 360;
      let b2 = (g2 + bOff) % 360;

      let f;

      if (bright < bCutoff1) {
        f = color(r2, 60, 90, a);
      } else if (bright < bCutoff2) {
        f = color(g2, 60, 80, a);
      } else {
        f = color(b2, 60, 70, a);
      }
      fill(f);
      rect(x, y, xSize, ySize);
    }
  }
  t += 0.01;
  a = map(sin(t), -1, 1, 50, 80);
}
