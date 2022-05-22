import React,{useRef} from 'react';
import { Link } from 'react-router-dom';

export default function UserList(props) {

    const searchTerm = useRef("");

    const deleteUser = (id)=>{
        console.log(id)
        alert('Are you are sure want to delete ?')
        props.deleteUserHandler(id);
    }
    
    const searchText =()=>{
        props.searchHandler(searchTerm.current.value)
    }

    return (
        <>
            <h4>Users List</h4>
            <input type="text" ref={searchTerm} 
                placeholder="Search Text" 
                onChange={searchText}/>

            <Link to={"/addUser"}><button className="ui primary button">Add User</button></Link>
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
                        props.users.map((user) =>
                         <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>
                              <Link to={"/addUser"}><button className="ui green button">Edit</button></Link>
                              <button className="ui teal button" 
                              onClick={()=>deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
