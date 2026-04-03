let offset = 0
let speedSlider, freqSlider
function setup() {
  createCanvas(400, 400); 
  speedSlider = createSlider(0, 2,0.5, 0.01)
  freqSlider = createSlider(0, 100, 20, 1)
}

function sgn(val) {
  if (val > 0) {
    return 1
  } else if (val < 0 ) {
    return -1
  } else {
    return 0
  }
}

function draw() {
  background(220);

  loadPixels()
  let frequency = 1/freqSlider.value()

  for(let r = 0; r < height; r++) {
    for (let c = 0; c < width; c++) {
      let square = sgn(sin(frequency*c + offset) )
      let h = map(square, -1, 1, 0, 255)
      let hue = color(100,200, h)
      set(c,r, hue)
    }
  }
  updatePixels()
  offset += speedSlider.value()
}