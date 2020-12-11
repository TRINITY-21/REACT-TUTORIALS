import React from 'react'
import AddUsers from '../component/AddUsers'
import NewUsers from '../component/NewUsers'


class Users extends React.Component{
	constructor(){
		super()
		this.state={
			users : [
			{'name':'Jose', 'age':30, 'belt':'yellow', 'id':1},
			{'name':'frank', 'age':301, 'belt':'yellow', 'id':2},
			{'name':'theddy', 'age':130, 'belt':'yellow', 'id':3},

			]
		}

	}

	addNewUser = (NewUser) =>{
		NewUser.id = Math.random()
		let user = [...this.state.users, NewUser]

		this.setState({
			users : user
		})
	}


	deleteUser = (id) =>{
		let user = this.state.users.filter((user)=>{
			return user.id != id
		})

		this.setState({
			users : user
		})

		console.log(id)
	}





	render(){

		return (
			<div>
				<NewUsers deleteUser={this.deleteUser} users={this.state.users}/>
				<AddUsers addNewUser={this.addNewUser}/>
			</div>)

	}
}

export default Users