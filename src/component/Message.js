import React from 'react'


class Message extends React.Component{

	constructor(){

		super();
			this.state = {
				message :'Welcome Tri',
				
			
		}

		this.handleMessage = this.handleMessage.bind(this)

		
	}


	handleMessage(){
			this.setState({
				message:'Thanks for Subscribing'
			})
		}
	render(){

		const {message} = this.state;
		return (
			<div>

			<h1> {message} </h1>
			<button onClick={this.handleMessage}>Subscribe</button>
			</div>);
	}
}


export default Message