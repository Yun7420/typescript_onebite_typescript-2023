/*
  제네릭
*/

// 제네릭 함수
function func<T>(value: T): T {
  return value;
}

let num = func(10);

// num.toUppercase();

// if(typeof num === "number"){
//   num.toFixed();
// }

let str = func("Hello");

let bool = func(true);

// let arr = func([1, 2, 3] as [number, number, number]);
let arr = func<[number, number, number]>([1, 2, 3])