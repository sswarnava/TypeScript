"use strict";
// -- TypeScript has a specific syntax for typing objects.
Object.defineProperty(exports, "__esModule", { value: true });
var car = {
    type: "Toyota",
    model: "Fortuner",
    year: 2025
};
// -- Type Inference
car.type = "Tata"; // no error
//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
// -- Optional Properties (mileage?)
var tataCar = {
    type: "safari"
};
tataCar.mileage = 20;
