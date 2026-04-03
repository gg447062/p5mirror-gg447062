let rotation = 0;
let time = 0

function setup() {
  createCanvas(400, 400);
  colorMode(HSL);
  // background(0)
}

function draw() {
  background(0, 0, 0);
  noFill();
  stroke(255);
  translate(200, 200);
  rotate(rotation);
  beginShape();
  g =  map(sin(time), -1, 1, 0.01, PI)

  for (let i = 0; i < TWO_PI; i += g) {
    const radius = 100;
    const angle = i;
    let x = cos(angle) * radius;
    let y = sin(angle) * radius;
    vertex(x, y);
  }

  endShape(CLOSE);
  rotation += 0.01;
  time += 0.01
}
