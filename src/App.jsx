import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap';

// writing the first component
class App extends Component{

	// local state within the class. props is inherited data from parent
	constructor(props) {
		super(props);
		// state is always an object
		this.state = {
			deadline: 'July 28, 2017',
			newDeadline: ''
		}
	}

	changeDeadline(){
		// never mutate or change state directly. i.e this.state.deadline = 'April'
		this.setState({deadline: this.state.newDeadline});
	}

	render(){
		return (
			<div className="App">
				<div className="App-title"> Countdown to Mahant Swami in San Jose! </div>
				<Clock 
					deadline={this.state.deadline}
				/>
				<Form inline={true}>
					<FormControl className="Deadline-input" onChange={ event => this.setState({newDeadline: event.target.value})} placeholder="new date" />
					<Button onClick={ () => this.changeDeadline() }>Submit</Button>
				</Form>
			</div>
		)
	}
}

// exports the app
export default App;
