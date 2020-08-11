import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React Please Be Nice  To Me </h1>
        <Person name="Ayush" age="20"><div><form><input type="readonly" name="ayush" value="Aysuh" /></form></div> </Person>
        <Person name="Chotu" >My age is 20  </Person>
        <Person name="Kuchbi" >My age is 20  </Person >
      </div>
    );
  }
}

export default App;
