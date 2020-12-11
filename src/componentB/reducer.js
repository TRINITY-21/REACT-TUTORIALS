import {ADD_BOOK} from './types';

const initialState = {
	num:20
}

const reducer=(state = initialState,action)=>{
	switch(action.type){
		case ADD_BOOK:
		return{
			num:state.num + action.payload

		}

		default:
		return state
		
	}
}

export default reducer;