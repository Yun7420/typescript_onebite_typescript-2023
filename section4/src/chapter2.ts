/*
  함수 타입 호환성
  -> 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것이다.

  1. 반환값의 타입이 호환되어야 한다.
  2. 매개변수의 타입이 호환되어야 한다.
*/

// 기준1. 반환값이 호환되어야한다.
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

// 업 캐스팅
a = b;

// 다운 캐스팅
b = a;

// 기준2. 매개변수가 호환되어야한다.
// 2-1. 매개변수의 개수가 같을 떄
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d;
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};

let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

animalFunc = dogFunc;
dogFunc = animalFunc;

let testFunc = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color);
};

let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때

type Func1 = (a: number, c: string) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2
func2 = func1