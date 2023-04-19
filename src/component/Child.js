import React, { memo } from "react";

const Child = ({ todos, addTodosFun }) => {
  console.log("child render...");
//   console.log("todos: ", todos);
  const func = () => {
     console.log("func...");
  }
  return (
    <div>
      <button onClick={() => addTodosFun()}>save todo(child)</button>
      {/* {todos.map((item) => {
        return <h4>{item}</h4>;
      })} */}
    </div>
  );
};

export default memo(Child);
