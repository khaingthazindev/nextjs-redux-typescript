import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import TodoWithRedux from "@/app/components/todo/TodoWithRedux";

interface TodoListProps {
  todos: TodoModel[];
}

export default function TodoListWithRedux({todos}: TodoListProps) {
  return (<div>
    {todos.map(todo => <TodoWithRedux key={todo.id} todo={todo}/>)}
  </div>)
}