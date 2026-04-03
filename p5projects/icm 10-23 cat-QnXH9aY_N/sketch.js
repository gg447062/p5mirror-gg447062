let cat;

function preload() {
  cat = loadImage("cat.jpg");
}

function setup() {
  createCanvas(cat.width, cat.height);
}

function draw() {
  cat.loadPixels();
  for (let i = 0; i< cat.pixels.length; i+= 4) {
    cat.pixels[i]--
     cat.pixels[i+1]++
     cat.pixels[i+2]--
  }
 
 
  cat.updatePixels();
  image(cat, 0, 0);
}
