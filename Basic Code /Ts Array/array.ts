const names01: string[] = [];
names01.push("Dylan"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// The readonly keyword can prevent arrays from being changed.
const names02: readonly string[] = ["Dylan"];
// names02.push("Jack"); Error: Property 'push' does not exist on type 'readonly string[]'.

export {}