"use client";

import {useParams} from "next/navigation";
import {useGetTodosQuery} from "@/lib/features/todoApi/todoApiSlice";

export default function TodoDetailPage() {
  const params = useParams<{id: string}>();
  const { todo } = useGetTodosQuery(undefined, {
    selectFromResult: ({ data }) => ({
      todo: data?.data?.find((todo) => todo._id === params.id),
    }),
  })
  
  return (<div>
    <div>
      Todo id {params.id}
    </div>
    <div>
      Title {todo?.title}
    </div>
  </div>)
}