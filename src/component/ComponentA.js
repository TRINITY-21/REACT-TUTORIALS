import React from 'react'
import ComponentB from '../component/ComponentB'

class ComponentA extends React.Component{

	render(){
		//const {username} = this.props
		return(<div>
			
			<ComponentB />

			</div>
			)
	}
}

export default ComponentA