export class Person {
  //   public name: string;
  //   private address: string;

  constructor(
    public firstName: string,
    public lastName: string,
    private address: string = "No Address"
  ) {}
}

// export class Hero extends Person {

//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     //Funcion que le indica a typescript que debe llamar al constructor del padre
//     super(realName, "New York");
//   }
// }

export class Hero {
  //   public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony", "Stark", "new York");
const ironMan = new Hero("IronMan", 45, "Tony", tony);

console.log(ironMan);
