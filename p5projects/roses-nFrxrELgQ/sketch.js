let n, d;
let nSlider, dSlider;
let off = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  angleMode(DEGREES);
  nSlider = createSlider(1, 10, 2);
  dSlider = createSlider(1, 20, 1);
}

function draw() {
  n = nSlider.value();
  d = dSlider.value();
  background(0, 0, 14);
  stroke(244);
  strokeWeight(2);
  noFill();
  // fill(244)
  translate(width / 2, height / 2);
  beginShape();

  for (let i = 0; i < 361 * d; i++) {
    const ampli = 170;

    let k = n / d;

    r = ampli * sin(k * i);

    const x = r * cos(i);
    const y = r * sin(i);
    const di = dist(x, y, 0, 0);

    const h = (map(di, 0, ampli, 0, 360) + off) % 360;
    strokeWeight(3);
    stroke(h, 100, 80);
    point(x, y);

    stroke(0, 0, 100, 0.5);
    vertex(x, y);
 
  }
  off = (off + 2) % 360;

  endShape();
  strokeWeight(1);
  text(`n: ${n}`, -190, -180);
  text(`d: ${d}`, -190, -160);
}
