import React,{useReducer} from 'react'

const initialState=0

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

function MultipleReducers() {

	const [count,dispatch] = useReducer(reducer,initialState)
	const [countOne,dispatchOne] = useReducer(reducer,initialState)



	return(
		<>
			<div>count1:{count}</div>
			<button onClick={()=>dispatch('Increment')}>Increment</button>
			<button onClick={()=>dispatch('Decrement')}>Decrement</button>
			<button onClick={()=>dispatch('Reset')}>Reset</button>

			<div>count2:{countOne}</div>
			<button onClick={()=>dispatchOne('Increment')}>Increment</button>
			<button onClick={()=>dispatchOne('Decrement')}>Decrement</button>
			<button onClick={()=>dispatchOne('Reset')}>Reset</button>
		</>
		)
}

export default MultipleReducers
