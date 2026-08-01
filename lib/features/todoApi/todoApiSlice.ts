import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Create} from "sharp";

export interface TodoScheme {
  _id?: string;
  title: string;
  completed: boolean;
}
interface TodoApiResponse {
  message: string;
  data: TodoScheme[]
}
interface CreateTodoApiResponse {
  message: string;
  data: TodoScheme
}

export const todoApiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/" }),
  reducerPath: "todoApi",
  tagTypes: ["Todo"],
  endpoints: (build) => ({
    getTodos: build.query<TodoApiResponse, undefined>({
      query: (undefined) => `todos`,
      providesTags: ["Todo"]
    }),
    saveTodo: build.mutation<CreateTodoApiResponse, TodoScheme>({
      query: (newTodo: TodoScheme) => ({
        url: `todos`,
        method: 'POST',
        body: newTodo
      }),
      invalidatesTags: ["Todo"]
    }),
  })
});

export const {useGetTodosQuery, useSaveTodoMutation} = todoApiSlice;