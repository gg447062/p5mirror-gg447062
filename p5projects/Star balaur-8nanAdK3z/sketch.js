let bg;
let bgi;
let maskLayer;

function setup() {
  createCanvas(400, 400);
  bg = createGraphics(width, height);
  maskLayer = createGraphics(width, height);
  bgi = createImage(width, height);

  makeBg();
  makeMask();
}

function draw() {
  background(220);
  fill(22);
  // plane(width, height);
  bgi.mask(maskLayer)
  // image(bgi, 0,0);
  image(maskLayer,0,0)
}

function makeBg() {
  for (let i = 0; i < height; i++) {
    let d = dist(0, i, 0, height / 2);
    let h = map(d, 0, height / 2, 255, 0);
    bg.stroke(0, h, 255);
    bg.line(0, i, width, i);
  }

  bgi.set(0, 0, bg);
}

function makeMask() {
  maskLayer.fill(255);
  maskLayer.circle(width / 2, height / 2, 200);
}
