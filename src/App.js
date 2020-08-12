import React, { Component } from 'react';
import Person from "./Person/Person"
import './App.css';

class App extends Component {
  state = {
    persons: [{ name: "Ayush", age: 18 },
    { name: "Mishra", age: 20 },
    ]
  }
  onClickHandler = () => {

    this.setState({
      persons: [{ name: "Ayush Mishra", age: 20 },
      { name: "XYZ", age: 20 },
      ]
    })
  }
  render() { persons: [{ name: "Ayush", age: 18 },
    { name: "Mishra", age: 20 },
    ]

    return (
      <div className="App">
        <h1>Hello React Please Be Nice  To Me </h1>
        <button onClick={this.onClickHandler}>OnClick</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >  </Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >  </Person >
      </div>
    );
  }
}

export default App;
