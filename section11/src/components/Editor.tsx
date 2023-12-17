import React, { ReactElement, useContext } from "react";
import { useState } from "react";
import { useTodoDispatch } from "../App";

interface Props {
  children: ReactElement;
}

const Editor = (props: Props) => {
  const dispatch = useTodoDispatch()

  const [text, setText] = useState("");

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onClickButton = () => {
    dispatch.onClickAdd(text)
    setText("")
  };

  return (
    <div>
      <input value={text} onChange={onChangeInput} />
      <button onClick={onClickButton}>추가</button>
      {props.children}
    </div>
  );
};

export default Editor;
