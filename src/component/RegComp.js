import React from 'react'


class RegComp extends React.Component{
	constructor(){
		super()
		}
	

	render(){
		console.log('Regular Component')

		return(<div>
			<h3>Regular Component {this.props.name}</h3>
			</div>)
	}
}

export default RegComp