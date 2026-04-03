function setup() {
  colorMode(HSL);
  createCanvas(600, 400);
  pixelDensity(1);
}

function draw() {
  background(175);

  loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      const d = dist(mouseX, mouseY, i, j);
      let v = map(d, 0, 565, 0, 200);
      let c = color(v, 100, 50);
      set(i, j, c);
    }
  }
  updatePixels();
}
