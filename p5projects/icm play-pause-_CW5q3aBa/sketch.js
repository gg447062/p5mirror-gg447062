let mp3;
let playing = false;

function setup() {
  createCanvas(400, 400);
  mp3 = new p5.SoundFile('bells.mp3')
}

function mousePressed() {
  if (!playing) {
    mp3.play()
    playing = true
  } else {
    mp3.pause();
    playing = false
  }
}

function draw() {
  background(220);
  
}