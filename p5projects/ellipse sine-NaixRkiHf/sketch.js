let xs = []
let points
let eSize = 8
let spede = 1
let dx = 0
let amplitude = 124
let w 
let period = 54
let xSpacing = 3

let graphCoords = []
let graphSize = 2.5
let graphGap = graphSize * 2

let reverseTime = 5
let reverse = false

function setup() {
  createCanvas(720, 400);
  pixelDensity(1)
   w = width + 16
  // period = w / eSize
  
  makeXs()
  makeGraph()
  noStroke()
}

function draw() {
   // background(0, 0, 105);
  background(0, 0, 255)
  
 //  if (frameCount % (reverseTime * 60) == 0) {
 //  reverse = !reverse
 // }
  
  if (reverse) {
    dx -= spede
  } else {
    dx += spede
  }
  
  drawGraph()
  makePoints()
  drawPoints( )
  
}

function mouseDragged () {
  period = mouseX
  amplitude = height - mouseY
}

function makeXs() {
   for (let i = 0; i < w; i+=xSpacing) {
    xs.push(i)
  }
}

function makePoints() {
 points = xs.map(x => {
   let y = height / 2 + amplitude * sin((x + dx) / period)
   return [x, y]
 })
 
}

function drawPoints() {
  points.forEach(point => {
    fill(0, 255, 0)
    ellipse(point[0], point[1], eSize)
  })
}

function makeGraph() {
    for (let i = 0; i <= height; i+= graphGap) {
    let x = width * 0.5;
    let y = i
    graphCoords.push([x, y])
    x = width * 0.25;
    graphCoords.push([x, y])
    x = width * 0.75;
    graphCoords.push([x, y])

  }
  
  for (let i = 0; i <= width; i+= graphGap) {
    let y = height * 0.5;
    let x = i
    graphCoords.push([x, y])
    y = height * 0.25;
    graphCoords.push([x, y])
    y = height * 0.75;
    graphCoords.push([x, y])
    
  }
  
}

function drawGraph() {
  fill(0, 255, 0)
  graphCoords.forEach((coord) => {
    square(coord[0], coord[1], graphSize)
  })
}
