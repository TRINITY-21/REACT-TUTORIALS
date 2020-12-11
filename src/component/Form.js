import React from 'react'

class Form extends React.Component{
	constructor(){
		super()
		this.state={
			username : '',
			comment : '',
			topic : 'react'
		}

		this.handleUsernameChange = this.handleUsernameChange.bind(this)
	}

	handleUsernameChange = (event) =>
	this.setState({

		username : event.target.value

	})

	handleCommentChange = (event) =>
	this.setState({
		comment:event.target.value
	})

	handleTopicChange = (event) =>
	this.setState({
		topic: event.target.value
	})

	handleSubmit =(event)=>{
		alert(`${this.state.username} ${this.state.topic} ${this.state.comment}`)
		event.preventDefault()
		}
	



	render(){
		const {username,comment,topic} = this.state

		return(
			<form onSubmit={this.handleSubmit}>
			<div>
				<label>username</label>
				<input type='text' value={username} 
				onChange={this.handleUsernameChange}/>
			</div>	

			<div>
				<label>comment</label>
				<textarea value={comment} 
				onChange={this.handleCommentChange}/>
			</div>	

			<div>
				<label>topic</label>
				<select value = {topic} onChange={this.handleTopicChange}>	
					<option value='react'>React</option>
					<option value='vue'>Vue</option>
					<option value='Angular'>Angular</option>

				</select>
			</div>

			<button type='submit'> Submit</button>

			</form>)
	}

}

export default Form