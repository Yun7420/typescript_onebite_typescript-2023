/*
  배열 타입
*/
let numArrA: number[] = [1, 2, 3];
let numArrB: Array<number> = [1, 2, 3]; // 제네릭 타입

let strArrA: string[] = ["Hello", "Typescript"];
let strArrB: Array<string> = ["Hello", "Typescript"]; // 제네릭 타입

let boolArrA: boolean[] = [true, false, true];
let boolArrB: Array<boolean> = [true, false, true]; // 제네릭 타입

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiArr: (number | string)[] = [1, "Hello"]; // 유니온 타입

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

/*
  튜플 타입
  -> 길이와 타입이 고정된 배열
  -> push(), pop() 메서드를 사용해도 오류가 발생하지 않기 때문에 주의하자!
*/
let tupA: [number, string, boolean] = [1, "Hello", true];

let users: [string, number][] = [
  ["홍길동A", 1],
  ["홍길동B", 2],
  ["홍길동C", 3],
  ["홍길동D", 4],
];
