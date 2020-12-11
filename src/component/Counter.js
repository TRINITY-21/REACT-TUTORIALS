import React from 'react'

class Counter extends React.Component{
	constructor(){
		super();

		this.state = {
			count:0
		}

		this.handleIncrements = this.handleIncrements.bind(this)
	}


	handleIncrement(){
		this.setState((prevState) => ({
			count: prevState.count + 1

		}), console.log('Callback'+ this.state.count))
	}

	handleIncrements(){

		this.handleIncrement()
		this.handleIncrement()
		this.handleIncrement()
		this.handleIncrement()

	}



	render(){
		return (
			<div>

			<h1>Count - {this.state.count}</h1>
			<button onClick={this.handleIncrements}>Increment</button>

			</div>)
	}
}

export default Counter