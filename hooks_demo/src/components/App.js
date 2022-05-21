import React, { Component } from 'react';
import UserList from './UserList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <center>
        <h2>Hello World, React Js</h2>
        {/* <Counter/> */}
        <UserList/>
        </center>
      </div>
    );
  }
}

export default App;