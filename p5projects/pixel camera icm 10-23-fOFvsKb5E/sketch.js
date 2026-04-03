let cam
let t = 0;
let pixelSize = 1;


function setup() {
  cam = createCapture(VIDEO,resizeCanv)
  cam.hide()
  noStroke()
}

function resizeCanv(){
   createCanvas(cam.width, cam.height);
}

function draw() {
  cam.loadPixels();
  pixelSize = floor(map(sin(t),-1,1,10,40));
  for (let x = 0; x < cam.width; x += pixelSize) {
    for (let y = 0; y < cam.height; y += pixelSize) {
      let i = (y * width + x) * 4;
      let r = cam.pixels[i + 0]; // r
      let g = cam.pixels[i + 1]; // g
      let b = cam.pixels[i + 2]--; // b

      fill(r, g, b);
      rect(x, y, pixelSize, pixelSize);
    }
  }
  t += 0.05;
}
