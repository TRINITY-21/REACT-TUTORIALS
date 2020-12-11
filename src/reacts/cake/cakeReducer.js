import {BUY_CAKE, REMOVE_CAKE} from './cakeTypes'

const initialState = {
	numberOfCake:100
}

const cakeReducer=(state=initialState,action)=>{
	switch(action.type){
		case BUY_CAKE:
		return{
			numberOfCake:state.numberOfCake + action.payload
		}

		case REMOVE_CAKE:
		return{
			numberOfCake:state.numberOfCake - action.payload
		}

		default:
		return state
	}
}

export default cakeReducer