import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello React Please Be Nice  To Me </h1>
        <Person/>
        <Person />
        <Person />
      </div>
    );
  }
}

export default App;
