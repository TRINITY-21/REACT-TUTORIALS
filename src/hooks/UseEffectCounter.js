import React,{useState,useEffect} from 'react'

const UseEffectCounter =()=>{

	const [count,setCount] = useState(0)
	const [name, setName] = useState('')

	useEffect(()=>{
		document.title = `Clicked ${count} Times`
		console.log('Updating useEffect')
	},[count])

	return(
		<>
		<input type='text' onChange={event=>setName(event.target.value)}/>
		<button onClick={()=>setCount(count+1)}>Click {count}</button>
		</>)
}
export default UseEffectCounter