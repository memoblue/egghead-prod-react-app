import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  }

  handleInputChange(e) {
    this.setState({
      currentTodo: e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>To do</h2>
        </div>
        <div className="todoapp">
          <form>
            <input type="text" value={this.state.currentTodo} onChange={this.handleInputChange}/>
          </form>
          <ul className="todolist">
            {this.state.todos.map(item =>
              <li key={item.id}>
                <input checked={item.isComplete} type="checkbox" />
                {item.name}
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
