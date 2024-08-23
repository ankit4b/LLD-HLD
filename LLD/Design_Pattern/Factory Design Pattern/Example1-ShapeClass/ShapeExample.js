/**
 * It provides a way to breate objects without exposing the instantiation logic to the client. It excapsulate the object creation process, making the code more flexible, reusable, and easier to maintain.
 */

// EXAMPLE : SHAPE

// Product interface : defines the common methods and properties for the objects to be created.
class Shape {
  constructor() {
    this.type = null;
  }

  draw() {
    throw new Error("Methid draw() must be implemented.");
  }
}

// Concrete product : specific implementation of the Product interface
class Circle extends Shape {
  constructor() {
    super();
    this.type = "circle";
  }

  draw() {
    console.log("Drawing circlr");
  }
}

class Square extends Shape {
  constructor() {
    super();
    this.type = "Square";
  }

  draw() {
    console.log("Drawing Square");
  }
}

// Factory : central class responsoble for creating objects. It has a "create" methd that takes parameters and returns the desired object instance.
class ShapeFactory {
  // Here the create method take as input and return corrresponding instance using a switch statement
  create(type) {
    switch (type) {
      case "Circle":
        return new Circle();
      case "Square":
        return new Square();
      default:
        throw new Error("Invalid shape type");
    }
  }
}

// Client code
const factory = new ShapeFactory();

const circle = factory.create("Circle");
const square = factory.create("Square");

circle.draw();
/*
OUTPUT:
Drawing circlr
*/
square.draw();
/*
OUTPUT:
Drawing square
*/
