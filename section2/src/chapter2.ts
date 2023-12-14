// 배열
let numArrA: number[] = [1, 2, 3];
let numArrB: Array<number> = [1, 2, 3];

let strArrA: string[] = ["Hello", "Typescript"];
let strArrB: Array<string> = ["Hello", "Typescript"];

let boolArrA: boolean[] = [true, false, true];
let boolArrB: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "Hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// 튜플
// 길이와 타입이 고정된 배열
let tupA: [number, string, boolean] = [1, "Hello", true];

const users: [string, number][] = [
  ["이름A", 1],
  ["이름B", 2],
  ["이름C", 3],
  ["이름D", 4],
];
