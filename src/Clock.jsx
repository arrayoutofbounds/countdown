import React, {Component} from 'react';
import './App.css';

class Clock extends Component{

	constructor(props) {
		super(props);
		this.state = {
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}


	//runs before component has rendered onto the applicaton
	componentWillMount() {
		this.getTimeUntil(this.props.deadline);
	}

	// runs after component has rendered onto the application
	componentDidMount() {
		setInterval(()=>this.getTimeUntil(this.props.deadline),1000);
	}

	leadingZero(num){
		return num<10 ? '0'+num: num;
	}

	getTimeUntil(deadline){
		const time = Date.parse(deadline) - Date.parse(new Date());
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor((time/1000*60*60)%24);
		const days = Math.floor(time/(1000*60*60*24));
		this.setState({days:days,hours:hours,minutes:minutes,seconds:seconds});
	}
	
	render(){
		return (
			<div>
				<div className="Clock-days">{this.leadingZero(this.state.days)} days</div>
				<div className="Clock-hours">{this.leadingZero(this.state.hours)} hours</div>
				<div className="Clock-minutes">{this.leadingZero(this.state.minutes)} minutes</div>
				<div className="Clock-seconds">{this.leadingZero(this.state.seconds)} seconds</div>
			</div>
		)
	}
}

// exports the clock
export default Clock; 