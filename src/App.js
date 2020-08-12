import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [{ name: "Ayush", age: 18 },
    { name: "Mishra", age: 20 },
    ]
  }
  onClickHandler() {
    // console.log('Was Clicked');
    this.setState({
      persons: [{
        name: "Ayush Mishra", age: 30
      }, {
        name: "XYZ", age: 32
      }]
    })
  }
  render() {

    return (
      <div className="App">
        <h1>Hello React Please Be Nice  To Me </h1>
        <button onClick={this.onClickHandler}>OnClick</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My age is 20  </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My age is 20  </Person >
      </div>
    );
  }
}

export default App;
