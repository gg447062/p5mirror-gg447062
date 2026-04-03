let coords = []
let amount = 27
let count = amount / 2 
let sideWidth
let sideHeight
let end
let spaces = 6
let spaceIndex = 0
let fRate = 12

function setup() {

  createCanvas(625, 625);
  sideWidth = width / amount
  sideHeight = height / amount
  for (let i = 0; i < count; i++) {
    if (i % 2 === 0) {
      makeCoords(i)
    } else {
      makeCoords(i, true)
    }
    // makeCoords(i)
  }
  
}

function draw() {
  // background(232, 213, 7)
  
  drawSquares(coords.length)

}

function makeCoords(offset, reverse=false) {
  const xMult = sideWidth
  const yMult = sideHeight
  const start = 0 + offset
  const end = amount -  1 - offset
  
  let _coords = []

  for (let i = start; i < amount - offset; i++) {
    _coords.push([i * xMult, (start * yMult)])
  }
  for (let i = start + 1; i < end; i++) {
    _coords.push([end * xMult, i * yMult])
  }
  for (let i = end; i > start; i--) {
    _coords.push([i * xMult, end * yMult])
  }
  for (let i = end; i > start; i--) {
    _coords.push([start * xMult, i * yMult])
  }
  
  if (reverse) {
    const _coordsReversed = _coords.reverse()
    coords = coords.concat(_coordsReversed)
  } else {
    coords = coords.concat(_coords)
  }
} 

function drawSquares(limit) {
    for (i = 0; i < limit; i++) {
      stroke(0, 0, 255)
      // noStroke()

      if (i % spaces === spaceIndex % spaces) {
        fill(0, 0, 255)
      } else if (i % (spaces / 2) === spaceIndex % (spaces / 2)) {
        fill(0, 255, 0)
      } else {
        fill(255)
      }

      rect(coords[i][0], coords[i][1], sideWidth, sideHeight)
    }
  
    if (frameCount % fRate === 0) {
      spaceIndex += 1
    }
}

