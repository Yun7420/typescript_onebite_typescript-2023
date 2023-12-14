/*
  맵드 타입
*/

interface UserInterface {
  id: number;
  name: string;
  age: number;
}

type UserType = {
  [key in "id" | "name" | "age"]?: UserInterface[key]
}

type BooleanUser = {
  [key in keyof UserInterface]: boolean
}

type ReadonlyUser = {
  readonly [key in keyof UserInterface]: UserInterface[key]
}

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): ReadonlyUser {
  // ... 기능

  return {
    id: 1,
    name: "홍길동",
    age: 20,
  };
}

const user = fetchUser()
user.id("abc")

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: UserType) {
  // ... 수정하는 기능
}

updateUser({
  // id: 1,
  // name: "홍길동",
  age: 25,
});
