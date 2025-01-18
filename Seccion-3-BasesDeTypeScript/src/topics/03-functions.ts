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

interface Character {
  name: string;
  hp: number;
  //Definimos una funcion y definimos que nos va a retornar
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {
  character.hp += amount;
};

const strider: Character = {
  name: "strider",
  hp: 50,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);
  },
};

healCharacter(strider, 10);

strider.showHp();

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);
// console.log({ result });
// console.log({ result2 });
// console.log({ multiplyResult });

export {};
