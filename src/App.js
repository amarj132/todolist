import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (input) => {
    if(input !== "")
    setListTodo([...listTodo, input]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  };

  return (
    <>
      <div className="flex justify-center mt-16">
        <TodoInput addList={addList} />
      </div>
      <div className=" ">
      <h1 className="text-4xl font-bold ml-40 mt-10 underline">TODO</h1>
      
      </div>
      <div className="flex flex-col  items-center mt-16">
        {listTodo.map((listItem, i) => {
          return <TodoList key={i} item={listItem} deleteItem={deleteListItem} index={i} />;
        })}
      </div>
    </>
  );
}

export default App;
