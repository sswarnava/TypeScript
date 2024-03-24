"use strict";
// TypeScript has a specific syntax for typing function parameters and return values.
Object.defineProperty(exports, "__esModule", { value: true });
// the `: number` here specifies that this function returns a number
function getTime() {
    return new Date().getTime();
}
// The type void can be used to indicate a function doesn't return any value.
function printHello() {
    console.log('Hello!');
}
//   Parameters
function multiply(a, b) {
    return a * b;
}
