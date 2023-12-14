// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
type User = {
  name: string;
  role: number;
  language: string;
};

enum Role {
  ADMIN,
  USER,
  GUEST,
}

enum Language {
  korean = "ko",
  english = "en",
  franch = "fr",
}

const userA: User = {
  name: "관리자",
  role: Role.ADMIN, // 0번은 관리자
  language: Language.korean,
};

const userB: User = {
  name: "사용자",
  role: Role.USER, // 1번은 사용자
  language: Language.english,
};

const userC: User = {
  name: "게스트",
  role: Role.GUEST, // 2번은 게스트
  language: Language.franch,
};

console.log(userA, userB, userC);
