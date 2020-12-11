import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../Users/userActions'

function UserContainer({userData, fetchUsers}) {

	useEffect(()=>{
		fetchUsers()

	}, [])

	return userData.loading ? (<h1>loading...</h1>)
		: userData.error ? (<h1>{userData.error}</h1>)
		: (
		<div>
			<h2>UsersList</h2>
			<div>
			{
				userData && userData.users && userData.users.map(user=><p>{user.name}</p>
				)
			}
		</div>
		
		</div>
		)
}


const mapStateToProps=(state)=>{
	return{
		userData : state.users
	}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		fetchUsers: ()=>dispatch(fetchUsers()),
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(UserContainer)
