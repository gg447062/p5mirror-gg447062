let waves = [];
let step;
let freqSlider, perSlider
function setup() {
  colorMode(HSL);
  createCanvas(600, 400);
  step = 1;

  for (let i = 0; i < 8; i++) {
    let a = random(20, 80);
    let p = random(50, 600);
    let ph = random(TWO_PI);
    waves.push(new Wave(a, p, ph));
  }
  
  freqSlider = createSlider(0.1, 2, 0.5, 0.01)
  perSlider = createSlider(-100, 100, 0, 1)
}

function draw() {
  background(200, 100, 50);
  let periodShift = perSlider.value()
  let freqShift = freqSlider.value()
  loadPixels();
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let l = 0;
      for (let wave of waves) {
        l += wave.eval(c);
      }
      const h = map(l, -100, 100, 100, 200);
      let hue = color(h, 80, 60);

      set(c, r, hue);
    }
  }
  updatePixels();

  push();
  beginShape();
  for (let x = 0; x < width; x += step) {
    let y = 0;
    for (let wave of waves) {
      y += wave.eval(x);
    }
    strokeWeight(6);
    stroke(40, 100, 50);
    noFill();
    vertex(x, y + 200);
  }
  endShape();
  pop();

  for (let wave of waves) {
    wave.update(freqShift);
    // wave.updatePeriod(periodShift)
  }
}
