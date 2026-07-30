"use client";

import TodoList from "@/app/components/react-with-typescript/reducer/TodoList";
import TodoEntry from "@/app/components/react-with-typescript/reducer/TodoEntry";
import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {useReducer} from "react";

interface TodoState {
  todos: TodoModel[]
}
export type TodoAction = {
  type: "ADD_TODO",
  payload: TodoModel
} | {
  type: "DELETE_TODO",
  payload: TodoModel
} | {
  type: "UPDATE_TODO",
  payload: TodoModel
}

function todoReducer(state: TodoState, action: TodoAction) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        todos: [...state.todos, action.payload]
      }; break;
    case "DELETE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }; break;
    case "UPDATE_TODO":
      return {
        todos: state.todos.filter(todo => todo.id === action.payload.id ? action.payload : todo)
      }; break;
    default:
      return {
        todos: state.todos
      }
  }
}

const todoList = [
  {
    id: '1',
    title: 'Task 1'
  },
  {
    id: '2',
    title: 'Task 2'
  },
  {
    id: '3',
    title: 'Task 3'
  },
];
const initState = {
  todos: todoList
}
export default function TodoWithReducer() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (<div>
    <TodoEntry dispatch={dispatch}/>
    <TodoList  todos={state.todos} dispatch={dispatch}/>
  </div>)
}