/*
  any 타입
  -> 특정 변수의 타입을 우리가 확실히 모를때
  -> 어떤 값도 가질 수 있고, 어떤 값에 들어갈 수도 있다. (never 타입 제외)
*/
let anyA: any;
anyA = "Hello";
anyA = true;
anyA = {};
anyA = () => {};

// anyA.toUppercase(); // 오류를 발생시키지 않아서 조심히 사용하자!

// let numA: number = 10;
// numA = anyA; // 오류를 발생시키지 않아서 조심히 사용하자!

/*
  unknown 타입
  -> 최상위 타입으로 어느 값도 가질 수 있지만, 어느 값에도 들어갈 수는 없다.
*/
let unknownA: unknown;
unknownA = "Hello";
unknownA = true;
unknownA = {};
unknownA = () => {};

// unknownA.toUppercase(); // 오류를 발생시켜서 any타입보다 권장한다.

// let numA: number = 10;
// numA = unknownA; // // 오류를 발생시켜서 any타입보다 권장한다.

/*
  타입 정재
  unKnown타입은 어느값에도 들어갈 수 없지만 if문을 통해서 타입을 정해주면다면 그 타입에 들어갈 수 있다.
*/
let numA = 0;

if(typeof unknownA === "number") {
    numA = unknownA;
}