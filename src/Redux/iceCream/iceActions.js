import {BUY_ICE} from './iceTypes'

const buyIce = (value)=>{
	return{
		type:'BUY_ICE',
		payLoad:value
	}
}

// const destroyIce = (value)=>{
// 	return{
// 		type:'DESTROY_ICE',
// 		payLoad:value
// 	}
// }
export default buyIce



