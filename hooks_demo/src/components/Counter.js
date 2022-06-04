import React,{useReducer} from 'react'


const reducer = (state, action) =>{

    switch (action.type){

        case "increment" :
            return state + 1;

        case "decrement" :
            return state -1;
        
        default :
           throw new Error();
    }

}

export default function Counter() {

    const [state, dispatch] = useReducer(reducer,0);

    return (
        <div>
           <h3>Count : {state}</h3> 
           <div>
                <button onClick={()=> dispatch({type:'increment'})}>Increment</button> 
                <button onClick={()=> dispatch({type:'decrement'})}>Decrement</button>
           </div>
          
        </div>
    )
}
