"use client";

import {useAppDispatch, useAppSelector} from "@/lib/hooks";
import {loadAllPosts, selectPosts} from "@/lib/features/post/postSlice";
import PostListWithRedux from "@/app/components/post/PostListWithRedux";
import PostEntryWithRedux from "@/app/components/post/PostEntryWithRedux";
import {useEffect} from "react";
import PostCountWithRedux from "@/app/components/post/PostCountWithRedux";
import InitialPostWithRedux from "@/app/components/post/InitialPostWithRedux";

export default function PostListWithReduxDemo() {
  const posts = useAppSelector(selectPosts);
  
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAllPosts())
  }, [])
  
  return (<div>
    <InitialPostWithRedux/>
    <PostCountWithRedux/>
    <PostEntryWithRedux/>
    <PostListWithRedux posts={posts}/>
  </div>)
}