import {useState} from "react"
export const UseStateFunction =()=>{
    const [Count,setCount]=useState(0)
    const count=()=>{
        setCount(count+1)
    }
    const countdec=()=>{
        setCount(count-1)
    }

    return (
        <>
            <h2>My count is : {Count}</h2>
            <button onClick={() => count()}>Update count</button>
            <button onClick={() => countdec()}>Decrement count</button>
        </>
    )
        
}