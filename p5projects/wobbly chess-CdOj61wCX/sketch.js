let size = 100;
let amt;
let t = 0;
function setup() {
  createCanvas(800, 600);
  amt = width / size;
  noStroke();
}

function draw() {
  blendMode(BLEND);
  background("#d6ecff");

  blendMode(EXCLUSION);
  fill("#d6ecff");
  for (let i = -4; i < amt+4; i++) {

    let d = dist(0, i * size, width / 2, height / 2);
    let s = ((sin(t - d + i) + 2) / 2) * size;
    rect(0, i * size, width, s);
  }

  for (let i = -4; i < amt+4; i++) {
    let d = dist(0, i * size, width / 2, height / 2);
    let s = ((cos(t - d + i) + 2) / 2) * size;
    rect((i + 0) * s, 0, s, height);
  }
  t += 0.006;
  filter(BLUR, 1);
}
