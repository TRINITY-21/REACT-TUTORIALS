import React from 'react'


class Subscribe extends React.Component{

	constructor(){
		super()

		this.state={
			count: 0

		}

		this.onClickHandler = this.onClickHandler.bind(this)
	}

	onClickHandler() {
		this.setState((prevState) => ({
			count: prevState.count + 1
		}))
	}

	render(){
		return(
			<div>
				<h1>Subscribe to this Channel</h1>
				<button onClick={this.onClickHandler}>Subscribe</button>
			

			<h3>Total Number of Subscribers is {this.state.count}</h3>
			</div>
			);
	}

}

export default Subscribe