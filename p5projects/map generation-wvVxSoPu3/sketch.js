let map =[]

let idea =  [
  [2,0,1,0,2],
  [0,1,2,1,0],
  [1,2,0,2,1],
  [0,1,2,1,0],
  [2,0,1,0,2],
]

let colors = []
let colorIds=[]
let rows, columns

function setup() {
  createCanvas(400, 400);
  colorMode(HSL)

  colors.push(color(30, 100, 60))
  colors.push(color(50, 100, 50))
  colors.push(color(250, 100, 85))
  
  colorIds=[0,1,2]
  
   stroke(0,0,60)
  noStroke()
  
  rows = 20;
  columns = 20;
  generateMap()
}

function draw() {
  background(200,100,50)
  if (frameCount % 60 == 0) {
    generateMap()
  }
  
  drawMap()
}

function generateMap() {
  map = []
     for (let i = 0; i < rows; i++) {
    let row = []
    for (let j = 0; j < columns; j++) {
        row.push(floor(random(0,3)))
    }
    map.push(row)
  }
}

function drawMap() {
  for (let i = 0; i < map.length; i++) {
    let row = map[i]
    for (let j = 0; j < row.length; j++) {
      let item = row[j]
      fill(colors[item])
        let h = height / map.length 
        let w = width / map[0].length
      ellipse(j * w + w/2, i * h + h/2, w, h)
    }
  }
}