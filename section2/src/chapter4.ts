// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let userA: User = {
  id: 1,
  name: "홍길동",
  nickname: "Hong",
  birth: "2000.01.01",
  bio: "안녕하세요",
  location: "인천",
};

let userB: User = {
  id: 2,
  name: "홍길동",
  nickname: "Hong",
  birth: "2000.01.01",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
  Franch: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
  Franch: "fr",
};
