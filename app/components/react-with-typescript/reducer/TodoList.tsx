import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import Todo from "@/app/components/react-with-typescript/reducer/Todo";
import {Dispatch} from "react";
import {TodoAction} from "@/app/components/react-with-typescript/reducer/TodoWithReducer";

interface TodoListProps {
  todos: TodoModel[];
  dispatch: Dispatch<TodoAction>
}

export default function TodoList({todos, dispatch}: TodoListProps) {
  return (<div>
    {todos.map(todo => <Todo key={todo.id} todo={todo} dispatch={dispatch}/>)}
  </div>)
}