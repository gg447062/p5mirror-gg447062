class Shape {
//   x, y, width, height, color, trans speed x, trans speed y,
  constructor(x,y,w,h,c,tsx,tsy) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.c = c
    this.tspeedx = tsx
    this.tspeedy = tsy
  }
  
  update(amt=0, amt2=0) {
    if (amt > 0) {
      this.w = amt
    }
    if (amt2 > 0) {
       this.h = amt2
    }
    this.x += this.tspeedx
    this.y += this.tspeedy
    
    if (this.x > width + this.w) {
      this.x = -this.w
    } else if (this.x < -this.w) {
      this.x = width + this.w
    }
     if (this.y > height + this.h) {
      this.y = -this.h
    } else if (this.y < -this.h) {
      this.y = height + this.h
    }
  }
}

class Square extends Shape {
  constructor(x,y,d,c,tsx,tsy) {
    super(x,y,d,d,c,tsx,tsy)
  }
  
  show() {
    push()
    translate(this.x, this.y)
    noStroke()
    fill(this.c)
    square(0, 0, this.w)
    pop()
  }
}

class Ellipse extends Shape {
  constructor(x,y,w,h,c,tsx,tsy) {
    super(x,y,w,h,c,tsx,tsy)
  }
  
   show() {
    push()
    translate(this.x, this.y)
    noStroke()
    fill(this.c)
    ellipse(0, 0, this.w, this.h)
    pop()
  }
}

class Triangle extends Shape {
  constructor(x,y,w,h,c,tsx,tsy) {
    super(x,y,w,h,c,tsx,tsy)
  }
  
  show() {
    push()
    translate(this.x, this.y)
    noStroke()
    fill(this.c)
    triangle(-this.h/2, -this.y/2, -this.h/2, this.y/2, this.h/2, 0)
    pop()
  }
}