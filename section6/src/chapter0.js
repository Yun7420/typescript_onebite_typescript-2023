/*
  클래스
*/

let studentA = {
  name: "홍길동A",
  grade: "A",
  age: 40,
  study: () => {
    console.log("열심히 공부중입니다.");
  },
  introduce: () => {
    console.log("안녕하세요");
  },
};

let studentB = {
  name: "홍길동B",
  grade: "B",
  age: 30,
  study: () => {
    console.log("열심히 공부중입니다.");
  },
  introduce: () => {
    console.log("안녕하세요");
  },
};

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부중입니다.");
  }

  introduce = () => {
    console.log(`안녕하세요 ${this.name} 입니다.`);
  };
}

// 클래스를 이용해서 만든 객체 -> 인스턴스(현재: Student 인스턴스)
let studentC = new Student("홍길동C", "C", 20);
console.log(studentC);
studentC.study();
studentC.introduce();

class StudentDeveloper extends Student {
  favoriteSkill;

  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  programming() {
    console.log(`${this.favoriteSkill}로 개발중입니다.`);
  }
}

let studentDeveloper = new StudentDeveloper("홍길동D", "D", 10, "Typescript");
console.log(studentDeveloper);
studentDeveloper.study();
studentDeveloper.introduce();
studentDeveloper.programming();
