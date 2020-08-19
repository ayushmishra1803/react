import React from "react";
import "./Person.css"
const person = (props) => {
	return (
		<div className="Hello">
			<p onClick={props.click}>
				Hello My name is {props.name} My Age is {props.age}
			</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};
export default person;
