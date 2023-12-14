/*
  제네릭 클래스
*/

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

let numberList = new List<number>([1, 2, 3]);
numberList.pop()
numberList.push(4);
numberList.print();

let numberList2 = new List<string>(["Hello", "Typescript"]);
numberList2.pop()
numberList2.push("타입스크립트");
numberList2.print();