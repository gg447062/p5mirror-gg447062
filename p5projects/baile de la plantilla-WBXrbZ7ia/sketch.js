let images = [];
let img, vid;
let index = 0;
let right, left, play;
let playing = false;
let start = 0
let end = 2
let flip = 1

function preload() {
  for (let i = 0; i < 5; i++) {
    img = loadImage(`img/frame_000${i}.png`);
    images.push(img);

  }
}

function setup() {
  createCanvas(600, 400);
  frameRate(6)

  colorMode(HSL);
  imageMode(CENTER);

  left = createButton("<");
  right = createButton(">");
  play = createButton("play");

  left.mousePressed(() => next());
  right.mousePressed(() => prev());
  play.mousePressed(() => {
    playing = !playing;
  });

  // vid = createVideo("MVI_1091.MP4");
  // // vid.showControls();
  // vid.hide();
  // vid.loop();
  // vid.volume(0);
  // vid.size(600, 400);
}

function next() {
   index += 1
    if (index > end ) {
      index = 0
    }
}
function prev() {
  index -= 1;
    if (index < 0) {
      index = end;
    }
}

function keyPressed() { 

  if (key == "ArrowLeft") {
    prev()
  } else if (key == "ArrowRight") {
    next()
}}


function draw() {
  background(100,100,50)
  translate(width / 2, height / 2);

  
  let current = images[index]
  
  current.resize(0, 200);
  if (frameCount % 9 == 0 && playing) {
   flip *= -1
  }
  scale(flip, 1)
  image(current, -200, 0);
  image(current, 0, 0);
  image(current, 200, 0);
 

  if (playing) {
    index++
    if (index > end ) {
      index = start
    }
  }
}
