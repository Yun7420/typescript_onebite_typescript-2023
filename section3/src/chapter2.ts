/*
  Unknown 타입
*/

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = "Hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스팅
  // let unknownA: unknown;

  // let str: String = unknownA;
  // let num: Number = unknownA;
  // let bool: boolean = unknownA;
}

/*
  Never 타입
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
*/

function anyExam() {
  let unknownA: unknown;
  let anyA: any;
  let undefinedA: undefined;
  let neverA: never;

  // 업 캐스팅
  unknownA = anyA;
  anyA = undefinedA;
  // anyA = neverA;

  // 다운 캐스팅
  anyA = unknownA;
  undefinedA = anyA;
  // neverA = anyA;
}
