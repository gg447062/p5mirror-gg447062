let shape, x, y, h, w, c
let shapeSelect, wSlider, hSlider
let play = false
let playButton
let currentShape

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER)
  angleMode(DEGREES)
  hSlider = createSlider(3,400/3,100,0.1)
  wSlider = createSlider(3,400/3,100,0.1)
  
  shapeSelect = createSelect()
  shapeSelect.option('square')
  shapeSelect.option('ellipse')
  shapeSelect.option('triangle')
  shapeSelect.selected('square')
  currentShape = shapeSelect.value()
  
  playButton = createButton('play')
  playButton.style('backgroundColor:green')
  playButton.mousePressed(() => {
    if (!play) {
      play = true
      playButton.style('backgroundColor:red')
    } else {
      play = false
      playButton.style('backgroundColor:green')
    }
  })
  
  w = wSlider.value()
  h = hSlider.value()
  x = 0
  // x = width/2
  y = height/2
  c = color(0,220,120)
  updateShape()
}

function updateShape() {
  if (shapeSelect.value() == 'square') {
    shape = new Square(x,y,w,c,1,0)
  } else if (shapeSelect.value() == 'ellipse') {
    shape = new Ellipse(x,y,w,h,c,1,0)
  } else {
    shape = new Triangle(x,y,w,h,c,1,0)
  }
  currentShape = shapeSelect.value()
}

function draw() {
  background(255,200,0,10)
  if (currentShape != shapeSelect.value()) {
    updateShape()
  }
  if (play) {
  shape.update()
  shape.show()
  }
    
}
