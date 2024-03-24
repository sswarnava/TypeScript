// TypeScript Classes

// -- Members: Types

class Person01 {
    name: string;
  }
  
  const person01 = new Person01();
  person01.name = "Ramu";

// -- Members: Visibility

class Person02 {
    private name: string;
  
    public constructor(name: string) {
      this.name = name;
    }
  
    public getName(): string {
      return this.name;
    }
  }
  
  const person02 = new Person02("Jane");
  console.log(person02.getName()); // person02.name isn't accessible from outside the class since it's private

  // -- Inheritance: Implements

  interface Shape {
    getArea: () => number;
  }
  
  class RectangleInheritance implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}
  
    public getArea(): number {
      return this.width * this.height;
    }
  }

  // -- Abstract Classes

  abstract class Polygon {
    public abstract getArea(): number;
  
    public toString(): string {
      return `Polygon[area=${this.getArea()}]`;
    }
  }
  
  class Rectangle extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
      super();
    }
  
    public getArea(): number {
      return this.width * this.height;
    }
  }

 export {}