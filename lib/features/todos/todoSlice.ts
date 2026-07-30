import {TodoModel} from "@/app/components/react-with-typescript/reducer/TodoModel";
import {type PayloadAction} from "@reduxjs/toolkit";
import {createAppSlice} from "@/lib/createAppSlice";

export interface TodoSliceState {
  todos: TodoModel[];
}

const initialState: TodoSliceState = {
  todos: [
    {
      id: '1',
      title: 'Todo 1'
    },
    {
      id: '2',
      title: 'Todo 2'
    },
  ]
};

export const todoSlice = createAppSlice({
  name: 'todos',
  initialState,
  reducers: (create) => ({
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
  },
});

export const { addTodo, deleteTodo, updateTodo } =
  todoSlice.actions;
export const { selectTodos } = todoSlice.selectors;