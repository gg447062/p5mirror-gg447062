// this idea was inspired by this sketch by Roni Kaufman:
// https://openprocessing.org/sketch/2501172
// I also used some code ideas from it

const myPalette = ['#FA6E41', '#E1CA0B', '#5774FA', '#2F9213', '#805041'];

let rowHeight = 20;
let y = 0;

function setup() {
  createCanvas(600, 600);
  let rows = height / rowHeight;
  for (let i = 0; i < rows; i++) {
    generateRow();
  }
}

function generateRow() {
  let remainingLength = width;
  let maxDivisor = width / rowHeight;
  let currentX = 0;

  let w = width / ceil(random(maxDivisor));
  while (remainingLength > 0) {
    let randomColor = random(myPalette);
    stroke(randomColor);
    fill(randomColor);
    rect(currentX, y * rowHeight, w, rowHeight);
    currentX += w;
    remainingLength -= w;
  }
  y++;
}
