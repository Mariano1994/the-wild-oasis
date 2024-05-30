"use client";
import { useState } from "react";

const Counter = ({ todos }) => {
  const [count, setCount] = useState(0);

  console.log(todos);

  return (
    <div>
      <p>There are {todos.length} Tasks</p>
      <button onClick={() => setCount((c) => (c += 1))}>{count}</button>
    </div>
  );
};

export default Counter;
