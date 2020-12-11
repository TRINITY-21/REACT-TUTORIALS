import React from 'react'

class Hover extends React.Component{
	

	render(){
	
		const {count, increment} = this.props
		return (
			<h1 onMouseOver={increment}>
				{this.props.name} Hovered {count} Times
			</h1>
			)
		
	}
}

export default Hover



