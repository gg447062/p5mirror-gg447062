let time = 0;
let wave = [];
let waveoff = 200;
// amount of series to add up
let amount = 50;
let amp = 50;
let periodShift = 0.05;
let osc

let ampSlider;
let periodSlider;
let amountSlider;
let modeBox;
let revBox
let saw = false;
let revSaw = false

function setup() {
  createCanvas(800, 400);
  ampSlider = createSlider(10, 100, amp);
  periodSlider = createSlider(0, 0.5, periodShift, 0.01);
  amountSlider = createSlider(1, 100, amount);
  modeBox = createCheckbox();
  revBox = createCheckbox()
  osc = new p5.Oscillator();
  osc.start()
}

function draw() {
  background(0);

  translate(100, height / 2);

  amp = ampSlider.value();
  periodShift = periodSlider.value();
  amount = amountSlider.value();
  saw = modeBox.checked();
  revSaw = revBox.checked()

  let x = 0;
  let y = 0;

  let sgn = -1;
  for (let i = 0; i < amount; i++) {
    let pX = x;
    let pY = y;
    let n = i * 2 + 1;

    let sawN = i + 1;
    // for multiplying PI - switches between pos and neg each loop if the saw wave is not reversed
    let sgnN = sgn * sawN;
    if (revSaw) {
      sgn *= -1;
    }
    

    let piMult = saw == true ? sgnN : n;
    let timeMult = saw == true ? sawN : n;

    let radius = amp * (4 / (piMult * PI));
    let sawRadius = amp * (2 / (piMult * PI));

    let rMult = saw == true ? sawRadius : radius;

    x += cos(timeMult * time) * rMult;
    y += sin(timeMult * time) * rMult;

    // draw circles
    // stroke(255, 100);
    // noFill();
    // ellipse(pX, pY, radius * 2);

    // //draw dots
    // fill(255);
    // ellipse(x, y, 10);

    // draw lines
    // stroke(255);
    // line(pX, pY, x, y);
  }
  wave.unshift(y);

  noFill();
  stroke(255);
  beginShape();
  for (let i = 0; i < wave.length; i++) {
    let x = i + waveoff;
    vertex(x, wave[i]);
  }
  endShape();

  // draw line connecting last circle y to wave
  // line(x, y, waveoff, y);
  
  let fr = map(y,-100,100, 500,50)
  osc.freq(fr)

  if (wave.length >= width / 2) {
    wave.pop();
  }
  time += periodShift;
}
