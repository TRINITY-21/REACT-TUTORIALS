import {ADD_USER} from './profileTypes'

const initialState={
	name:''
}

const profileReducer=(state=initialState,action)=>{
	switch(action.type){
		case ADD_USER:
		return{
			name:state.name
		}

		default:
		return state
	}
}

export default profileReducer
