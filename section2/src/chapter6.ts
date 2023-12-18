// any 타입
// -> 특정 변수의 타입을 우리가 확실히 모를때
// -> 어떤 값도 가질 수 있고, 어떤 값에 들어갈 수도 있다. (never 타입 제외)
let anyA: any;
anyA = "Hello";
anyA = true;
anyA = {};
anyA = () => {};

// anyA.toUppercase(); // 오류를 발생시키지 않아서 조심히 사용하자!
// anyA.toFixed(); // 오류를 발생시키지 않아서 조심히 사용하자!

// let numA: number = 10;
// numA = anyA; // 오류를 발생시키지 않아서 조심히 사용하자!

// unknown 타입
let unknownA: unknown;

unknownA = "Hello";
unknownA = true;
unknownA = {};
unknownA = () => {};

// unknownA.toUppercase(); // 오류를 발생시켜서 any타입보다 권장한다.
// unknownA.toFixed(); // 오류를 발생시켜서 any타입보다 권장한다.

// numA = unknownA; // // 오류를 발생시켜서 any타입보다 권장한다.
