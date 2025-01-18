//Un decorador es una simple funcion

function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "New Property";
    hello = "override";
  };
}

@classDecorator
export class SuperClass {
  public myProperty: string = "avc123";

  print() {
    console.log("hola mundo");
  }
}

console.log(SuperClass);

const myClass = new SuperClass();
console.log(myClass);
