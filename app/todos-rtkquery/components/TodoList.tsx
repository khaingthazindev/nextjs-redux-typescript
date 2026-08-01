import Todo from "@/app/todos-rtkquery/components/Todo";
import {TodoScheme} from "@/lib/features/todoApi/todoApiSlice";

interface TodoListProps {
  todos: TodoScheme[]
}

export default function TodoList({todos}: TodoListProps) {
  console.log('TodoList');
  return (<div>
    {
      todos.map(todo => <Todo key={todo._id} todo={todo}/>)
    }
  </div>)
}