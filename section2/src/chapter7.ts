// void
// void -> 아무것도 없음을 의미하는 타입이다.
function funcA(): string {
  return "hello";
}

function funcB(): void {
  console.log("hello");
}

// never
// 불가능한 타입
function funcC(): never {
  while (true) {}
}

function funcD(): never {
  throw new Error();
}