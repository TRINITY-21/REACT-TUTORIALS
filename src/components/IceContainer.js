import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeIce,buyIce} from '../reacts/ice/iceActions'

const IceContainer=(props)=>{

	const numberOfIce = useSelector(state=>state.ice.numberOfIce)
	const dispatch  = useDispatch();

	return(
		<>
			<h1>Number of IceCream: {numberOfIce}</h1>
			<button onClick={()=>dispatch(buyIce())}>Add IceCream</button>
			<button onClick={()=>dispatch(removeIce())}>Remove IceCream</button>
		</>

		)
}



export default IceContainer