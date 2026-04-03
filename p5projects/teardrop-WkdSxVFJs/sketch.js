function setup() {
  createCanvas(400, 400);
  translate(width/2, height/2)
  beginShape()
  vertex(0,0)
  bezierVertex(0, 30, 50, 70, 50,100)
  bezierVertex(50, 150, -50, 150, -50, 100)
  bezierVertex(-50, 70, 0, 30,  0,0)
  endShape()
}
