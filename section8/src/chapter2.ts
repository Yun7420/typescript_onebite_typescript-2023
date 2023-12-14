/*
  keyof 연산자
*/

type PersonB = typeof personB;

let personB = {
  name: "홍길동",
  age: 20,
}

interface PersonA {
  name: string;
  age: number;
}

// function getPropertyKey(person: PersonA, key: keyof PersonA ) {
//   return person[key]
// }

function getPropertyKey(person: PersonB, key: keyof typeof personB ) {
  return person[key]
}

let personA: PersonA = {
  name: "홍길동",
  age: 20,
}

getPropertyKey(personB, "name") // 홍길동