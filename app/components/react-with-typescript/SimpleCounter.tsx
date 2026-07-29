"use client"

import {useState} from "react";

export default function SimpleCounter() {
  let [count, setCount] = useState(0);
  
  const handleIncrease = () => {
    setCount(count + 1)
  }
  const handleDecrease = () => {
    setCount(count - 1)
  }
  return (<div>
    <button onClick={handleIncrease}>+1</button>
    &nbsp; {count}
    &nbsp; <button onClick={handleDecrease}>-1</button>
  </div>)
}