/*
  타입 별칭
  -> 동일한 객체 타입을 선언할 때 유용하며, 재사용이 가능하다.
*/
type User = {
  id: number;
  name: string;
  bio: string;
};

let userA: User = {
  id: 1,
  name: "홍길동A",
  bio: "안녕하세요",
};

let userB: User = {
  id: 2,
  name: "홍길동B",
  bio: "안녕하세요",
};

/*
  인덱스 시그니쳐
  -> 객체 타입을 선언할 떄 규칙이 존재한다면 사용할 수 있다.

  (참고)
  -> 인덱스 시그니쳐는 규칙을 위반하지만 않는다면 오류가 발생하지 않는다.(객체 안에 프로퍼티가 존재하지 않아도 오류가 생기지 않는다는 것이다.)
  -> 이러한 오류를 해결하기 위해 반드시 Franch: string같은 값이 존재해야 한다고 정의하고 싶다면 아래 코드처럼 추가가 가능하지만 이미 정해진 인덱스 시그니쳐와 타입이 동일해야 한다.
*/
type CountryCodes = {
  [key: string]: string;
  Franch: string; // 기본적으로 들어가야 할 값
  // Franch: number; // 오류 발생 
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  Franch: "fr",
};
