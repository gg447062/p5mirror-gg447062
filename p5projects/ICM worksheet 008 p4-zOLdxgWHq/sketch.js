let hueCount = 18;
let w;

function setup() {
  createCanvas(600, 400);
  colorMode(HSB);
  noStroke();
  w = width / hueCount;
}

function draw() {
  for (let x = 0; x < hueCount; x++) {
    let h = (360 / hueCount) * x;

    fill(h, 80, 100);
    rect(x * w, 0, w, height);
  }

}
