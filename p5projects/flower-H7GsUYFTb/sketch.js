let flower
let r = 2;
function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
  flower = new Flower(width/2,width/2,height/2,7)
  flower.build();
  noStroke();
}

function draw() {
  background(200,100,50);
  flower.render();
}