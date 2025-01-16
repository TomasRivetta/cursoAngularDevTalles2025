//Esto es un array con multiples tipos
//let skills = ["Bash", "Counter", "Healing", true,123];

//Un arreglo de strings
const skills: string[] = ["Bash", "Counter", "Healing"];

//Una interface
interface Character {
  name: string;
  hp: number;
  skills: string[];
  //Defino como que es opcional con el '?', es un string o undefined
  hometown?: string;
}

//Un objeto que sigue los lineamientos de la interface
const strider: Character = {
  name: "strider",
  hp: 100,
  skills: ["Bash", "Counter"],
};

strider.hometown = "Rivendell";

console.table(strider);

export {};
