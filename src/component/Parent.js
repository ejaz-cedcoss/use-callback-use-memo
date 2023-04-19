import React, { useCallback, useState } from "react";
import Child from "./Child";

/**
 * useCallback is used for memoizing the function .
 * if parent component has child component :: if any changes happens in parent component then child component will render
 * to overcome this issue we use memo ..if i wrap child component with memo .. then child component will not render..
 * but if i pass any props to the child comp. and if props changes then while using memo it will render
 * to overcome this issue i have to use usecallback in parent to the perticular props(function)
 */
const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState([]);

  //withou usecallback:-
  // function addTodosFun() {
  //   setTodos((prev) => [...prev, "new Todo"]);
  // }

  // with usecallback
  const addTodosFun = useCallback(() => {
    setTodos((prev) => [...prev, "new Todo"]);
  }, [todos]);
  return (
    <div>
      <h3>UseCallback example</h3>
      <Child todos={todos} addTodosFun={addTodosFun} />
      <br />
      {/* <Child /> */}
      <button onClick={() => setCounter(counter + 1)}>
        counter(parent): {counter}
      </button>
    </div>
  );
};

export default Parent;
