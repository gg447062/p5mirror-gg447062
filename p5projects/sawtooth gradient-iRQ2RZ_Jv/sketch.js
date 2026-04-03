let phase = 0;
let speedSlider, freqSlider;
function setup() {
  createCanvas(400, 400);
  speedSlider = createSlider(0, 4, 2, 0.01);
  freqSlider = createSlider(0, 400, 20, 1);
}

function sgn(val) {
  if (val > 0) {
    return 1;
  } else if (val < 0) {
    return -1;
  } else {
    return 0;
  }
}

function draw() {
  background(220);

  loadPixels();

  let period = freqSlider.value();
  
  let frequency = 1 / period;
  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let phaseShift = c + phase;
      let saw = 2 * (phaseShift / period - floor(0.5 + phaseShift / period));
      let amplitude = map(-saw, -1, 1, 0, 255);
      let hue = color(100, 200, amplitude);
      set(c, r, hue);
    }
  }
  updatePixels();
  phase += speedSlider.value();
}
