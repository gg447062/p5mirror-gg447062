// this one is inspired by, a.k.a. stolen from Vera Molnár
// in particular, this work: https://cdn.prod.website-files.com/61e6c06a23cb13bf76051194/630371e22764636d16d0f04e_Screen%20Shot%202022-08-22%20at%2014.08.41.png

const myPalette = ['#FA6E41', '#E1CA0B', '#5774FA', '#2F9213', '#805041'];

let squareSize;
let squareAmt = 6;

function setup() {
  createCanvas(600, 600);
  noStroke();

  // make sure that the squares fit evenly on the canvas no matter how many there are
  squareSize = width / squareAmt;
  rectMode(CENTER);

  let bg = random(myPalette);
  // don't use the background color in the rest of the squares
  let currPalette = myPalette.filter((x) => x != bg);
  background(bg);
  // iterate along the x axis
  for (let i = 0; i < squareAmt; i++) {
    //iterate along the y axis
    for (let j = 0; j < squareAmt; j++) {
      // add half the width of the squares to center them
      let x = squareSize * i + squareSize * 0.5;
      let y = squareSize * j + squareSize * 0.5;
      // subtract a random amount from the initial width
      let w = squareSize - ceil(random(10, 20));
      // set a previous fill so that we can make sure we don't draw two squares in a row in the same color
      let prevFill = random(currPalette);

      // draw four squares, shrinking by a random amount each time
      for (let k = 0; k < 4; k++) {
        // select a new color
        currFill = random(currPalette);
        // if it's the same as the previous one, select again, until they're different
        do {
          currFill = random(currPalette);
        } while (currFill == prevFill);

        push();
        fill(currFill);
        // translate the canvas's origin to the coordinates of the square's center so we can rotate it around it's center
        translate(x, y);
        let degrees = QUARTER_PI / 8;
        rotate(random(-degrees, degrees));
        square(0, 0, w);
        pop();
        // subtract another random amount from the width
        w -= ceil(random(10, 20));
        // update the previous fill so we know what color was just drawn
        prevFill = currFill;
      }
    }
  }
}
