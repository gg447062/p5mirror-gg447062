let cam;
let squeeze = 1;   
let pixelSize = 10;  
let t = 0;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  cam = createCapture(VIDEO);
  cam.size(width, height);
  cam.hide();
  noStroke();
  rectMode(CENTER);
}

function draw() {
  background(0);
  t += 0.01; 

  squeeze = map(mouseX, 0, width, 0.5, 2.0, true);
  pixelSize = int(map(mouseY, 0, height, 5, 40, true));

  cam.loadPixels();
  if (cam.pixels.length > 0) {
    for (let y = 0; y < height; y += pixelSize) {
      for (let x = 0; x < width; x += pixelSize) {
        let i = (y * width + x) * 4;
        let r = cam.pixels[i];
        let g = cam.pixels[i + 1];
        let b = cam.pixels[i + 2];
        let brightness = (r + g + b) / 3;

        let color1 = map(sin(t + brightness * 0.05), -1, 1, 0, 255);
        fill(
          (r + color1) % 255,
          (g + 0.4 * color1) % 255,
          (b + 1.2 * color1) % 255
        );

        push();
        translate(width / 2, height / 2);
        scale(squeeze, 1);
        rect(x - width / 2, y - height / 2, pixelSize, pixelSize);
        pop();
      }
    }
  }
}
