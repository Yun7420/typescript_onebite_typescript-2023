/*
  타입스크립트의 클래스
*/

let employee = {
  name: "홍길동",
  age: 30,
  position: "developer",
  work() {
    console.log("개발자.");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일하는중입니다");
  }
}

let employeeA = new Employee("홍길동", 20, "개발자");
console.log(employeeA);
employeeA.work();

const employeeB: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

let employeeC = new ExecutiveOfficer("홍길동", 30, "개발자", 210);
