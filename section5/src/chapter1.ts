/*
  인터페이스 확장
*/

type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  name: "dog"; // Animal 슈퍼타입 Dog 서브타입 일떄 가능
  isBark: boolean;
}

let dog: Dog = {
  name: "dog",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {
  name: "dog";
}

let dogCat: DogCat = {
  name: "dog",
  color: "",
  isBark: true,
  isScratch: true,
};
