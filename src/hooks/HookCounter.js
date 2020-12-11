import React,{useState} from 'react'


const HookCounter = () =>{

const InitialValue = 0
const [count,setCount] = useState(InitialValue)

	for(let i; i<5; i++){
		setCount(prevCount=> prevCount+1
		)
	}
return(
		<div>
			Count:{count}
			<button onClick={()=>{setCount(prevCount => prevCount+1)}}>Increment</button>
			<button onClick={()=>{setCount(prevCount => prevCount-1)}}>Decrement</button>
			<button onClick={()=>{setCount(prevCount => prevCount+5)}}>Increment 5</button>
		</div>
		)
}

export default HookCounter