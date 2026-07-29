'use client';

import {useReducer} from "react";

interface CounterState {
  count: number
}
type CounterAction = {
  type: "INCREMENT"
} | {
  type: "DECREMENT"
}
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  switch (action.type) {
    case "INCREMENT": {
      return {
        count: state.count + 1
      }
    }; break;
    case "DECREMENT": {
      return {
        count: state.count - 1
      }
    }; break;
    default:
      return {
        ...state
      }
  }
}

const initState: CounterState = {count: 0};
export default function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, initState);
  
  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT"
    })
  }
  const handleDecrease = () => {
    dispatch({
      type: "DECREMENT"
    })
  }
  
  return (<div>
    <button onClick={handleIncrease}>+1</button>
    &nbsp; {state.count}
    &nbsp; <button onClick={handleDecrease}>-1</button>
  </div>)
}