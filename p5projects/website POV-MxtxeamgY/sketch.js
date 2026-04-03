let cam;
let sitePOV = false;
let switchButton;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  noStroke()
  
  cam = createCapture(VIDEO, onCamLoad)
  cam.hide();
  
  switchButton = createButton('Change POV')
  switchButton.position(10,10)
  switchButton.mousePressed(switchPOV)
  noCursor()
}

function onCamLoad() {
    resizeCanvas(cam.width, cam.height)
}

function switchPOV() {
  sitePOV = !sitePOV
}

function draw() {
  
  if (!sitePOV) {
      // cursor()
    drawScreen()
  } else {
    drawSitePOV()
  }
}

function drawScreen(alpha = 1) {
  fill(120,80,90,alpha)
  rect(0,0,width,height)
  fill(200,80,90)
  switchButton.position(10,10)
  circle(width/4,height/2,100)
   fill(100,0,90)
  triangle(mouseX+30,mouseY+10,mouseX+10, mouseY+25,mouseX,mouseY)
}

function drawSitePOV () {
  image(cam,0,0)
  scale(-1,1)
  translate(-width,0)
  drawScreen(0.5)

}