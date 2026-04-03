let sample;
let sample2;
let sample3;
let sample5;
let sample6;
let sample4;
let sample7;
let s = 1;
let p = 1;
let q = 1;
let delay

function preload() {
  sample = loadSound("mmmm.mp3");
  sample3 = loadSound("ooh.mp3");
  sample5 = loadSound("ooh.mp3");
  sample6 = loadSound("ooh.mp3");
  // sample2 = loadSound("sit_in_silence.mp3");
  sample4 = loadSound("hahaha.mp3");
  sample7 = loadSound("hahaha.mp3");
}

function setup() {
  createCanvas(400, 400);
  sample4.rate(0.8);
  sample4.amp(0.6);
  sample4.pan(-0.2);
  sample7.rate(0.8);
  sample7.amp(0.6);
  sample7.pan(0.2);

  sample.rate(0.8);
  sample.pan(1);


  sample3.rate(1);
  sample6.rate(0.667);
  sample5.rate(1.25);
  sample3.pan(-1);
  sample5.pan(0);
  sample6.pan(-1);
   delay = new p5.Delay();

  // delay.process() accepts 4 parameters:
  // source, delayTime (in seconds), feedback, filter frequency
  delay.process(sample3, 0.24, 0.6, 2300);
  delay.process(sample6, 0.36, 0.6, 2300);
  
}

function keyPressed() {
  sample.play();
}

function draw() {
  background(220);

  if (frameCount % 240 == 1) {
    sample4.play();
  }

  if (frameCount % 120 == 61) {
    sample7.play();
  }

  if (frameCount > 420 && frameCount % 240 == 1) {
    sample.play();
  }
  
  if (frameCount > 420 && frameCount % 240 == 161) {
      sample3.play();
    sample6.play()
  }

  //   if (frameCount > 300) {
  //     if (frameCount % 60 == q) {
  //     sample3.play();

  //     p += 2;

  //     p = p % 59;
  //   }

  //   if (frameCount % 60 == s) {
  //     sample5.play();
  //     q += 1;

  //     q = q % 59;
  //   }
  //   if (frameCount % 60 == p) {
  //     sample6.play();
  //     s += 3;
  //     s = s % 59;

  //   }
  //   }
}
