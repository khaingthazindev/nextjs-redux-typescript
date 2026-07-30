import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {Button, Card, CardContent} from "@mui/material";
import {useDispatch} from "react-redux";
import {deleteTodo, updateTodo} from "@/lib/features/todos/todoSlice";

interface TodoProps {
  todo: TodoModel;
}

export default function TodoWithRedux({todo}: TodoProps) {
  const dispatch = useDispatch();
  
  const handleEdit = () => {
    let editTodo = {
      ...todo,
      title: "Updated"
    }
    
    dispatch(updateTodo(editTodo));
  }
  const handleDelete = () => {
    dispatch(deleteTodo(todo));
  }
  
  return (<div>
    <Card sx={{minWidth: 275}}>
      <CardContent>
        {todo.title}
        &nbsp;<Button variant={"contained"} onClick={handleEdit}>Edit</Button>
        &nbsp;<Button variant={"contained"} onClick={handleDelete}>Delete</Button>
      </CardContent>
    </Card>
  </div>)
}