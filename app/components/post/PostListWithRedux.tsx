import PostWithRedux from "@/app/components/post/PostWithRedux";
import './post.css'

interface PostListProps {
  posts: PostModel[]
}

export default function PostListWithRedux({posts}: PostListProps) {
  return (<div className={'post-list'}>
    {
      posts.map(post => <PostWithRedux key={post.id} post={post}/>)
    }
  </div>)
}