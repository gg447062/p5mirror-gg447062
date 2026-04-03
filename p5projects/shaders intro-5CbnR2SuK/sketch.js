let customShader
const numCircles = 40;
let circles = []

function preload() {
  customShader = loadShader('shader.vert', 'noisecircles.frag')
}

function setup() {
  createCanvas(400, 400, WEBGL);
  rectMode(CENTER)
  shader(customShader)
  
  for (let i = 0; i < numCircles; i++) {
    circles.push(random(), random(), random(0.02, 0.14))
  }
  
  noStroke()
}

function draw() {
  clear()

  customShader.setUniform('circles', circles)
  customShader.setUniform('m', millis())
  rect(0,0,width,height)

}