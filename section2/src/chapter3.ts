/*
  object 타입
  -> ? (선택적 프로퍼티) : 그 타입에 해당하는 값이 있어도되고 없어도 되며, undefined값을 출력하기 때문에 사용 시 주의하자!
  -> readonly (읽기전용 프로퍼티) : 그 타입에 해당하는 값은 수정이 불가능하게 만든다.
*/
// 기본 객체 타입
let userA: {
  id: number;
  name: string;
} = {
  id: 0,
  name: "홍길동",
};

// ?(선택적 프로퍼티)
let userB: {
  id?: number;
  name: string;
} = {
  id: 0,
  name: "홍길동",
};

// readonly (읽기전용 프로퍼티)
let userC: {
  readonly id: number;
  name: string;
} = {
  id: 0,
  name: "홍길동",
};
