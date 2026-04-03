let d = 200
let h = 30
let x = d/2
let y = d/2
let total 
function setup() {
  createCanvas(400, 400);
  colorMode(HSL)
   noStroke()
  total = width/d 
  
  for (let i = 0; i < total; i++) {
   for (let j = 0; j < total; j++) {
    fill(100,100,h)
    circle(x,y,d)
    h+=20
    x+=d

   }
    x=d/2
    y+=d
  }
}

