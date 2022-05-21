import React,{useState} from 'react'

export default function UserList() {

    const initialData = {id:1,firstname:"Roman",lastname:"Reign",email:"roman@gmail.com"};
    const [users, setUsers] = useState([initialData]);
    console.log(users)
    return (
        <div>
            <h4>Users List</h4>
            <table border="1">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>
                         <tr id={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                        </tr>
                        )
                    }
                
                </tbody>
            </table>
        </div>
    )
}
