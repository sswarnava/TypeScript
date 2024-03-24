// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'swarnava'];

// initialized incorrectly which throws an error
// ourTuple = [false, 'swarnava', 5];

// Named Tuples
// Named tuples allow us to provide context for our values at each index.

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;

export {}