class Wave {
  constructor(amp, period, phase) {
    this.amp = amp;
    this.period = period;
    this.phase = phase;
    this.phaseShift = 0.1;
  }

  update() {
    this.phase += this.phaseShift;
  }

  evaluate(x) {
    let y = sin(this.phase + (TWO_PI * x) / this.period);
    let normalized = map(y, -1, 1, 0, this.amp);

    return normalized;
  }

  setPhaseShift(v) {
    this.phaseShift = v;
  }

  setPeriod(v) {
    this.period = v;
  }
}

let speedSlider, freqSlider;
let wave;
function setup() {
  createCanvas(400, 400);
  speedSlider = createSlider(0, 2, 0.5, 0.01);
  freqSlider = createSlider(0, 800, 200, 1);
  wave = new Wave(255, freqSlider.value(), speedSlider.value());
}

function draw() {
  background(220);

  loadPixels();
  let period = freqSlider.value();
  let phaseShift = speedSlider.value();

  for (let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let l = wave.evaluate(c);
      let hue = color(100,l,200);
      set(c, r, hue);
    }
  }

  updatePixels();
  wave.setPeriod(period);
  wave.setPhaseShift(phaseShift)
  wave.update();

}
