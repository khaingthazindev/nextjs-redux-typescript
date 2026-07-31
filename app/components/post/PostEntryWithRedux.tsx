import {Box} from "@mui/system";
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import {useAppDispatch} from "@/lib/hooks";
import {createPost} from "@/lib/features/post/postSlice";

let id = 100;
export function getUniqueId() {
  return id++;
}
export default function PostEntryWithRedux() {
  const dispatch = useAppDispatch();
  const [post, setPost] = useState<PostModel>({
    userId: 0,
    id: 0,
    title: '',
    body: ''
  });
  
  const handleAdd = () => {
    const newPost: PostModel = {
      userId: 1,
      id: getUniqueId(),
      title: post.title,
      body: post.body,
    }
    dispatch(createPost(newPost));
    setPost({...post, title: '', body: ''});
  }
  return (<div>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-controlled"
        label="Title"
        value={post.title}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPost({...post, title: event.target.value});
        }}
      />
      <TextField
        id="outlined-controlled"
        label="Body"
        value={post.body}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setPost({...post, body: event.target.value});
        }}
      />
      <Button variant="contained" onClick={handleAdd}>Add</Button>
    </Box>
  </div>)
}