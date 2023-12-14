/*
  인터페이스와 클래스
*/

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class CharacterClass implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move() {
    console.log(`${this.moveSpeed}로 이동입합니다.`);
  }
}
