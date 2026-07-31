"use client";

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {loadAllTodo, selectTodos} from "@/lib/features/todos/todoSlice";
import TodoListWithRedux from "@/app/components/todo/TodoListWithRedux";
import TodoEntryWithRedux from "@/app/components/todo/TodoEntryWithRedux";
import TodoCountWithRedux from "@/app/components/todo/TodoCountWithRedux";
import {useEffect} from "react";

export default function TodoListWithReduxDemo() {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(loadAllTodo());
  }, [])
  return (<div>
    <TodoCountWithRedux/>
    <TodoEntryWithRedux/>
    <TodoListWithRedux todos={todos}/>
  </div>)
}