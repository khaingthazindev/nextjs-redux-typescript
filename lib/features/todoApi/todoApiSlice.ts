import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Create} from "sharp";
import {deleteTodo} from "@/lib/features/todos/todoSlice";

export interface TodoScheme {
  _id?: string;
  title: string;
  completed: boolean;
}
interface TodoApiResponse {
  message: string;
  data: TodoScheme[]
}
interface SingleTodoApiResponse {
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
    saveTodo: build.mutation<SingleTodoApiResponse, TodoScheme>({
      query: (newTodo: TodoScheme) => ({
        url: `todos`,
        method: 'POST',
        body: newTodo
      }),
      // Pessimistic Update
      async onQueryStarted(newTodo, { dispatch, queryFulfilled }) {
        try {
          const { data: savedTodo } = await queryFulfilled
          const patchResult = dispatch(
            todoApiSlice.util.updateQueryData('getTodos', undefined, (draft) => {
              draft.data.push(savedTodo.data);
            }),
          )
        } catch {
        }
      },
      // invalidatesTags: ["Todo"]
    }),
    deleteTodo: build.mutation<SingleTodoApiResponse, TodoScheme>({
      query: (deleteTodo: TodoScheme) => ({
        url: `todos/${deleteTodo._id}`,
        method: 'DELETE',
        body: deleteTodo
      }),
      // Optimistic Update
      async onQueryStarted(deleteTodo: TodoScheme, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todoApiSlice.util.updateQueryData('getTodos', undefined, (draft) => {
            draft.data = draft.data.filter((td: TodoScheme) => td._id !== deleteTodo._id);
          }),
        )
        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
      // invalidatesTags: ["Todo"]
    }),
    updateTodo: build.mutation<TodoApiResponse, TodoScheme>({
      query: (updateTodo: TodoScheme) => ({
        url: `todos/${updateTodo._id}`,
        method: 'PUT',
        body: updateTodo
      }),
      invalidatesTags: ["Todo"]
    })
  })
});

export const {
  useGetTodosQuery,
  useSaveTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation
} = todoApiSlice;