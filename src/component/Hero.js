import React from 'react'

class Hero extends React.Component{

	render(){
		const {name} = this.props
		if(name == 'yoshi'){
			throw new Error('This is an error')
		}

		else{
		return (
			<div>
				{name}
			</div>)
		}
	}
}

export default Hero