import { useReducer,useState } from "react"

function reducer(data,action){
    
    switch(action.type)
    {
        case  "add" :
           return [...data, action.payload];
        case "delete" :
            return data.filter(user =>{
                return user.id !== action.payload.id;
            });
        default :
            throw new Error();
    }
     
}

const initialValue =[{id : Date.now(),firstname : 'Mahendra',lastname : 'M',email : 'mahi@gmail.com'}]

export default function useReducerExample(){

    const [data,dispatch] = useReducer(reducer,initialValue);

    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");


    function addUsers(e) {
        e.preventDefault();
        const payload = { id: Date.now(), firstname, lastname, email };
        dispatch({ type: 'add', payload: payload });
        clearField();
    }

    const clearField = () => {
        setFirstname("");
        setLastname("");
        setEmail("");
    }

    return(
        <div>
            <form onSubmit={addUsers}>
            <input type="text" 
                placeholder="Firstname" 
                value={firstname}
               onChange={(e)=> setFirstname(e.target.value)} />
            
            <input type="text" 
                placeholder="Lastname" 
                value={lastname}
               onChange={(e)=> setLastname(e.target.value)} />
            
            <input type="text" 
                placeholder="Email" 
                value={email}
               onChange={(e)=> setEmail(e.target.value)} />
               <div><button>Add</button></div>
            </form>

            <div>
            <h4>Users List</h4>
            <table className="ui celled table">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { 
                        data.map((user) =>
                         <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                            <button className="ui teal button" 
                              onClick={()=> dispatch( { type:'delete', payload: {id:user.id} } )}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
            </div>
        </div>
    )

}