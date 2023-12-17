// void
// -> 함수 반환값이 아무것도 없음을 의미하는 타입이다.
function funcA(): string {
  return "Hello";
}

function funcB(): void {
  console.log("Hello");
}

// let a: void;
// a = 1; // 오류 발생
// a = "Hello"; // 오류 발생
// a = {}; // 오류 발생
// a = undefined // undefined값만 담을 수 있다.

// never
// -> 함수 반환값이 불가능한 타입, 어떤 값도 가질 수 없다.
function funcC(): never {
  while (true) {} // 무한 반복
}

function funcD(): never {
  throw new Error(); // 에러 생성
}

// let anyVar : never;

// let a = never;
// a = 1; // 오류
// a = {}; // 오류
// a = ""; // 오류
// a = undefined; // 오류
// a = null; // 오류
// a = anyVar // 오류