import React from 'react'

class Clicked extends React.Component{

	render(){
	
		const {count, increment} = this.props
		return (
			<button onClick={increment}>
				{this.props.name} Clicked {count} Times
			</button>)
		
	}
}

export default Clicked



