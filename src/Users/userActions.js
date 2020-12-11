import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './userTypes'
import axios from 'axios'

export const fetchUserRequest=()=>{
	return{
		type: FETCH_USER_REQUEST
	}
}

export const fetchUserSuccess=(user)=>{
	return{
		type: FETCH_USER_SUCCESS,
		payload:user
	}
}

export const fetchUserFailure=(error)=>{
	return{
		type: FETCH_USER_FAILURE,
		payload:error
	}
}

export const fetchUsers=()=>{
	
	return(dispatch)=>{
		dispatch(fetchUserRequest)
		axios.get('https://jsonplaceholde.typicode.com/users')
		.then(res=>{
			const users = res.data
			dispatch(fetchUserSuccess(users))
		})
		.catch(error=>{
			const errorMsg = error.message
			dispatch(fetchUserFailure(errorMsg))
		})
	}
}