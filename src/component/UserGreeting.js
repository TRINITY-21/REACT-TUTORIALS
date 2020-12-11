import React from 'react'


class UserGreeting extends React.Component{
	constructor(){
		super()
		this.state={
			isLoggedIn : 'Pls Log In'

		}

		this.UserGreetingHandler = this.UserGreetingHandler.bind(this)

	}

	UserGreetingHandler(){
		this.setState({
			isLoggedIn:'Hello User'
		})
	}


	render(){
			
			return(<div>
				<h2>{this.state.isLoggedIn}</h2>
				<button onClick={this.UserGreetingHandler}>Log In</button>


				</div>)
					
	
	

		
	}
}

export default UserGreeting