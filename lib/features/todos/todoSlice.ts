import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {type PayloadAction} from "@reduxjs/toolkit";
import {createAppSlice} from "@/lib/createAppSlice";

export interface TodoSliceState {
  todos: TodoModel[];
}

const initialState: TodoSliceState = {
  todos: []
};

export const todoSlice = createAppSlice({
  name: 'todos',
  initialState,
  reducers: (create) => ({
    loadAllTodo: create.asyncThunk(
      async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const json: TodoModel[] = await response.json();
        return json;
      },
      {
        pending: (state) => {
          console.log('Fetch todo pending');
        },
        fulfilled: (state, action) => {
          console.log('Fetch todo fulfilled');
          state.todos = action.payload;
        },
        rejected: (state) => {
          console.log('Fetch todo rejected');
        },
      }
    ),
    addTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos.push(action.payload);
    }),
    deleteTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    }),
    updateTodo: create.reducer((state, action: PayloadAction<TodoModel>) => {
      state.todos = state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo);
    })
  }),
  selectors: {
    selectTodos: (state) => state.todos,
    selectTodoCount: (state) => state.todos.length,
  },
});

export const { loadAllTodo, addTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export const { selectTodos, selectTodoCount } = todoSlice.selectors;