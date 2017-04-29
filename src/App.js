import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {TodoForm, TodoList} from './components/todo';
import {generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers.js'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        name: 'Some todo item',
        isComplete: false
      }, {
        id: 2,
        name: 'Another todo',
        isComplete: true
      }, {
        id: 3,
        name: 'Is it done yet?',
        isComplete: false
      }
    ],
    currentTodo: ''
  }

  handleInputChange = (e) => {
    this.setState({currentTodo: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      todos: [
        ...this.state.todos, {
          id: generateId(),
          isComplete: false,
          name: this.state.currentTodo
        }
      ],
      currentTodo: '',
      errorMessage: ''
    });
  }

  handleToggle = (id) => {
    const todo = findById(this.state.todos, id);
    const newTodo = toggleTodo(todo);
    console.log('what', newTodo);
    const updatedTodos = updateTodo(this.state.todos, newTodo);
    this.setState({todos: updatedTodos});
  }

  handleEmptySubmit = (e) => {
    e.preventDefault();
    this.setState({errorMessage: 'Don\'t forget to enter a value'})
  }

  render() {
    const sumitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>To do</h2>
        </div>
        <div className="todoapp">
          {this.state.errorMessage && <div className="error">{this.state.errorMessage}</div>}
          <TodoForm currentTodo={this.state.currentTodo} handleInputChange={this.handleInputChange} handleSubmit={sumitHandler}/>
          <TodoList todos={this.state.todos} handleToggle={this.handleToggle}/>
        </div>
      </div>
    );
  }
}

export default App;
