import {FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_FAILURE} from './userTypes'


const initialState={
	loading:false,
	error:'',
	users:[]
}


const useReducer = (state=initialState, action)=>{
	switch(action.type){
		case FETCH_USER_REQUEST:
		return{
			...state,
			loading:true
		}

		case FETCH_USER_SUCCESS:
		return{
			loading:false,
			error:'',
			users:action.payload
		}

		case FETCH_USER_FAILURE:
		return{
			loading:false,
			error:action.payload,
			users:[]
		}

		default:
		return state
	}
}

export default useReducer