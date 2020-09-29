import React, { Component, StrictMode } from "react";
class Calander extends Component {
	calendarEvents = [
		{ id: 1, title: "Event 1", startDate: "2020-08-10", endDate: "2020-08-15" },
		{ id: 2, title: "Event 2", startDate: "2020-08-26", endDate: "2020-08-28" },
		{ id: 3, title: "Event 3", startDate: "2020-08-12", endDate: "2020-08-17" },
		{ id: 4, title: "Event 4", startDate: "2020-08-16", endDate: "2020-08-20" },
		{ id: 5, title: "Event 5", startDate: "2020-09-03", endDate: "2020-09-05" },
		{ id: 6, title: "Event 6", startDate: "2020-08-31", endDate: "2020-09-03" },
	];
	componentDidMount() {
		const date = [];
		let sortedArray = [];
		for (let calendarEvents in this.calendarEvents) {
			console.log(this.calendarEvents[calendarEvents].startDate + "First");

			date.push(this.calendarEvents[calendarEvents].startDate);
		}
		date.sort();
		date.map((re) => {
			this.calendarEvents.find((res) => {
				if (res.startDate === re) {
					sortedArray.push(res);
				}
			});
		});
		console.log(sortedArray);

	
	}

	render() {
		return <div>Hello React</div>;
	}
}
export default Calander;
