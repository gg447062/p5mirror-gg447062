let capture;
let pixelSize = 20

function setup() {
  noStroke();
  capture = createCapture(VIDEO, onLoad);
  capture.hide();
}

function onLoad() {
  createCanvas(capture.width, capture.height);
}

function draw() {

  capture.loadPixels();
  for (let x = 0; x < width; x += pixelSize) {
    for (let y = 0; y < height; y += pixelSize) {
      let i = (x + y * width) * 4;
      let c = [capture.pixels[i], 
               capture.pixels[i + 1], 
               capture.pixels[i + 2]];

      let b = brightness(c)

      if (b < 50) {
        fill(0);
      } else {
        fill(255);
      }
      rect(x, y, pixelSize, pixelSize);
    }
  }
  
}
