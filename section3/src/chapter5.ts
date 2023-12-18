/*
  타입 추론
*/

let a = 10;
let b = "Hello";
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "Hong",
  },
  url: ["https://www.naver.com/"],
};

let { id, name, profile, url } = c; // 객체 구조분해 할당 추론

let [one, two, three] = [1, "Hello", true]; // 배열 구조분해 할당 추론

function func(message = "Hello") {
  return message;
}

// 암묵적 any타입 -> any타입의 진화
let d;
d = 10;
d.toFixed();

d = "Hello";
d.toUpperCase();

const num = 10; // 리터럴 타입
const str = "Hello"; // 리터럴 타입
let arr = [1, "Hello"]; // 유니온 타입
