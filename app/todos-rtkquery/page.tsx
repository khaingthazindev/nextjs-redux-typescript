"use client";

import TodoList from "@/app/todos-rtkquery/components/TodoList";
import { useGetTodosQuery} from "@/lib/features/todoApi/todoApiSlice";
import styles from "@/app/components/quotes/Quotes.module.css";
import { Button } from "@mui/material";
import TodoEntry from "@/app/todos-rtkquery/components/TodoEntry";

export default function TodoPage() {
  const { data:response, isError, isLoading, isSuccess, refetch } =
    useGetTodosQuery(undefined);
  
  const handleForceRefresh = () => {
    console.log('handleForceRefresh');
    refetch();
  }
  
  if (isError) {
    return (
      <div>
        <h1>There was an error!!!</h1>
      </div>
    );
  }
  
  if (isLoading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  
  if (isSuccess) {
    return (<div>
        <TodoEntry/>
        <Button variant={"contained"} onClick={handleForceRefresh}>
          Force Refresh
        </Button>
        <TodoList todos={response.data}/>
      </div>
    );
  }
}