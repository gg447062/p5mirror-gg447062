let xs = []
let points
let eSize = 8
let sp33d = 1
let dx = 10
let amplitude = 100
let w 
let period = 46
let xSpacing = eSize * 1.2
let graphCoords = []
let graphSize = 2.5
let graphGap = graphSize * 2

let reverseTime = 5
let reverse = false

function setup() {
  createCanvas(620, 400);
  colorMode(HSL)
  rectMode(CENTER)
  pixelDensity(1)
  w = width + eSize * 3
  makeXs()
  // background(290, 100, 80)
  makeGraph()
  makePoints()
  drawPoints()
  // noStroke()
}

function draw() {
  background(290, 100, 80)
  
  if (reverse) {
    dx -= sp33d
  } else {
    dx += sp33d
  }
  
  // drawGraph()
  makePoints()
  drawPoints()
  
}

function mouseDragged () {
  period = mouseX
  amplitude = height - mouseY
}

function makeXs() {
   for (let i = -eSize*10; i < w ; i+=xSpacing) {
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
  let val = 50
  let val2 = 50
  points.forEach((point, i) => {
    fill(50,100, val+i/2)
    stroke(30, 100, val2)
    rect(point[0], point[1], eSize * 2, eSize*18)
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
  let hue = 50
  noStroke()
  graphCoords.forEach((coord, i) => {
     fill(hue, 100, 50)
    square(coord[0], coord[1], graphSize)
  })
}
