let cam;
let vScale = 1;
let scans = []
let offset = 0
let slitWidth = 4

function setup() {
  createCanvas(400, 200);
  pixelDensity(1);
  cam = createCapture(VIDEO);
  cam.size(width, height).hide()
 background(0,255,0);
}

function draw() {
  // background(0,255,0);
  // drawImageWithSquares()
  slitScanCopy()
}

function slitScanCopy() {
  cam.loadPixels()
  let w = cam.width
  let h = cam.height
  
  copy(cam, w/2, 0, slitWidth,h, offset, 0, slitWidth, h)
  offset = (offset + 1) % width
}


function slitScan() {
  let slitX = 200
  loadPixels()
  cam.loadPixels()
  let scanned = []
  for (let y = 0; y < cam.height; y++) {
    let p = cam.get(slitX, y)
    scanned[y] = p
  }
  
  for (let i = 0; i < scanned.length; i++) {
    set(offset, i, scanned[i])
  }
    offset = (offset + 1) % width
  updatePixels()
 
}

function drawImageWithSquares() {
   cam.loadPixels();
  for (let y = 0; y < cam.height; y++) {
    for (let x = 0; x < cam.width; x++) {
      let index = (x + y * cam.width) * 4;

      let r = cam.pixels[index];
      let g = cam.pixels[index + 1];
      let b = cam.pixels[index + 2];
      let a = cam.pixels[index + 3];
      
      noStroke();
      bright = (r +g +b)/3
      const w = map(bright, 0, 255,1,vScale)
      fill(r,g,b)
      // const c = (bright) % 360
      // fill(c, 100, 50);
      const vX = (x * vScale ) + (vScale * 0.5)
      const vY = (y * vScale ) + (vScale * 0.5)
      rect(vX, vY, w, w);

    }
  }
}