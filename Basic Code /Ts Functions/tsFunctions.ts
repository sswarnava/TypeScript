// TypeScript has a specific syntax for typing function parameters and return values.

// the `: number` here specifies that this function returns a number
function getTime(): number {
    return new Date().getTime();
}

// The type void can be used to indicate a function doesn't return any value.
function printHello(): void {
    console.log('Hello!');
  }

//   Parameters

function multiply(a: number, b: number) {
    return a * b;
  }

  export {}