function setup() {
  createCanvas(450, 600);
  noStroke()
  
  background(240)
  translate(width / 3, height/1.3)
  
  for(let i = 0; i < 10; i++) {
    fill(6 * i)
    ellipse(i * width / 15, i * -height / 12, 10 + (i * 10), 20 + (i * 20))
  }
  noLoop();
}
