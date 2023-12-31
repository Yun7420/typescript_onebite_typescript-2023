/*
  enum 타입 (열거형 타입)
  -> 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

  (참고)
  -> enum 타입 (열거형 타입)은 컴파일 이후 사라지지 않는다.
*/
type User = {
  name: string;
  role: number;
  language: string;
};

// -> 참고) number enum일 경우 기본으로 0부터 값이 시작한다.
// -> 참고) number enum일 경우 처음값을 10으로 지정해준다면 11, 12으로 value값을 가진다.
enum Role {
  ADMIN, // 0
  USER, // 1
  GUEST, // 2
}

enum Language {
  korean = "ko",
  english = "en",
  franch = "fr",
}

let userA: User = {
  name: "관리자",
  role: Role.ADMIN, // 0번 <- 관리자
  language: Language.korean, // ko
};

let userB: User = {
  name: "사용자",
  role: Role.USER, // 1번 <- 사용자
  language: Language.english, // en
};

let userC: User = {
  name: "게스트",
  role: Role.GUEST, // 2번 <- 게스트
  language: Language.franch, // fr
};

console.log(userA, userB, userC);
