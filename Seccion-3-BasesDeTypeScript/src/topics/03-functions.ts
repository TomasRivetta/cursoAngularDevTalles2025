function addNumbers(a: number, b: number): number {
  return a + b;
}

const addNumbersArrow = (a: number, b: number): string => {
  return `${a + b}`;
};

// Se aconseja primero los obligatorios,
// despues los opcionales
// y despues los obligatorios con valores por defecto
function multiply(
  //Obligatorio
  firstNumber: number,
  //Opcional
  secondNumber?: number,
  //Obligatorio con valor por defecto
  base: number = 2
): number {
  return firstNumber * base;
}

const result: number = addNumbers(1, 2);
const result2: string = addNumbersArrow(1, 2);
const multiplyResult: number = multiply(5);

console.log({ result });
console.log({ result2 });
console.log({ multiplyResult });

export {};
