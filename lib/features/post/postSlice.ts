import {createAppSlice} from "@/lib/createAppSlice";
import {PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "@/lib/store";
import {incrementByAmount, selectCount} from "@/lib/features/counter/counterSlice";

interface PostSliceState {
  posts: PostModel[]
}

const initialState: PostSliceState = {
  posts: []
}

export const postSlice = createAppSlice({
  name: "post",
  initialState,
  reducers: (create) => ({
    loadAllPosts: create.asyncThunk(
      async() => {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        return json;
      },
      {
        pending: () => {
          console.log('pending fetching posts')
        },
        fulfilled: (state, action) => {
          state.posts = action.payload;
        },
        rejected: () => {
          console.log('rejected fetching posts');
        }
      }
    ),
    createPost: create.reducer((state, action: PayloadAction<PostModel>) => {
      state.posts.push(action.payload);
    }),
    updatePost: create.reducer((state, action: PayloadAction<PostModel>) => {
      state.posts = state.posts.map(post => post.id === action.payload.id ? action.payload : post);
    }),
    deletePost: create.reducer((state, action: PayloadAction<PostModel>) => {
      state.posts = state.posts.filter(post => post.id !== action.payload.id ? true : false);
    })
  }),
  selectors: {
    selectPosts: (state) => state.posts,
    selectPostCount: (state) => state.posts.length,
  }
});

export const {loadAllPosts, createPost, updatePost, deletePost} = postSlice.actions;
export const {selectPosts, selectPostCount} = postSlice.selectors;

export const addInitialPost = (post: PostModel): AppThunk => (dispatch, getState) => {
  const totalPosts = selectPostCount(getState());
  if (totalPosts === 0) {
    dispatch(createPost(post));
  }
}