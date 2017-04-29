import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoForm, TodoList } from './components/todo';
import { generateId } from './lib/todoHelpers.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {id: 1, name: 'Some todo item', isComplete: false},
        {id: 2, name: 'Another todo', isComplete: true},
        {id: 3, name: 'Is it done yet?', isComplete: false}
      ],
      currentTodo: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmptySubmit = this.handleEmptySubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

 handleSubmit(e) {
   e.preventDefault();
   this.setState({
     todos: [...this.state.todos, {
       id: generateId(),
       isComplete: false,
       name: this.state.currentTodo
     }],
     currentTodo: '',
     errorMessage: ''
   });
 }

 handleEmptySubmit(e) {
   e.preventDefault();
   this.setState({
     errorMessage: 'Don\'t forget to enter a value'
   })
 }

  render() {
    const sumitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do</h2>
        </div>
        <div className="todoapp">
          {this.state.errorMessage && <div className="error">{this.state.errorMessage}</div>}
          <TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleSubmit={sumitHandler} />
          <TodoList todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
