let cat;
// function preload() {}
function setup() {
  cat = loadImage("cat.jpg", onLoad);
}

function onLoad() {
  createCanvas(cat.width, cat.height);

  cat.loadPixels();

  for (let y = 0; y < cat.height; y++) {
    for (let x = 0; x < cat.width; x++) {
      let i = (x + y * width)*4;
  
      if ((x+y) % 2 == 0) {
        cat.pixels[i + 1] = 255;
      }

      if (x > cat.width / 2 - 5 && x < cat.width / 2 + 5) {
        cat.pixels[i] = 0;
        cat.pixels[i + 1] = 0;
        cat.pixels[i + 2] = 255;
      }

      if (y == cat.height / 2) {
        cat.pixels[i + 3] = 0;
      }
    }
  }

  cat.updatePixels();

  image(cat, 0, 0);
}
