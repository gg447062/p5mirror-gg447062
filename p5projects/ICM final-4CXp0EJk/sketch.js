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

let osc1
let osc2

function preload() {
  faceMesh = ml5.faceMesh(options);
}

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);
  noStroke();
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  faceMesh.detectStart(video, foundFaces);
  
  osc1 = new p5.Oscillator('sine');
  osc2  = new p5.Oscillator('sine');
 

}

function foundFaces(results) {
  faces = results;
}

function draw() {
  background(220);
  push();
  scale(-1, 1);
  translate(-width, 0);
  image(video, 0, 0, width, height);
  pop();

  if (faces.length > 0) {
    face = faces[0];
    let lips = face.lips;

    fill(0, 0, 255);
    let top = lips.keypoints[top_inner];
    let bottom = lips.keypoints[bottom_inner];
    square(top.x, top.y, 10);
    square(bottom.x, bottom.y, 10);

    let d = dist(top.x, top.y, bottom.x, bottom.y);
    text(d, 10, 20);

    // do a loop around the keypoints and light up one at a time
    for (let k = 0; k < lips.keypoints.length; k++) {
      let keypoint = lips.keypoints[k];
      if (k == active) {
        fill(255, 0, 0);
        circle(keypoint.x, keypoint.y, 4);
      }
    }

    if (frameCount % 5 == 1) {
      active += 1;
      active = active % 42;
    }
  }
}
