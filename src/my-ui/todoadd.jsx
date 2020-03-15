import React from 'react';

class TodoAdd extends React.Component{

  state = "";

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState(
      this.state = {content: e.target.value}
    )
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.addTodo(this.state);
    document.querySelector('form').reset();
  }

  render(){
    return (
      <form action="" onSubmit={this.handleSubmit}  className="input-field">
        <input className="white flow-text" placeholder="enter items here" type="text" onChange={this.handleChange}/>
      </form>
    )
  }
}

export default TodoAdd