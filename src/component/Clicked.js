import React from 'react'
import WithCounter from '../component/WithCounter'

class Clicked extends React.Component{

	render(){
	
		const {count, increment} = this.props
		return (
			<button onClick={increment}>
				{this.props.name} Clicked {count} Times
			</button>)
		
	}
}

export default WithCounter(Clicked, 2)



