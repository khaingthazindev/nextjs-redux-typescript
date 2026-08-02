import {Button, Card, CardContent} from "@mui/material";
import {useDispatch} from "react-redux";
import {TodoScheme, useDeleteTodoMutation, useUpdateTodoMutation} from "@/lib/features/todoApi/todoApiSlice";
import {useRouter} from "next/navigation";

interface TodoProps {
  todo: TodoScheme;
}

export default function Todo({todo}: TodoProps) {
  const [deleteTodo, result] = useDeleteTodoMutation();
  const [updateTodo, updateResult] = useUpdateTodoMutation();
  
  const router = useRouter();
  
  const handleEdit = () => {
    let updatedTodo: TodoScheme = {
      ...todo,
      title: "Updated " + todo.title,
    }
    updateTodo(updatedTodo);
  }
  const handleDelete = (todo: TodoScheme) => {
    deleteTodo(todo)
      .then((data) => {
        console.log('handleDelete success: ', data);
      }, (error) => {
        console.log('handleDelete error: ', error);
      });
  }
  const handleDetail = (id: string) => {
    router.push(`/todos-rtkquery/${id}`);
  }
  
  return (<div>
    <Card sx={{minWidth: 275}}>
      <CardContent>
        {todo.title}
        &nbsp;<Button variant={"contained"} onClick={handleEdit}>Edit</Button>
        &nbsp;<Button variant={"contained"} onClick={() => handleDelete(todo)}>Delete</Button>
        &nbsp;<Button variant={"contained"} onClick={() => handleDetail(todo._id as string)}>Detail</Button>
      </CardContent>
    </Card>
  </div>)
}