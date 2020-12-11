import React from 'react'
import Home from '../Http/Home'

class Registration extends React.Component{
	constructor(){
		super()
		this.state={
			name:'',
			Email:'',
			Phone:'',
			Status: '',
			checkbox:true
		}

		this.inputRef = React.createRef()

		this.HandleForm = this.HandleForm.bind(this)
	}


	HandleForm = (event) =>{
	[event.target.type] == 'checkbox' ? 
	this.setState({
	[event.target.name] : event.target.checked})

	:
 	
 	this.setState({
	[event.target.name]: event.target.value

	})
}



	HandleSubmit = (event)=>{
		event.preventDefault()
		console.log(this.state)

	}



	componentDidMount(){
		this.setState({
			inputRef : this.inputRef.current.focus()
		})
	}

	render(){
	return(
		<>
			<h1 className='center'>
				Register For Introduction to React
			</h1>

			<h1>Registration</h1>

			<form onSubmit={this.HandleSubmit}>
				<div>
				<label>Name</label>
				<input name="name"  type="text" ref={this.inputRef} placeholder="Name" onChange={this.HandleForm}/>
				</div>

				<div>
				<label>Email</label>
				<input name="Email" type="email" placeholder="Email" onChange={this.HandleForm}/>
				</div>

				<div>
				<label>Phone</label>
				<input name="Phone" type="phone"  placeholder="Phone" onChange={this.HandleForm}/>
				</div>

				<div>	
				<select type='select' name='Status' value={this.Status} onChange={this.HandleForm}>
					<option value=''>Choose Status</option>
					<option value='single'>Single</option>
					<option value='married'>Married</option>
				</select>
				</div>

				<div>
					<label>Keep Me Sign In</label>
					<input type='checkbox' name="checkbox" onChange={this.HandleForm}/>
				</div>

				<div>
				<button>Submit</button>
				</div>
			</form>
			<Home users={this.state}/>

			<h1>Registered Users</h1>
				<p>***************</p>
				<p>{this.state.name}</p>
				<p>{this.state.Email}</p>
				<p>{this.state.Status}</p>
				<p>{this.state.checkbox}</p>
				<p>{this.state.Phone}</p>
				<p>***************</p>
		</>
		)
}

}

export default Registration
