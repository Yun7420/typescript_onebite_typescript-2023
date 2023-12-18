/*
  서로소 유니온 타입
  -> 교집합이 없는 타입들로만 만든 유니온 타입을 말함
*/

type Admin = {
  tag: "Admin";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "Member";
  name: string;
  point: number;
};

type Guest = {
  tag: "Guest";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Memeber -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.
function login(user: User) {
  switch (user.tag) {
    case "Admin": {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }

    case "Member": {
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    }

    case "Guest": {
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
      break;
    }
  }

  if (user.tag === "Admin") {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === "Member") {
    console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  } else {
    console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  }
}

/*
  복습겸 한가지 사례
*/

// 비동기 작업을 처리하는 객체
type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력
// 성공 -> 성공 : 데이터를 출력
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중입니다.");
      break;
    }

    case "FAILED": {
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    }

    case "SUCCESS": {
      console.log(`에러 발생 : ${task.response.data}`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인입니다.",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 입니다.",
  },
};
