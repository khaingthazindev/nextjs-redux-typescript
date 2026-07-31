import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import Greeting from "@/app/components/react-with-typescript/Greeting";
import SimpleCounter from "@/app/components/react-with-typescript/SimpleCounter";
import CounterWithReducer from "@/app/components/react-with-typescript/reducer/CounterWithReducer";
import ContextDemo1 from "@/app/components/react-with-typescript/context/ContextDemo1";
import ContextDemo from "@/app/components/react-with-typescript/context/ContextDemo";
import TodoWithReducer from "@/app/components/react-with-typescript/reducer/TodoWithReducer";
import TodoListWithReduxDemo from "@/app/components/todo/TodoListWithReduxDemo";
import PostListWithReduxDemo from "@/app/components/post/PostListWithReduxDemo";

export default function IndexPage() {
  return (<div>
    {/*<Counter />*/}
    
    {/*<Greeting message={"Hello"}/>*/}
    
    {/*<SimpleCounter/>*/}
    
    {/*<CounterWithReducer/>*/}
    
    {/*<ContextDemo1/>*/}
    
    {/*<ContextDemo/>*/}
    
    {/*<TodoWithReducer/>*/}
    
    {/*<TodoListWithReduxDemo/>*/}
    
    <PostListWithReduxDemo/>
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
