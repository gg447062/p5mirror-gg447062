let capture;
let pos, y, yDiff
function setup() {
  createCanvas(800, 600);
  colorMode(HSL)
  noStroke()
  
    let constraints = {
	 video:{
	  deviceId: 1  
	 },
		 
      mandatory: {
        minWidth: 1280,
        minHeight: 720
      },   
    }
 
  pos = -400
  capture=createCapture(constraints);
  capture.hide();

  
}

function draw() {
  background(220, 100, 50);
  translate(width/2, height/2)
  image(capture, -width/4, -height/4, width/2, height/2 );
  // filter(ERODE)
  fill(100,100,50)
  circle(pos, 0, 100)
  if (pos < 0) {
    pos += 10
  }
}
