/*
  첫번쨰 사례
*/

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/*
  두번쨰 사례
*/

function func<T>(value: T[]) {
  return value[0];
}

let num = func([1, 2, 3]);
// 1
let str = func([1, "Hello", "Typescript"]);
// Hello

/*
  세번째 사례
*/

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]); // 3

let var2 = getLength("12345"); // 5

let var3 = getLength({ length: 10 }); // 10

let var4 = getLength(10);
