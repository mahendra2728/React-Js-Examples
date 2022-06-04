import React,{useState} from 'react';


export default function AddUser(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const { history } = props;


    const addUser = (e)=>{
        e.preventDefault();
        if(firstName ==="" || lastName===" " || email===""){
            alert("Please provide all then details")
            return;
        }

        const payload = {id:new Date().getMilliseconds(),firstname: firstName, lastname:lastName,email};
        console.log(payload)
        props.addUserHandler(payload);
        clearFields();
        history.push('/');
    }
    const clearFields=()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
    }
    return (
        // <div className="ui divider">
        //     <h4>Add User</h4>
        //     <form onSubmit={addUser}>
        //         <div className="ui input">
        //             <input type="text" 
        //             value={firstName} 
        //             placeholder="Firstname"
        //             onChange={(e)=>setFirstName(e.target.value)}/>
        //         </div>
        //         <div className="ui input">
        //             <input type="text" 
        //             value={lastName} 
        //             placeholder="Lastname"
        //             onChange={(e)=>setLastName(e.target.value)}/>
        //         </div>
        //         <div className="ui input">
        //             <input type="text" 
        //             value={email} 
        //             placeholder="Email"
        //             onChange={(e)=>setEmail(e.target.value)}/>
        //         </div>
        //         <button className="ui primary button">Add</button>
        //     </form>
        // </div>
        <div className="ui inverted segment">
            <center><h4>Add User</h4></center>
            <form className="ui form" onSubmit={addUser}>
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
                        value={email} 
                        placeholder="Email"
                         onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                </div>
                <button className="ui primary button">Submit</button>
            </form>
        </div>
    )
}
