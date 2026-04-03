let pSize = 10; //"pixel" width;

let img;
let amt = 2;

let totals = []; // pixel array
let balls = [];
let smallCanvas;
let xP;

function preload() {
  img = loadImage("duke.jpg");
}

function setup() {
  // img.resize(400, 0);
  img = createCapture(VIDEO,onLoad)
  img.hide();
//   createCanvas(img.width, img.height);


//   smallCanvas = createGraphics(width / pSize, height / pSize);
  pixelDensity(1);

  // xP = width / smallCanvas.width;
  noStroke();

  // for (let i = 0; i < 6; i++) {
  //   let x = random(0, smallCanvas.width);
  //   let y = random(0, smallCanvas.height);
  //   balls.push(new Ball(x, y));
  // }

  //   img.loadPixels();
  //   for (let x = 0; x < img.width; x += pSize) {
  //     for (let y = 0; y < img.height; y += ySize) {
  //       let index = (x + y * width) * 4;
  //       let r = img.pixels[index];
  //       let g = img.pixels[index + 1];
  //       let b = img.pixels[index + 2];

  //       let pixel = new Pixel(x, y, pSize, [r,g,b,255]);

  //       pixeles.push(pixel);
  //     }
  // } // end for
}

function onLoad() {
  createCanvas(img.width, img.height);


  smallCanvas = createGraphics(width / pSize, height / pSize);
   xP = width / smallCanvas.width;
  for (let i = 0; i < 6; i++) {
    let x = random(0, smallCanvas.width);
    let y = random(0, smallCanvas.height);
    balls.push(new Ball(x, y));
  }
}

function draw() {
  background(20);
  // img.filter(GRAY);
  // image(img, 0, 0);
  for (let ball of balls) {
    ball.update();
  }

  smallCanvas.loadPixels();
  for (let i = 0; i < smallCanvas.width; i++) {
    for (let j = 0; j < smallCanvas.height; j++) {
      let index = i + j * smallCanvas.width;
      let total = 0;
      for (let ball of balls) {
        const d = dist(ball.pos.x, ball.pos.y, i, j);
        const col = (14 * ball.r) / d;
        total += col;
      }

      total = 360 - total;
      totals[index] = total;
    }
  }

  img.loadPixels();

  for (let x = 0; x < img.width; x += pSize) {
    for (let y = 0; y < img.height; y += pSize) {
      let index = (x + y * width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      
      let bright = (r+g+b)/3

      let totalIndex = index / 4;
      let total = totals[totalIndex];
      // let f = [r,g,b,0]
      // let v = constrain(total, 160, 280);

      let c = color(r, 100, 50);
      let f;

      if (bright > 50) {
        f = fill(c);
      } else {

        f = fill(bright);
      }

      rect(x, y, xP, xP);
    }
  } // end for
  // console.log(totals.length);
}
