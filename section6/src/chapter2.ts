/*
  접근 제어자
  access modifier
  -> public private proteced
*/

class Employee {
  // 필드

  // 생성자
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  // 메서드
  work() {
    console.log(`${this.name}님 일하는중입니다.`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  // 생성자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //메서드
  func() {
    console.log(`${this.age}`);
  }
}

let employee = new Employee("홍길동A", 20, "개발자");
// employee.name = "홍길동B";
// employee.age = 30;
employee.position = "디자이너";
