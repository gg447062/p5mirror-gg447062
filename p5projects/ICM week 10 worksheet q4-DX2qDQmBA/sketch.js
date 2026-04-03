let osc;
let delay;
let root = 196; // G3
// Diatonic, justly tuned, minor scale from // https://en.wikipedia.org/wiki/Just_intonation
let freqs = [1, 9 / 8, 6 / 5, 4 / 3, 3 / 2, 8 / 5, 9 / 5, 2];
let hueFreq = root;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  osc = new p5.Oscillator("triangle");
  osc.start();
  osc.amp(0);
  delay = new p5.Delay();

  // delay.process() accepts 4 parameters:
  // source, delayTime (in seconds), feedback, filter frequency
  delay.process(osc, 0.12, 0.5, 1300);
}

function keyPressed() {
  let freq = random(freqs);
  hueFreq = (root * freq) % 360;
  osc.freq(root * freq, 0.3);
  osc.amp(1, 0.8);
}

function keyReleased() {
  osc.amp(0, 1);
}

function draw() {
  background(hueFreq, 80, 80);
}
