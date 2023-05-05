import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement(){

    setCount(count + -1);

  }

  return (
  <div>
  
  <button onClick={increment}>I have been clicked {count} times</button><br/><br/>
  <button onClick={decrement}>I have been unclicked {count} times</button>
  <h1>{count}</h1>
  </div>
  )
}

export default Counter;