function Square(a) {
  this.side = a;
}

Square.prototype.getArea = function() {
  return this.side * this.side;
}

Square.prototype.getPerimeter = function() {
  return this.side * 4;
}
