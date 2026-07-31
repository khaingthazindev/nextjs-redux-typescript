import {useAppSelector} from "@/lib/hooks";
import {selectTodoCount, selectTodos} from "@/lib/features/todos/todoSlice";

export default function TodoCountWithRedux() {
  const count = useAppSelector(selectTodoCount);
  return (<div>
    Count: {count}
  </div>)
}