import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
	state = {
		person: [
			{ name: "Ayush", age: 20 },
			{ name: "Mishra", age: 21 },
			{ name: "Chotu", age: 11 },
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
		persons.splice(index, 1),
			this.setState({
				person: persons,
			});
	};
	render() {
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
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div className="app">
				<button onClick={this.ToogleShow}>Click to Change</button>

				{showData}
			</div>
		);
	}
}
export default App;
