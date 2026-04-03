let myPalette = [
  [250, 110, 65],
  [225, 202, 11],
  [87, 116, 250],
  [47, 146, 19],
  [128, 60, 65],
];

let img;

function preload() {
  img = loadImage('vera.jpg');
}

function setup() {
  pixelDensity(1);
  img.resize(600, 0);
  createCanvas(img.width, img.height);

  img.loadPixels();

  for (let y = 0; y < img.height; y++) {
    for (let x = 0; x < img.width; x++) {
      let index = (x + y * width) * 4;
      let r = img.pixels[index];
      let g = img.pixels[index + 1];
      let b = img.pixels[index + 2];
      let a = img.pixels[index + 3];

      let bright = brightness([r, g, b, a]);

      if (bright < 30) {
        r = myPalette[2][0];
        g = myPalette[2][1];
        b = myPalette[2][2];
      } else if (bright < 60) {
        r = myPalette[3][0];
        g = myPalette[3][1];
        b = myPalette[3][2];
      } else {
        r = myPalette[1][0];
        g = myPalette[1][1];
        b = myPalette[1][2];
      }

      // if (bright < 20) {
      //   r = myPalette[2][0];
      //   g = myPalette[2][1];
      //   b = myPalette[2][2];
      // } else if (bright < 40) {
      //   r = myPalette[4][0];
      //   g = myPalette[4][1];
      //   b = myPalette[4][2];
      // } else if (bright < 60) {
      //   r = myPalette[0][0];
      //   g = myPalette[0][1];
      //   b = myPalette[0][2];
      // }
      // else if (bright < 80) {
      //   r = myPalette[3][0];
      //   g = myPalette[3][1];
      //   b = myPalette[3][2];
      // } else {
      //   r = myPalette[1][0];
      //   g = myPalette[1][1];
      //   b = myPalette[1][2];
      // }

      img.pixels[index] = r;
      img.pixels[index + 1] = g;
      img.pixels[index + 2] = b;
      img.pixels[index + 3] = 200;
    }
  }
  img.updatePixels();
  image(img, 0, 0);
}
