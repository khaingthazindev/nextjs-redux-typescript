"use client"

import {Button, TextField} from "@mui/material";
import {Box} from "@mui/system";
import {Dispatch, useState} from "react";
import {TodoAction} from "@/app/components/react-with-typescript/reducer/TodoWithReducer";
import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";

interface TodoEntryProps {
  dispatch: Dispatch<TodoAction>
}

let id = 3;
function getUniqueId() {
  return id++;
}

export default function TodoEntry({dispatch}: TodoEntryProps) {
  const [task, setTask] = useState('');
  
  const handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  }
  
  const handleAdd = () => {
    let newTodo: TodoModel = {
      id: getUniqueId() + "",
      title: task
    };
    
    dispatch({
      type: "ADD_TODO",
      payload: newTodo
    })
    
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