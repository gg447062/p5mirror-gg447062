let cam;
let t = 0;

function setup() {
  cam = createCapture(VIDEO, rs);
  cam.hide();
}

function rs() {
  createCanvas(cam.width, cam.height);
}

let y = 0;

function draw() {
  // background(20);
  push();
  scale(-1, 1);
  image(cam, width, 0);
  pop();

  push();
  copy(cam, 0, height/2, width, 10, 0, y, width, 10);
  pop();
  // push();
  // a = map(sin(t), -1, 1, 0, 255);
  // tint(255, a);
  // let flip = createImage()
  // image(cam, 0, 0);
  //   pop();
  // t += 0.05;
  y += 1;
  y = y %height;
}
