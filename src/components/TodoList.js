import React from "react";

const TodoList = (props) => {
  return (
    <div className="rounded-md   border-2  p-2 m-2 border-black w-[500px] ">
      <li className=" flex justify-between">
        {props.item}
        <span
          className=" rounded-md ml-3  p-2 bg-slate-600 hover:bg-red-400 "
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        >
          Delete
        </span>
      </li>
    </div>
  );
};

export default TodoList;
