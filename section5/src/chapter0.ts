/*
  인터페이스
*/

type Func = {
  (): void;
};

let func: Func = () => {
  console.log("Hi");
};

interface Person {
  readonly name: string;
  age?: number;
  sayHi(a: number): void;
  sayHi(a: number, b?: number, c?: number): void;
  sayBye: (a: string) => void;
}

type Type1 = number | string | Person;
type Type2 = number & string  & Person;

let person: Person = {
  name: "홍길동",
  sayHi: function () {
    console.log("Hi");
  },
  sayBye: (a) => {
    console.log(a)
  }
};

person.sayHi(1);
person.sayHi(1, 2, 3);
person.sayBye("Bye")

type Dog = {
  isBark : (a:string) => void;
}

let dog : Dog = {
  isBark : (a) => {
    console.log(a)
  }
}

dog.isBark("멍멍")