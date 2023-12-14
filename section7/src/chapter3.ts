/*
  재네릭 인터페이스
*/

interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair1: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["value1", "value2", "value3"], 
}

/*
  인덱스 시그니쳐
*/

interface NumberMap {
  [key: string]: number;
}

let numberMap: NumberMap = {
  key1: 1234,
  key2: -1234,
};

interface Map<V> {
  [key: string]: V;
}

let stringMap: Map<string> = {
  key: "key",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/*
  재네릭 타입 별칭
*/

type Map2<V> = {
  [key: string]: V;
};

let stringMap2: Map2<string> = {
  key: "value",
};

/*
  재네릭 인터페이스의 활용 예시
  -> 유저 관리 프로그램
  -> 유저 구분: 학생 유저/ 개발자 유저
*/

interface Student {
  type: "Student";
  school: string;
}

interface Developer {
  type: "Developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

interface User2 {
  name: string;
  profile: Student | Developer;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}로 등교완료`);
}

// function goToSchool(user: User) {
//   if(user.profile.type !== "Student") {
//     user.profile // 개발자
//     console.log("잘못오셨습니다")

//     return
//   }

//   user.profile // 학생
// }

const developerUser: User<Developer> = {
  name: "홍길동A",
  profile: {
    type: "Developer",
    skill: "타입스크립트",
  },
};

const studentUser: User<Student> = {
  name: "홍길동B",
  profile: {
    type: "Student",
    school: "경희대학교",
  },
};

goToSchool(developerUser)
goToSchool(studentUser)