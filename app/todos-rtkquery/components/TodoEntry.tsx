"use client"

import {Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {useState} from "react";
import {TodoScheme, useSaveTodoMutation} from "@/lib/features/todoApi/todoApiSlice";

export default function TodoEntry() {
  const [saveTodo, result] = useSaveTodoMutation();
  
  const [task, setTask] = useState('');
  
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }
  
  const handleAdd = () => {
    let newTodo: TodoScheme = {
      title: task,
      completed: false
    };
    const saveResult = saveTodo(newTodo);
    console.log('saveResult: ', saveResult);
    
    setTask("");
  }
  
  return (<div>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
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