let chars = "I wish to wash my Irish wristwatch".split("");

function setup() {
  createCanvas(400, 400);
  background(20);
  for (let i = 0; i < chars.length; i++) {
    let x = random(10, width);
    let y = random(10, height);
    fill(224);
    text(chars[i], x, y);
  }

  setInterval(() => {
    background(20);
    for (let i = 0; i < chars.length; i++) {
      let x = random(10, width);
      let y = random(10, height);
      fill(224);
      text(chars[i], x, y);
    }
  }, 2000);
}
