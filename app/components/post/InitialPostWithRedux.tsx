"use client";

import {Button} from "@mui/material";
import {addInitialPost} from "@/lib/features/post/postSlice";
import {getUniqueId} from "@/app/components/post/PostEntryWithRedux";
import {useAppDispatch} from "@/lib/hooks";

export default function InitialPostWithRedux() {
  const dispatch = useAppDispatch();
  const post: PostModel = {
    userId: 3,
    id: getUniqueId(),
    title: "Welcome Title",
    body: "Welcome Body",
  }
  const handleAddInitialPost = () => {
    dispatch(addInitialPost(post));
  }
  return (<div style={{marginTop: "20px", marginBottom: "20px"}}>
    <Button variant="contained" color={"success"} onClick={handleAddInitialPost}>Add Initial Post</Button>
  </div>)
}