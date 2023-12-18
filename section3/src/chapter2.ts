/*
  Unknown 타입
  -> 전체 집합 (최상위 타입)
*/

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownA: unknown;

  // 다운 캐스팅
  // let str: String = unknownA;
  // let num: Number = unknownA;
  // let bool: boolean = unknownA;
}

/*
  Never 타입
  -> 공 집합 (최하위 타입)
*/

function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅
  let a: number = neverFunc();
  let b: string = neverFunc();
  let c: boolean = neverFunc();

  // 다운 캐스팅
  // let neverA: never = 1;
  // let neverB: never = "string";
  // let neverC: never = true;
}

/*
  Void 타입
  -> undefined타입의 슈퍼타입
*/

function voidExam() {
  function voidFunc(): void {
    console.log("hi");

    return undefined;
  }

  // 업 캐스팅
  let voidA: void = undefined;
}

/*
  Any 타입
  -> 치트키 타입
  -> 어떤 값도 가질 수 있고, 어떤 값에 들어갈 수 있다 (never타입 제외)
*/

function anyExam() {
  let unknownA: unknown;
  let anyA: any;
  let undefinedA: undefined;
  let neverA: never;

  // 업 캐스팅
  unknownA = anyA;
  anyA = undefinedA;
  // anyA = neverA; // 오류

  // 다운 캐스팅
  anyA = unknownA;
  undefinedA = anyA;
  // neverA = anyA; // 오류
}
