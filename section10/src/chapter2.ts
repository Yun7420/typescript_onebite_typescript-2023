/*
  Pick<T, K>
  -> 뽑다, 고르다
  -> 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 그런 타입
*/

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  // K extends keyof title | tags | content | thumnailURL
  // (title | content) extends keyof (title | tags | content | thumnailURL) => true
  [key in K]: T[key];
};

const pickPost: Pick<Post, "title" | "content"> = {
  title: "제목",
  content: "내용",
};

/*
  Omit<T, K>
  -> 생략하다, 빼다
  -> 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
*/

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = "tags"
// T = Post, Exclude<"title" | "tags" | "content" | "thumnailURL", "tags">
// Pick<Post, "title" | "content" | "thumnailURL">

const omitPost: Omit<Post, "tags"> = {
  title: "제목",
  content: "내용",
  thumnailURL: "URL",
};

/*
  Record<K, V>
*/

type ThumbnailLegacy = {
  large: {
    url: string;
  };

  medium: {
    url: string;
  };

  small: {
    url: string;
  };

  watch: {
    url: string;
  };
};

type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type thumnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;
