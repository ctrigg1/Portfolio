import React from 'react';

class App extends React.Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'},
    ]
  }

  

  render(){
    return(
      <div className="App container">
    <p>Hi</p>
      </div>
      )
    }
}

export default App;