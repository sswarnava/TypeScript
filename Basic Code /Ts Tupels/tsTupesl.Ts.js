"use strict";
// Typed Arrays
// A tuple is a typed array with a pre-defined length and types for each index.
Object.defineProperty(exports, "__esModule", { value: true });
// define our tuple
var ourTuple;
// initialize correctly
ourTuple = [5, false, 'swarnava'];
// initialized incorrectly which throws an error
// ourTuple = [false, 'swarnava', 5];
// Named Tuples
// Named tuples allow us to provide context for our values at each index.
var graph = [55.2, 41.3];
var x = graph[0], y = graph[1];
