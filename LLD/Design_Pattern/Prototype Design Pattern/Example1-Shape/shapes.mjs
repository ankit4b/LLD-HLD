export class Shape {
  constructor(name) {
    this.name = name;
    this.rotationEnabled = false;
  }

  toggleRotation() {
    this.rotationEnabled = !this.rotationEnabled;
    return this.rotationEnabled;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
  }
}

export class Rectangle extends Shape {
  constructor(width, height) {
    super(width === height ? "Square" : "Rectangle");
    this.width = width;
    this.height = height;
  }

  logInfo() {
    console.log(this);
  }
}

export class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
}
