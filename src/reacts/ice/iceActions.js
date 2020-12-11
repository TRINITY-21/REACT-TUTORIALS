import {BUY_ICE,REMOVE_ICE} from './iceTypes'

export const buyIce=()=>{
	return{
		type:BUY_ICE

	}
}

export const removeIce=()=>{
	return{
		type:REMOVE_ICE
	}
}
