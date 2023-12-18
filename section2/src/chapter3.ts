// object 타입
// -> ? (선택적 프로퍼티) : 존재유무, undefined를 출력할 수 있다.
let user: {
  id?: number;
  name: string;
} = {
  id: 0,
  name: "홍길동",
};

// -> readonly (읽기전용 프로퍼티) : 수정이 불가능하다.
let key: {
  readonly keyNumber: string;
} = {
  keyNumber: "0000-0000-0000",
};
