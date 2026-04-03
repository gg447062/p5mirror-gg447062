let emitters = []

function setup() {
  createCanvas(600, 600);
  colorMode(HSL);
}

function draw() {
   background(240, 60, 40);
  for (let emitter of emitters){
  emitter.emit()
  }
}

function mousePressed() {
  emitters.push(new Emitter(mouseX,mouseY))
}