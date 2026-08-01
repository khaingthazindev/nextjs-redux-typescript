import {Button, Card, CardContent} from "@mui/material";
import {useDispatch} from "react-redux";
import {TodoScheme} from "@/lib/features/todoApi/todoApiSlice";
import {useRouter} from "next/navigation";

interface TodoProps {
  todo: TodoScheme;
}

export default function Todo({todo}: TodoProps) {
  console.log("Todo Page");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const handleEdit = () => {
    let editTodo = {
      ...todo,
      title: "Updated"
    }
  }
  const handleDelete = () => {
  }
  const handleDetail = (id: string) => {
    router.push(`/todos-rtkquery/${id}`);
  }
  
  return (<div>
    <Card sx={{minWidth: 275}}>
      <CardContent>
        {todo.title}
        &nbsp;<Button variant={"contained"} onClick={handleEdit}>Edit</Button>
        &nbsp;<Button variant={"contained"} onClick={handleDelete}>Delete</Button>
        &nbsp;<Button variant={"contained"} onClick={() => handleDetail(todo._id)}>Detail</Button>
      </CardContent>
    </Card>
  </div>)
}