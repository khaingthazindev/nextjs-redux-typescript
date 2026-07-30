"use client";

import {useAppSelector} from "@/lib/hooks";
import {selectTodos} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/todo/TodoEntryWithRedux";
import TodoCountWithRedux from "@/app/components/todo/TodoCountWithRedux";

export default function TodoListWithReduxDemo() {
  const todos = useAppSelector(selectTodos);
  
  return (<div>
    <TodoCountWithRedux/>
    <TodoEntryWithRedux/>
    <TodoListWithRedux todos={todos}/>
  </div>)
}