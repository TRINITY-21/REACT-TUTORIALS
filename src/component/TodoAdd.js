import React from 'react'

class TodoAdd extends React.Component{
	constructor(){
		super()
		this.state={
			content:''
		}

		this.inputRef = React.createRef()


	}

		handleChange=(event)=>{
			this.setState({
				content: event.target.value
			})
		}

		handleSubmit=(event)=>{
			event.preventDefault()
				this.props.addTodo(this.state)

			this.setState({
				content:''
			})
			}

		componentDidMount(){
			this.inputRef.current.focus()
		}


	

	render(){
		return(
			<div>
			<form onSubmit={this.handleSubmit}>
					<label>Add Todo</label>
					<input type="text" ref = {this.inputRef} value={this.state.content} onChange={this.handleChange}/>
					<button type='submit'>Submit</button>
			</form>

			
			</div>
			)
	}
}

export default TodoAdd