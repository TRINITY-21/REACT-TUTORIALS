import React from 'react'
import AddRefs from '../component/AddRefs'

class RefParent extends React.Component{
	constructor(){
		super()
		this.compRef= React.createRef()
			
		}


	handleOnclick=()=>{
		this.compRef.current.focusInput()
	}

	render(){

		return(
			<div>
				<AddRefs ref={this.compRef}/>
				<button onClick={this.handleOnclick}>Click</button>
		
			</div>)
	}
}

export default RefParent
