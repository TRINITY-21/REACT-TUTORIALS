import {BUY_ICE, REMOVE_ICE} from './iceTypes'


const initialState={
	numberOfIce : 500
}

const iceReducer =(state=initialState, action)=>{
	switch(action.type){
		case BUY_ICE:
		return{
			numberOfIce:state.numberOfIce + 10
		}

		case REMOVE_ICE:
		return{
			numberOfIce:state.numberOfIce - 10
		}

		default:
		return state
	}
}

export default iceReducer