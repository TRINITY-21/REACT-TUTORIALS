import React,{useContext} from 'react'
import {CounterContext} from '../hooks/ReducerComponentA'
import ReducerComponentC from '../hooks/ReducerComponentC'

const ReducerComponentA =()=>{
	
	const countCountext = useContext(CounterContext)

	return(
		<div>
			<h1>ReducerComponentB Count: {countCountext.countCounter}</h1>
					<button onClick={()=>countCountext.countDispatch('Increment')}>Increment</button>
					<button onClick={()=>countCountext.countDispatch('Decrement')}>Decrement</button>
					<button onClick={()=>countCountext.countDispatch('Reset')}>Reset</button>
				<ReducerComponentC />
		</div>

		)
}

export default ReducerComponentA