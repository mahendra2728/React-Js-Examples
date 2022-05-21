import React, { Component } from 'react';
import AddUser from './AddUser';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center>
        <h2>Hello World, React Js</h2>
        {/* <Counter/> */}
        <AddUser/>
        <UserList/>
        </center>
      </div>
    );
  }
}

export default App;