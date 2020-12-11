import React from 'react'
import ChildComponent from '../component/ChildComponent'


class ParentComponent extends React.Component{
	constructor(){
		super()
		this.state={
			parentName:'Parent'
		}

		this.greetHandler = this.greetHandler.bind(this)
	}


	greetHandler(child, father){
		alert(`Hello ${this.state.parentName} from ${child} and ${father}`)
	}

	render(){
		return(
			<div>
				<ChildComponent greetHandler={this.greetHandler}/>
			</div>);
	}
}

export default ParentComponent