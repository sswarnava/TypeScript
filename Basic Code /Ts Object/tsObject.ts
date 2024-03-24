// -- TypeScript has a specific syntax for typing objects.

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Fortuner",
    year: 2025
  };

// -- Type Inference
  car.type = "Tata"; // no error

//   car.type = 2; // Error: Type 'number' is not assignable to type 'string'.

// -- Optional Properties (mileage?)
const tataCar: { type: string, mileage?: number } = { // no error
    type: "safari"
  };
  tataCar.mileage = 20;

export {}