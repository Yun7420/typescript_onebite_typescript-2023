/*
  void
  -> 함수 반환값이 아무것도 없음을 의미하는 타입이다.
*/
function funcA(): void {
  console.log("Hello");
}

// let a: void;
// a = 1; // 오류 발생
// a = "Hello"; // 오류 발생
// a = {}; // 오류 발생
// a = undefined // undefined값만 담을 수 있다.

/*
  never
  -> 함수 반환값이 불가능한 타입, 어떤 값도 가질 수 없다.

  (참고)
  -> 공집합 타입이기 때문에 치트키 타입인 any타입도 들어 갈 수 없다.
*/
function funcB(): never {
  while (true) {} // 무한 반복
}

function funcC(): never {
  throw new Error(); // 에러 생성
}

// let a = never;
// a = 1; // 오류
// a = {}; // 오류
// a = ""; // 오류
// a = undefined; // 오류
// a = null; // 오류
// a = anyVar // 오류