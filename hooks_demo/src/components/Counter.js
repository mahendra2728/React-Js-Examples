import React,{useState} from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);


    const increment = ()=>{
        setCount(count+5);
    }

    return (
        <div>
           <h3>Count : {count}</h3> 
           <div>
                <button onClick={increment}>Increment By 5</button>   <button onClick={()=> setCount(count+10)}>Increment By 10</button><br></br>
                <button onClick={()=> setCount(count-5)}>Decrement By 5</button>  <button onClick={()=> setCount(count-10)}>Decrement By 10</button>
           </div>
          
        </div>
    )
}
