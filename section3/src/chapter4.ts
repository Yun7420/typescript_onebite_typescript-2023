/*
  대수 타입
  -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
  -> 합집합 타입과 교집합 타입이 존재합니다.
*/

/*
  1. 합집합 - Union 타입
*/

let a: number | string | boolean;
a = 1;
a = "Hello";
a = true;

let arr: (number | string | boolean)[] = [1, "Hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union = Dog | Person;

// 가능
let union1: Union = {
  name: "",
  color: "",
};

let union2: Union = {
  name: "",
  language: "",
};

let union3: Union = {
  name: "",
  color: "",
  language: "",
};

// 불가능
// let union4: Union = {
//   name: "",
// }

/*
  2. 교집합 타입 - Intersection 타입
*/

type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "string",
  color: "string",
  language: "string",
};