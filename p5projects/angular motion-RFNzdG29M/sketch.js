let comet 
let planet
let angle = 0
let angleV 
let angleA =0
let r = 100
let g 
function setup() {
  createCanvas(400, 400);
  g = createGraphics(width,height)
  g.colorMode(HSL)
  colorMode(HSL)
  angleV = TWO_PI/12
}

function draw() {
  background(100,80,10);
  g.blendMode(BLEND)
  g.background(200,20,10)
  g.push()
  g.translate(width/2,height/2)

 
  let x = cos(angle) * r;
  let y = sin(angle) * r*0.8
  
  let x1 = cos(angle-PI) * r;
  let y1 = sin(angle-PI) * r*0.8

  g.stroke(200,100,80)
  g.fill(200,100,80)
  let off = sin(angle/4) *20
  g.blendMode(DIFFERENCE)
  g.circle(x+off,y,50)
  
  g.line(0,0,x,y)
   g.circle(x1+off,y1,50)
  g.line(0,0,x1,y1)
  g.circle(0,0,20)
  g.pop()
  image(g,0,0)
  
  if (frameCount % 10 == 0) {
    angleV += angleA;
  angle+= angleV
  }
  // if (frameCount % 10 == 0) {
  //   angleV += angleA;
  // angle+= angleV
  //  g.background(100,80,10,0.4)
  // }
}


