import React,{useContext} from 'react'
import {CounterContext} from '../hooks/ReducerComponentA'

const ReducerComponentC =()=>{
	
	const countCountext = useContext(CounterContext)

	return(
		<div>
			<h1>ReducerComponentC Count: {countCountext.countCounter}</h1>
					<button onClick={()=>countCountext.countDispatch('Increment')}>Increment</button>
					<button onClick={()=>countCountext.countDispatch('Decrement')}>Decrement</button>
					<button onClick={()=>countCountext.countDispatch('Reset')}>Reset</button>

		</div>

		)
}

export default ReducerComponentC