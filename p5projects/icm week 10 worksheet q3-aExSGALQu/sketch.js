let mic
let fft

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  noStroke();
  mic = new p5.AudioIn()
  mic.start()
  fft = new p5.FFT()
  mic.connect(fft)
}

function draw() {
  background(20,0,10);
  let level = mic.getLevel()
  if (level > 0.08) {
    fill(random(360),80,80)
  } else {
    fill(180,80,80)
  }
  circle(width/2,height/6,level*1000)
  let spectrum = fft.analyze()
  for (let i = 0; i < spectrum.length; i++) {
    let x= map(i, 0,spectrum.length,0,width)
    let y = spectrum[i]
    let h = (x+180) % 360
    stroke(h,80,80)
    line(x,height+1,x,height+1-y)
  }
}