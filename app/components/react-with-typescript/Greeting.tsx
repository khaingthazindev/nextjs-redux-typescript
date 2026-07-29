type GreetingProp = {
  message: string
}

export default function Greeting({message}: GreetingProp) {
  
  return (<div>
    Greeting {message.toUpperCase()}
  </div>)
}