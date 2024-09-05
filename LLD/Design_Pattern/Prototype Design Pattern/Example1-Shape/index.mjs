import { Shape, Rectangle, Square, Circle } from "./shapes.mjs";

const shapeObj = new Shape();
console.log("shapeObj : ", shapeObj);

const rectObj = new Rectangle(50, 20);
console.log("rectObj : ", rectObj);
console.log("rectObj __proto__ : ", rectObj.__proto__);

const sqrObj = new Square(30);
console.log("sqrObj : ", sqrObj);
console.log("sqrObj __proto__ : ", sqrObj.__proto__);

const cirObj = new Circle(5);
console.log("cirObj : ", cirObj);

/* OUTPUT:

shapeObj :  Shape { name: undefined, rotationEnabled: false }

rectObj :  Rectangle {
  name: 'Rectangle',
  rotationEnabled: false,
  width: 50,
  height: 20
}
rectObj __proto__ :  Shape {}

sqrObj :  Square {
  name: 'Square',
  rotationEnabled: false,
  width: 30,
  height: 30
}
sqrObj __proto__ :  Rectangle {}

cirObj :  Circle { 
  name: 'circle', 
  rotationEnabled: false, 
  radius: 5 
  }

 */
