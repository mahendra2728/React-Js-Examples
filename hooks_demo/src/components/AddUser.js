import React,{useState} from 'react'

export default function AddUser() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div>
            <h4>Add User</h4>
            <form>
                FirstName : <input type="text" value={firstName}/>
                LastName : <input type="text" value={lastName}/>
                Email : <input type="text" value={email}/>
            </form>
        </div>
    )
}
