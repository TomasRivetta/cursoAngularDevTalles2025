export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola mundo");

const amINumber = whatsMyType<number>(100);

const aimIArray = whatsMyType<number[]>([1, 2, 3, 4, 5, 6]);

console.log(amIString.split(" "));
console.log(amINumber.toFixed());
console.log(aimIArray.length);
