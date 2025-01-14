//Especificamos que manejamos solo string
const name: string = "Toto";

//Especificamos que manejamos solo numeros y que ademas puede ser string
let hpPoints: number | string = 95;

//Especificamos que puede ser numero o que solo puede tener el string 'Toto'
let hpPoints2: number | "Toto" = 95;

//Especificamos booleanos
const isAlive: boolean = true;

console.log({ name, hpPoints, isAlive });

export {};
