import {BUY_ICE} from './iceTypes'
const initialState={
	numOfIce : 20
}

const iceReducer=(state=initialState, action)=>{
	switch(action.type){
		case BUY_ICE:
		return{
			numOfIce:state.numOfIce+action.payLoad
		}
	// 	case 'DESTROY_ICE':
	// 	return{
	// 		numOfIce: state.numOfIce-action.payLoad
	// 	}

		default:
		return state
	}

}

export default iceReducer

