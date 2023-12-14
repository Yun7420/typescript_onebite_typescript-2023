// any
// 특정 변수의 타입을 우리가 확실히 모를때
let numA: number = 10;

let anyA: any;
anyA = "hello";
anyA = true;
anyA = {};
anyA = () => {};

anyA.toUppercase();
anyA.toFixed();

numA = anyA; // numA 사용

// unknown
let unknownA: unknown;

unknownA = "hello";
unknownA = true;
unknownA = {};
unknownA = () => {};

unknownA.toUppercase();
unknownA.toFixed();

numA = unknownA; // numA 사용
