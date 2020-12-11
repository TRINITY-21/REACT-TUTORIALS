import React from 'react'


function ChildComponent(props) {
	
		return(
			<div>
				<button onClick={()=>props.greetHandler('child', 'father')}>Greet</button>
			</div>)
	
}

export default ChildComponent