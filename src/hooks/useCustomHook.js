import React,{useState,useEffect} from 'react'

function useCustomHook(initialCount = 0, value) {

	const [count, setCount] = useState(initialCount,value) 

	const Increment=()=>{  
		setCount((prevState)=>{
			setCount(prevState + value)
		})

	}
	const Decrement=()=>{
		setCount((prevState)=>{
			setCount(prevState - value)
		})
	}
	const Reset=()=>{
		setCount(0)
			
		
	}

	return [count, Increment, Decrement, setCount,Reset]


}

export default useCustomHook