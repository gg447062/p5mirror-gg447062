let phaseShiftSlider, freqSlider;
let wave;
function setup() {
  createCanvas(400, 400);
  phaseShiftSlider = createSlider(0, 2, 0.5, 0.01);
  freqSlider = createSlider(0, 800, 200, 1);
  wave = new SineWave(255, freqSlider.value(), 0, phaseShiftSlider.value());
  //  wave = new SquareWave(255, freqSlider.value(), 0, phaseShiftSlider.value());
  // wave = new SawtoothWave(255, freqSlider.value(), 0, phaseShiftSlider.value());
}

function draw() {
  background(220);

  loadPixels();
  let period = freqSlider.value();
  let phaseShift = phaseShiftSlider.value();

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let l = wave.evaluate(c);
      let hue = color(100, l, 200);
      set(c, r, hue);
    }
  }

  updatePixels();
  wave.setPeriod(period);
  wave.setPhaseShift(phaseShift);
  wave.update();
}
