import {BUY_CAKE,REMOVE_CAKE} from './cakeTypes'

export const buyCake = (value) =>{
	return{
		type:BUY_CAKE,
		payload:value
	}	
}

export const removeCake = (num) =>{
	return{
		type:REMOVE_CAKE,
		payload:num
	}
}

