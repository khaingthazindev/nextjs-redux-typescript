"use client"

import {Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {useState} from "react";
import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {useAppDispatch} from "@/lib/hooks";
import {addTodo} from "@/lib/features/todos/todoSlice";

let id = 3;

function getUniqueId() {
  return id++;
}

export default function TodoEntryWithRedux() {
  const dispatch = useAppDispatch();
  const [task, setTask] = useState('');
  
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }
  
  const handleAdd = () => {
    let newTodo: TodoModel = {
      id: getUniqueId() + "",
      title: task
    };
    
    dispatch(addTodo(newTodo));
    
    setTask("");
  }
  
  return (<div>
    <Box
      component="form"
      sx={{'& > :not(style)': {m: 1, width: '25ch'}}}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Task"
        variant="standard"
        value={task}
        onChange={handleTaskChange}/>
      <Button variant={"contained"} onClick={handleAdd}>Add</Button>
    </Box>
  </div>)
}