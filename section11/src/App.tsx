import React, { useEffect, useReducer, useRef, useState, createContext, useContext } from "react";

// Css
import "./App.css";

// Components
import Editor from "./components/Editor";
import TodoItem from "./components/TodoItem";

// Types
import { Todo } from "./types";


type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | {
      type: "DELETE";
      id: number;
    };

function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }

    case "DELETE": {
      return state.filter((todo) => todo.id !== action.id);
    }
  }
}

const TodoStateContext = createContext<Todo[] | null>(null);
const TodoDispatchContext = createContext<{ onClickAdd: (text: string) => void; onClickDelete: (id: number) => void; } | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext)

  if(!dispatch) throw new Error("TodoDispatchContext에 문제가 있다.")

  return dispatch;
}

function App() {
  const [todos, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickDelete = (id: number) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={{ onClickAdd, onClickDelete }}>
          <Editor>
            <div>child</div>
          </Editor>
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} id={todo.id} content={todo.content} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
