import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './todolist.jsx';
import TodoAdd from './todoadd.jsx';

class App extends React.Component {

  state = {
    todos: []
  } 
  
  addTodo = (newContent) => {
    let newKey = Math.random()
    let newState = {key: newKey, content: newContent.content}
    let currentState = [...this.state.todos, newState];
    this.setState(
      this.state.todos = currentState
    )
  }

  deleteTodo = (id) => {
    console.log(id);
    let currentState = [...this.state.todos]
    let newState = currentState.filter(entry => {
      return entry.key !== id
    })
    this.setState(
      this.state.todos = newState
    )
  }

  render(){

    return(
      <div className="container center-align">
        <h1 className="white-text">To-do List</h1>
        <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <TodoAdd addTodo={this.addTodo}/>
      </div> 
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));



