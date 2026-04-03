let img
let t = 0;

function setup() {
  createCanvas(400, 400,WEBGL);
  img = loadImage('eye.gif')
}

function draw() {
  background(220);
  noStroke()
  texture(img)
  rotateY(t)
  box(width, height)
  t -= 0.005
}