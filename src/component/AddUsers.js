import React from 'react'

class AddUsers extends React.Component{
	constructor(){
		super()
		this.state={
			name:null,
			belt:null,
			age:null,
		}
	}


	onChangeHandler = (event) => {
		this.setState({
			[event.target.id] : event.target.value
		})
	}

	onSubmitHandler=(event)=>{
		event.preventDefault()
		this.props.addNewUser(this.state)
		
		console.log(this.state)
	}

	render(){
		return(
			<React.Fragment>
			
				<form onSubmit={this.onSubmitHandler}>
					<div>
						<label htmlFor = "name"> Username </label>
						<input htmlFor="name" id="name" type="text" onChange={this.onChangeHandler} />
					</div> 
					<div>
						<label htmlFor = "age"> Age </label>
						<input htmlFor="age" id="age" type="text" onChange={this.onChangeHandler}/>
					</div>
					 <div>
						<label htmlFor = "belt"> Belt </label>
						<input htmlFor="belt" id="belt" type="text" onChange={this.onChangeHandler}/>
					</div> 

					<button type="submit">Submit</button>

				</form>

			</React.Fragment>)
	}
}

export default AddUsers