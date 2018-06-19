import React, { Component } from 'react';
import './App.css';




class App extends Component{
	constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
	componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
	
	componentWillUnmount(){
		clearInterval(this.timerID)
	}
	
	tick() {
    this.setState({
      date: new Date()
    });
  }
	
	render(){
		return(
			<div className="App">{this.state.date.toLocaleTimeString()}</div>
		)
	}
}

export default App;

