/*
  타입 추론
*/

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "홍길동",
  profile: {
    nickname: "Hong",
  },
  url: ["https://www.naver.com/"],
};

let { id, name, profile, url } = c;

let [one, two, three] = [1, "Hello", true];

function func(message = "string") {
  return "hello";
}

let d;
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();

const num = 10;
const str = "hello";
let arr = [1, "string"];
