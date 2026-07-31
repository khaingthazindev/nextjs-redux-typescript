import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useAppDispatch} from "@/lib/hooks";
import {deletePost, updatePost} from "@/lib/features/post/postSlice";

interface PostProps {
  post: PostModel
}

export default function PostWithRedux({post}: PostProps) {
  const dispatch = useAppDispatch();
  
  const updatedPost = {
    ...post,
    title: 'Updated title',
    body: 'Updated body',
  }
  const handleEdit = () => {
    dispatch(updatePost(updatedPost));
  }
  const handleDelete = () => {
    dispatch(deletePost(post));
  }
  
  return (<div>
    <Card sx={{ minWidth: 275 }} style={{margin: '10px 0'}}>
      <CardContent>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant={"contained"} onClick={handleEdit}>Edit</Button>
        <Button size="small" variant={"contained"} color={"error"} onClick={handleDelete}>Delete</Button>
      </CardActions>
    </Card>
  </div>)
}