import React from 'react'
import {UserConsumer} from './UserContext'

class ComponentC extends React.Component{


	render(){
		return(
			
		//<div><h1>Hello {this.props.username}</h1></div>

				<UserConsumer>
					{(username)=>{
						return(
							<div><h1>Hello {username} </h1></div>
							)
					}}
				</UserConsumer>

			
			)
	}
}

export default ComponentC