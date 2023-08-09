import React, { useState } from "react";

const TodoInput = (props) => {
  const [input, setInput] = useState("");

  const handleEnter = (e) => {
    if(e.keyCode === 13){
        props.addList(input)
        setInput("")
    }
  }

  return (
    <div className="">
      <input
        type="text"
        className="rounded-md p-2 w-96"
        placeholder="Enter your todo"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyDown={handleEnter}
      />
      <button
        className="rounded-md ml-2 p-2 bg-slate-600"
        onClick={() => {
          props.addList(input);
          setInput("");
        }}
      >
        ADD
      </button>
    </div>
  );
};

export default TodoInput;
