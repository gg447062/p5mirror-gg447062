let butterfly, face, flower
let w = 80
let xs = []
let widths 
let i = 0
let index
function setup() {
  createCanvas(400, 400);
  // face = loadImage("face-test.png");
   flower = loadImage("flower.png");
  colorMode(HSL)
  noStroke()
  for (let i = 0; i < 24; i++) {
    xs.push(i)
  }
  widths = xs.map(x => 10 * sin(x))
}

function draw() {
  background(200,100,50)
  index = i % 20
 
  push()
  translate(width/2, height/2)
  fill(100,100,50)
  square(-100,-100,200)
   pop()
  let currDiff = widths[index]
  w = 80 + currDiff
  image(flower, 0, 320, w, w)
  image(flower, 100, 320, w, w)
  image(flower, 220, 320, w, w)
  image(flower, 320, 320, w, w)
  if (frameCount % 12 === 0) {
    i++
  }
}