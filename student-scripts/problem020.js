class Square {
  constructor(a) {
    this.side = a;
  }

  getArea() {
    return this.side * this.side;
  }

  getPerimeter() {
    return this.side * 4;
  }
}