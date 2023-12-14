/*
  인덱스드 엑세스 타입
*/

interface PostInterface {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

let postInterface: PostInterface = {
  title: "게시글 제목",
  content: "게시글 원본",
  author: {
    id: 1,
    name: "홍길동",
  },
};

function printAuthorInfoC(author: {id: number, name: string}) {
  console.log(`${author.name} - ${author.id}`);
  // console.log(`${author}`);
}

printAuthorInfoC(postInterface.author);
//printAuthorInfoA(postInterface.author.id);

function printAuthorInfoA(author: PostInterface["author"]) {
  console.log(`${author.name} - ${author.id}`);
  // console.log(`${author}`);
}

printAuthorInfoA(postInterface.author);
//printAuthorInfoA(postInterface.author.id);


type PostType = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[]

let postType: PostType[number] =
  {
    title: "게시글 제목",
    content: "게시글 원본",
    author: {
      id: 1,
      name: "홍길동",
      age: 20,
    },
  }

  function printAuthorInfoB(author: PostType[number]["author"]) {
    console.log(`${author.name} - ${author.id}`);
    // console.log(`${author}`);
  }
  
  printAuthorInfoB(postType.author);
  //printAuthorInfo(postInterface.author.id);

  type Tup = [number, string, boolean];

  type Tup0 = Tup[0]

  type Tup1 = Tup[1]

  type Tup2 = Tup[2]

  type Tup3 = Tup[3]

  type Tup4 = Tup[number]