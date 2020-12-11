import React from 'react'


class PureComp extends React.PureComponent{
	constructor(){
		super()
		this.state = {

			name: 'trinity'
		}
	}

	render(){
		console.log('PureComponent')
		return(<div>
			<h3>PureComponent </h3>
			</div>)
	}
}

export default PureComp