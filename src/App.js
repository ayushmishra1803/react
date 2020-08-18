import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";
class App extends Component {
  state = {
    person: [{ name: "Ayush", age: 20 },
    { name: "Mishra", age: 21 },
    { name: "Chotu", age: 11 }
    ]
  }
  switchNameHandler = (props) => {
    this.setState({
      person: [{ name: props, age: 20 },
      { name: " Ayush Mishra", age: 21 },
      { name: "Chotu", age: 11 }
      ]
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.switchNameHandler.bind(this, "Ander se aaya o Bhai")}>Click to Change</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={this.switchNameHandler} />
        <Person name={this.state.person[1].name} age={this.state.person[1].age} />
        <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    )

  }
  
}
export default App;
