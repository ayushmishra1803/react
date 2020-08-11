import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [{ name: "Ayush", age: 18 },
    { name: "Mishra", age: 20 },
    ]
  }
  render() {

    return (
      <div className="App">
        <h1>Hello React Please Be Nice  To Me </h1>
        <Person name={this.state.persons[0].name}><div><form><input type="readonly" name={this.state.persons[0].name} value="Aysuh" /></form></div> </Person>
        <Person name="Chotu" >My age is 20  </Person>
        <Person name="Kuchbi" >My age is 20  </Person >
      </div>
    );
  }
}

export default App;
