// object
// ? 선택적 프로퍼티
// readonly 읽기전용 프로퍼티
let user: {
  readonly id: number;
  name?: string;
} = {
  id: 0,
  name: "홍길동",
};