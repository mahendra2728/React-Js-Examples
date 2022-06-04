import React, { useState } from "react";

export default function EditUser(props){

   const {id,firstname,lastname,email} = props.location.state.users;
   
   const [firstName, setFirstName] = useState(firstname);
   const [lastName, setLastName] = useState(lastname);
   const [emailId, setEmailId] = useState(email);
   const { history } = props;


    const editUser = (e)=>{
        e.preventDefault();
        if(firstName ==="" || lastName===" " || emailId===""){
            alert("Please provide all then details")
            return;
        }
        const payload = {id:id,firstname: firstName, lastname:lastName,email};
        props.editUserHandler(payload);
        clearFields();
        history.push('/');
    }
    const clearFields=()=>{
        setFirstName("");
        setLastName("");
        setEmailId("");
    }
    return (
        <div className="ui inverted segment">
            <center><h4>Edit User</h4></center>
            <form className="ui form" onSubmit={editUser}>
            <div className="fields">

                <div className="field">
                    <label>First Name</label>
                    <input type="text"
                        placeholder="First Name"
                        value={firstName} 
                        onChange={(e)=>setFirstName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" 
                        placeholder="Last Name"
                        value={lastName} 
                        onChange={(e)=>setLastName(e.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" 
                        value={emailId} 
                        placeholder="Email"
                         onChange={(e)=>setEmailId(e.target.value)}/>
                </div>
                </div>
                <button className="ui primary button">Update</button>
            </form>
        </div>
    )
}