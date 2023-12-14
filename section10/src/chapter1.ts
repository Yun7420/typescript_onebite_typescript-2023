/*
  Partial<T>
  -> 부분적인, 일부분의
  -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티로 바꿔주는 타입
*/

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}

type Partial<T> = {
  [key in keyof T]?: T[key];
};

const partialPost: Partial<Post> = {
  title: "",
  tags: ["타입스크립트"],
  content: "",
  // thumnailURL: "",
};

/*
  Requierd<T>
  -> 필수의, 필수적인
  -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
*/

type Required<T> = {
  [key in keyof T]-?: T[key];
};

const requiredPost: Required<Post> = {
  title: "",
  tags: ["타입스크립트"],
  content: "",
  thumnailURL: "",
};

/*
  Readonly<T>
  -> 읽기전용 수정불가
  -> 특정 객체 타입에서 모든 프로퍼티를 읽기 전용 프로퍼티로 만들어주는 타입
*/

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonylPost: Readonly<Post> = {
  title: "",
  tags: ["타입스크립트"],
  content: "",
  thumnailURL: "",
};

readonylPost.title;
readonylPost.tags;
readonylPost.content;
readonylPost.thumnailURL;
