let faceMesh;
let faces = [];
let video;
let options = { maxFaces: 1, refineLandmarks: false, flipped: true };

let right_corner = 20;
let left_corner = 10;
let bottom_outer = 5;
let bottom_inner = 26;
let top_outer = 15;
let top_inner = 36;

let active = 1;
// sound stuff
let delay;
let panTime = 0;
let ampTime = 0;

let counter = 0;
let osc;
let osc2;
let base = 155.5;
// let ratios = [1.125, 1.2, 1.8, 2.25, 2.4, 3.6];
let filter;
let env;
let env2;
let distort

let t = 0;

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  randomSeed(10);
  noiseSeed(10);
  rectMode(CENTER);
  noStroke();
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  faceMesh.detectStart(video, foundFaces);

  delay = new p5.Delay();

  osc = new p5.Oscillator("square");
  osc.freq(base);
  osc.amp(0);
  osc.start();

  osc2 = new p5.Oscillator("triangle");
  osc2.freq(base*1.5);
  osc2.amp(0);
  osc2.start();

  filter = new p5.LowPass();
  filter.freq(700);
  filter.res(10);
  
  distort = new p5.Distortion()
  distort.set(0.1)

  let attackLevel = 0.2;
  let releaseLevel = 0;

  env = new p5.Envelope();
  env.setRange(attackLevel, releaseLevel); // set the volume range

  // env2 = new p5.Envelope();
  // env2.setRange(attackLevel, releaseLevel); // set the volume range

  osc.disconnect();
  osc.connect(filter);
  // osc.amp(env);
  osc.pan(0.5);

  osc2.disconnect();
  osc2.connect(filter);
  // osc2.amp(env);
  osc2.pan(-0.5)

  // delay.process() accepts 4 parameters:
  // source, delayTime (in seconds), feedback, filter frequency

  delay.process(osc, 0.3, 0.6, 1300);
  delay.process(osc2, 0.3, 0.6, 1300);
  
  // distort.process(osc)
  // distort.process(osc2)

  
}

function foundFaces(results) {
  faces = results;

}

function draw() {
  background(20);
  let d; // distance between the top and bottom of mouth
  let cY // center y of lips bounding
  let cX // center x of lips bounding box
  // video stuff
  // push();
  // scale(-1, 1);
  // translate(-width, 0);
  // image(video, 0, 0, width, height);
  // pop();

  if (faces.length > 0) {
    face = faces[0];
    let lips = face.lips;

    // do a loop around the keypoints and light up one at a time
    for (let k = 0; k < lips.keypoints.length; k++) {
      let keypoint = lips.keypoints[k];
      if (k == active) {
        fill(219, 96, 201);
        circle(keypoint.x, keypoint.y, 8);
      } else {
        fill(139, 232, 67);
        circle(keypoint.x, keypoint.y, 4);
      }
      
    }

    fill(51, 177, 255);
    let top = lips.keypoints[top_inner];
    let bottom = lips.keypoints[bottom_inner];
  
    
    square(top.x, top.y, 10);
    square(bottom.x, bottom.y, 10);

    d = dist(top.x, top.y, bottom.x, bottom.y);
    cX = lips.centerX
    cY = lips.centerY
  

    // sound stuff

    // let fre = map(sin(t * 0.5), -1, 1, 600, 2000);
    let fre = map(d, 0, 40, 0, 1000);
    let ampli = map(d, 0, 40, 0, 1);
    let oscFreq = map(cX,0,width,2,600)
    let freqmult = 1.5
    if (cY < 150) {
      freqmult = 2
    } else if (cY > 350) {
      freqmult = 0.5;
    }

    filter.freq(fre);
    osc.amp(ampli)
    osc2.amp(ampli)
    osc.freq(oscFreq)
    osc2.freq(oscFreq*freqmult)
    text(fre, 10, 20);
      text(oscFreq, 10, 40);
     text(`${cY}: ${freqmult}`, 10, 60);
    // distort.set(0,0)
    
    // env.play();

    if (frameCount % 5 == 1) {
      active += 1;
      active = active % 42;
    }
  }

  t += 0.01;
}
