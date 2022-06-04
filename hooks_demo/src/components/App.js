import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddUser from './AddUser';
import EditUser from './EditUser';
import UserList from './UserList';

function App(){
  const USERS_DATA = "users-list";

    const [users, setUsers] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
      const retriveUsers = JSON.parse(localStorage.getItem(USERS_DATA));
      if (retriveUsers) setUsers(retriveUsers);
    },[])

    useEffect(() => {
      localStorage.setItem(USERS_DATA, JSON.stringify(users));
    }, [users]);

    const addUserHandler = (user)=>{
      setUsers([...users,user]);
    }

    const editUserHandler = (user)=>{
      console.log(user)
    }

    const deleteUserHandler= (id) =>{
      const retriveUsers = users.filter((user)=>{
          return user.id !==id;
        })
      setUsers(retriveUsers);
    }

    const searchHandler = (searchKeyword)=>{
        setSearchText(searchKeyword)
        if(searchKeyword !== ""){
           const searchList = users.filter((user)=>{
              return Object.values(user.firstname).join(" ").toLowerCase().includes(searchKeyword.toLowerCase());
            })
            setSearchResults(searchList);
        }else{
            setUsers(users);
        }
    }

    return (
      <div className="ui container">
        <center>
        <h2>User Management</h2>
        {/* <Counter/> */}

      <Router>
        <Switch>
              <Route exact 
                path="/" 
                render={(props)=>(<UserList {...props} 
                users={searchText.length>=1 ? searchResults: users}
                searchHandler={searchHandler}
                deleteUserHandler={deleteUserHandler}/>)}/>
              <Route 
                path="/addUser"
                render={(props)=>(<AddUser {...props} addUserHandler={addUserHandler}/>)}
              />
              <Route path="/editUser"
                  render={(props)=>(<EditUser {...props} editUserHandler={editUserHandler} />)}>

              </Route>
        </Switch>
      </Router>

        {/* <AddUser/>
        <br></br>
        <br></br>
        <br></br>
        <UserList /> */}
        </center>
      </div>
    )
}

export default App;