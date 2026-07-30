import {useAppSelector} from "@/lib/hooks";
import {selectTodos} from "@/lib/features/todos/todoSlice";

export default function TodoCountWithRedux() {
  const todos = useAppSelector(selectTodos);
  return (<div>
    Count: {todos.length}
  </div>)
}