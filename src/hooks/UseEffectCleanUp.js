import React,{useState,useEffect} from 'react'
import LifeCycleMouse from '../component/LifeCycleMouse'
import UseEffectMouse from '../hooks/UseEffectMouse'

const UseEffectCleanUp=()=>{

	const [display, setDisplay] = useState(true)



	return(
		<div>
			<button onClick={()=>setDisplay(!display)}>Toggle</button>
			{display && <LifeCycleMouse/>}
			{display && <UseEffectMouse/>}
		</div>)
}

export default UseEffectCleanUp