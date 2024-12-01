import { useEffect, useState } from "react"

export const ReactUseEffect=()=>{
    const [count,setCount]=useState(0);
    const[name,setName]=useState("");
    useEffect(()=>{
        // document.title=`Count: ${count}`
        // console.log("Name: ",name)
        const timer=setInterval(()=>{setCount((prev)=>prev+1)},1000)
        return ()=>clearInterval(timer);
    },[count])
    return(
        <div>
            <h1>Hello, UseEffect Challenge!!</h1>
            <p>Count: {count}</p>
            {/* <button onClick={()=>{setCount(count+1)}}>Increment</button> */}
            <p>Name: {name}</p>
            <input placeholder="Enter your Name" 
                type="text"
                name="name"
                value={name} 
                autoComplete="off"
                onChange={(e)=>{setName(e.target.value)}}
            />
        </div>
    )
}