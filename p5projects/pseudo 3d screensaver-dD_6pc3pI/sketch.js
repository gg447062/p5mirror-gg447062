let stringy = 'freeak/user/forge'


let rate = 1
let coordRate = 5
let min = 5
let max = 214
let coordsMin = 100
let coordsMax = 200

let reverse = false
let reverseCoords = false

let r = 5
let g = max
let b = min
let a = 1

let colors = [r,g,b,a]

let coords = 100
let xs = [ 0, 0,coords, coords]
let ys = [coords,0, 0, coords]

let i = 2
let j = 2



function setup() {
  createCanvas(400, 400);
}

function oscillateColors() {
    if (colors[i] > max ) {
      reverse = true
  } else if (colors[i] <= min) {
    reverse = false
  }
  
    if (reverse){
      colors[i] -= rate
    } else {
      colors[i] += rate
    }
}

function oscillateCoords() {
    if (ys[0] >= coordsMax ) {
      reverseCoords = true
  } else if (ys[0] <= coordsMin) {
    reverseCoords = false
  }
  
    if (reverseCoords){
      ys[0] -= coordRate
    } else {
      ys[0] += coordRate
    }
}


function draw() {
  background(255)
  oscillateColors()
  // oscillateCoords()
  
  const color = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3]})`
  const colorInvert = `rgba(${colors[2]}, ${colors[0]}, ${colors[1]}, ${colors[3]})`

  const colorOpts = [color, colorInvert]
  
  noStroke()
  
  xs.forEach((x, i) => {
    fill(colorOpts[i % 2])
    console.log(x, ys[i])
    square(x, ys[i], 200)
  })

  
  fill(226, 237,5)
  square(100, 100, 100)
 
}