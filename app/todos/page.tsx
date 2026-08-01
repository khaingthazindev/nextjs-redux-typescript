"use client";

import {useEffect, useState} from "react";
import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";

export default function TodoPage() {
  console.log('TodoPage rendered');
  const [todos, setTodos] = useState<TodoModel[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => setTodos(json));
  }, []);
  
  return (<div>
    TodoPage
    {
      todos.map(todo => <div key={todo.id}>{todo.title}</div>)
    }
  </div>)
}