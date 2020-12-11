import React,{useState,useEffect} from 'react'


const UseEffectMouse=()=>{

	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const LogMouse=((e) =>{
		setX(e.clientX)
		setY(e.clientY)
	})

	useEffect(()=>{
		window.addEventListener('mousemove', LogMouse)
			
		return (()=>{
			window.removeEventListener('mousemove', LogMouse)
			console.log('Useffect Unmount')
		})
	},[ ])




	return(
		<div>
			<h1>X- {x} Y-{y}</h1>
		</div>)
}

export default UseEffectMouse