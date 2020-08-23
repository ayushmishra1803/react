import React from "react";
import "./Person.css";
import Radium from "radium"
import Styled from "styled-components"
import styled from "styled-components";
const person = (props) => {
	const Styled = styled.div`
		width: 60%;
		margin: auto;
		border: 0px #eee;
		box-shadow: 0px 2px 3px #ccc;
		text-align: center;
		padding: 16px;

		"@media(min-width:500px)": {
			width: "450px";
		}
	`;
	
	return (
		<Styled>
		<div >
			<p >
				Hello My name is {props.name} My Age is {props.age}
			</p>
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
		</Styled>
	);
};
export default  person;
