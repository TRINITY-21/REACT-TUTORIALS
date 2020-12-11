import React,{useState,useEffect} from 'react'
import useCustomHook from '../hooks/useCustomHook'

function CustomCounter() {

	const [count, Increment, Decrement, setCount,Reset] = useCustomHook(10,5)

	return(
		<>   <div>count: {count}</div>
			<button onClick={Increment}>Increment</button>
			<button onClick={Decrement}>Decrement</button>
			<button onClick={Reset}>Reset</button> 
		</>
		)
}
export default CustomCounter