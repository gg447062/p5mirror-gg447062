let tracks = []
let total = 7
let index = 0


function preload() {
  for (let i = 0; i < total; i++) {
    tracks[i] = new p5.SoundFile(i+".mp3")
  }
}

function setup() {
  createCanvas(400, 400);
  

}

function mousePressed() {  
  let current = tracks[index]
  
  if (!current.isPlaying()) {
    current.play()
  } else {
    current.pause();
    index = (index+1) % total
  }
}

function draw() {
  background(20);  
  fill(220)
  text('current track:' + (index+1),10,20)
}