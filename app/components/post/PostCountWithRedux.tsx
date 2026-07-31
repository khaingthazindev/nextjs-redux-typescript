import {useAppSelector} from "@/lib/hooks";
import {selectPostCount} from "@/lib/features/post/postSlice";

export default function PostCountWithRedux() {
  const count = useAppSelector(selectPostCount);
  return (<div>
    {count} Posts
  </div>)
}