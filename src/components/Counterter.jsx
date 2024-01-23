import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/counterSlice/Counter";

function Counter() {
  const result = useSelector((store) => store.konter.counterValue);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>number is : {result}</h2>
      <button onClick={() => dispatch(increase())}>increase</button>
      <button onClick={() => dispatch(decrease())}>decrease</button>
    </div>
  );
}

export default Counter;
