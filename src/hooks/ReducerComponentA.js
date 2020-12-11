import React,{useContext,useReducer} from 'react'
import ComponentB from '../hooks/ReducerComponentB'

export const CounterContext = React.createContext()
const initialState = 0

const reducer=(state,action)=>{
	switch(action){
		case 'Increment':
		return state+1
		case 'Decrement':
		return state-1
		case 'Reset':
		return initialState
		default:
		return state
	}
}


const ReducerComponentA =()=>{
	
const [count,dispatch] = useReducer(reducer,initialState)

	return(
	<CounterContext.Provider value={{ countCounter:count, countDispatch:dispatch}}>

		<div>
			
			<ComponentB />		

		</div>
	</CounterContext.Provider>


		)
}

export default ReducerComponentA