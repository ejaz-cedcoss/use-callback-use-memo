import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const fun1 = () => {
    setCounter1(counter1 + 1);
  };

  const fun2 = () => {
    setCounter2(counter2 + 1);
  };

/**
 * if a function has been called in between the angular bracket then if any state changes that perticular function will run 
 * to overcome this issue i have to use that function using usememo so that when perticular state changes then only run that function.
*/
  const expensiveFun = (num) => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log("expensive..");
    return num;
  };

  // with usememo(this function will run when changes in counter1):-
  const resultFun = useMemo(() => {
    return expensiveFun(counter1);
  }, [counter1]);

  //without usememo(this function will run when changes any of state):-
  // const resultFun = expensiveFun(counter1);
  return (
    <div>
      <hr></hr>
      <h3>useMemo example</h3>
      <button
        onClick={() => {
          fun1();
        }}
      >
        button1
      </button>
      <p>The value for button1 is :: {resultFun} </p>
      <button
        onClick={() => {
          fun2();
        }}
      >
        button2
      </button>
      <p>The value for button2 is :: {counter2}</p>
      <hr></hr>
    </div>
  );
};

export default UseMemo;


