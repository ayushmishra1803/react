/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium, { StyleRoot } from "radium";
class App extends Component {
	state = {
		person: [
			{ id: "1246531", name: "Ayush", age: 20 },
			{ id: "12452345", name: "Mishra", age: 21 },
			{ id: "45242", name: "Chotu", age: 11 },
		],
		show: true,
	};
	switchNameHandler = (props) => {
		this.setState({
			person: [
				{ name: props, age: 20 },
				{ name: " Ayush Mishra", age: 21 },
				{ name: "Chotu", age: 11 },
			],
		});
	};
	nameChangedHandeler = (event) => {
		this.setState({
			person: [
				{ name: "Ayush", age: 20 },
				{ name: event.target.value, age: 21 },
				{ name: "Chotu", age: 11 },
			],
		});
	};
	ToogleShow = () => {
		const show = this.state.show;
		this.setState({
			show: !show,
		});
	};
	deletePerson = (index) => {
		const persons = this.state.person;
		persons.splice(index, 1);
		this.setState({
			person: persons,
		});
	};
	render() {
		const style = {
			backgroundColor: "green",
			color: "white",
			padding: "16px",
			border: "1px solid blue",
			":hover": {
				backgroundColor: "yellow",
				color: "black",
			},
		};
		const Classes = [];
		if (this.state.person.length <= 2) {
			Classes.push("red");
		}
		if (this.state.person.length <= 1) {
			Classes.push("bold");
		}
		let showData = null;
		if (this.state.show) {
			showData = (
				<div>
					{this.state.person.map((re, index) => {
						return (
							<Person
								click={() => this.deletePerson(index)}
								name={re.name}
								age={re.age}
								key={re.id}
							/>
						);
					})}
				</div>
			);
			style.backgroundColor = "red";
			style[":hover"] = {
				backgroundColor: "lightgreen",
			};
		}
		return (
			<StyleRoot>
				<div className="app">
					<p className={Classes.join(" ")}>HEllo Welcome to Dynamic Styling</p>
					<button style={style} onClick={this.ToogleShow}>
						Click to Change
					</button>

					{showData}
				</div>
			</StyleRoot>
		);
	}
}
export default Radium(App);
