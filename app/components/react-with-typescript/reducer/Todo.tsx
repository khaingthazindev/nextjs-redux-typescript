import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Dispatch} from "react";
import {TodoAction} from "@/app/components/react-with-typescript/reducer/TodoWithReducer";

interface TodoProps {
  todo: TodoModel;
  dispatch: Dispatch<TodoAction>
}

export default function Todo({todo, dispatch}: TodoProps) {
  const handleEdit = () => {
  
  }
  const handleDelete = () => {
    dispatch({
      type: "DELETE_TODO",
      payload: todo
    })
  }
  
  return (<div>
    <Card sx={{minWidth: 275}}>
      <CardContent>
        {todo.title}
        <Button variant={"contained"} onClick={handleEdit}>Edit</Button>
        <Button variant={"contained"} onClick={handleDelete}>Delete</Button>
      </CardContent>
    </Card>
  </div>)
}