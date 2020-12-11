import React from 'react'

class NewUsers extends React.Component{

	render(){

		const {users, deleteUser} = this.props

		const userList = users.map((user)=>{
			return(
				<div key={user.id}>
					<div>{user.name}</div>
					<div>{user.age}</div>
					<div>{user.belt}</div>
					<button onClick={()=>{deleteUser(user.id)}}>Delete</button>
				</div>
					)})


		return(<div>
		{userList}
			</div>)
		}
			
	}


export default NewUsers