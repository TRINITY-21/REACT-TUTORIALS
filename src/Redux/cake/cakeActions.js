import { BUY_CAKE} from './cakeTypes'

const buyCake = (number) =>{
	return{
		type: 'BUY_CAKE',
		payload:number
	}
}

export default buyCake
