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
let a = 0.2



let x = 0
let y = 100

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
    if (y > 450) {
      reverseCoords = true
  } else if (y <= -50) {
    reverseCoords = false
  }
  
    if (reverseCoords){
      console.log('backword', y)
      y -= coordRate
    } else {
      console.log('forward', y)
      y += coordRate
    }
}


function draw() {
  background(255)
  oscillateColors()
  oscillateCoords()
  
  
 
  
  noStroke()
  
 
  for (let i = 0; i <= 3; i++) {
    let delay
    const color = `rgba(${colors[0]}, ${colors[1]}, ${colors[2]}, ${colors[3] + 0.05 * i})`
    fill(color)
    if (reverseCoords) {
      delay = y - i * 25
    } else {
      delay = y + i * 25
    }
    console.log('delay:', y)
    ellipse(100, delay, 50)
  }
  
 
}