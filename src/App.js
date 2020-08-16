import React, { useState } from 'react';
import Person from "./Person/Person"
import './App.css';

const app = (props) => {
  const [personState, setStateperson] = useState({
    person: [{
      name: "Ayush", age: 20
    }, {
      name: "Mishra", age: 50
    }]
  })
  const clickHandler = () => {
    setStateperson({
      person: [{
        name: "Changed Name", age: 200

      }, {
        name: "Changed", age: 1212
      }]
    })
  }
  return (
    <div className="app">
      <h1 >Hello React UseSate Hooks</h1>
      <button onClick={clickHandler}> Submit</button>
      <Person name={personState.person[0].name} age={personState.person[0].age} />
      <Person name={personState.person[1].name} age={personState.person[1].age} />
    </div>
  )
}

export default app;
