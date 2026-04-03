let angle = 0

function setup() {
  createCanvas(400, 300, WEBGL);
}


function draw() {
  ambientLight(0,200, 250);
  let v = createVector(-200,-150,-1)
  v.div(100)
  directionalLight(200,0,0,v)

  background(0,0,100);

  noStroke();
  rotateY(angle);
  rotateZ(4.5);
  specularMaterial(255);
  translate(30,0)
  torus(80, 10);
 
  translate(-100,0)
  sphere(50,20)
  

  angle += 0.03;
}