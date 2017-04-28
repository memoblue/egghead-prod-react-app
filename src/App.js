import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do</h2>
        </div>
        <div className="todoapp">
          <form>
            <input type="text" />
          </form>
          <ul className="todolist">
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
