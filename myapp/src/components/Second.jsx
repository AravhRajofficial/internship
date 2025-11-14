import React from "react";

// const Second = () =>{
//     return(
//       <>
//         <h1>Hello Arrow Function2</h1>
//       </>
//     )
// }

const QRCode = require('qrcode');

// Given values (you can change them)
let a = 45;
let b = 33;
let base = 10;
let height = 5;
let length = 6;
let width = 4;
let radius = 7;
let side = 5;

// Calculations
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

// Home Assignments
let areaTriangle = 0.5 * base * height;
let areaRectangle = length * width;
let areaCircle = Math.PI * radius * radius;
let areaCube = 6 * side * side;
let perimeterCircle = 2 * Math.PI * radius;
let areaSquare = side * side;

// Prepare text for QR Code
let qrText = `
Results:
Addition: ${add}
Subtraction: ${sub}
Multiplication: ${mul}
Division: ${div.toFixed(2)}

Home Assignments:
Area of Triangle: ${areaTriangle}
Area of Rectangle: ${areaRectangle}
Area of Circle: ${areaCircle.toFixed(2)}
Area of Cube: ${areaCube}
Perimeter of Circle: ${perimeterCircle.toFixed(2)}
Area of Square: ${areaSquare}
`;

// Generate QR code in terminal
QRCode.toString(qrText, { type: 'terminal' }, function (err, url) {
  if (err) {
    console.log('Error generating QR Code:', err);
  } else {
    console.log(url);
  }
});


export default Second;