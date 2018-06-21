import React, {
	Component
} from 'react';
import form from './components/form'
import './App.css';


console.log(form)
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		};
	}
	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID)
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return(
			<div className="App">
				<form></form>
				{this.state.date.toLocaleTimeString()}
			</div>
		)
	}
}

export default App;