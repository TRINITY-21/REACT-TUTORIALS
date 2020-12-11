import React from 'react'


class LifeCylcleMouse extends React.Component{
	constructor(){
		super()
		this.state={
			x:0,
			y:0
		}
	}


	LogMouseMove=(e)=>{
		this.setState({
			x:e.clientX,
			y:e.clientY
		})
	}


	componentDidMount(){
		window.addEventListener('mousemove', this.LogMouseMove)
		console.log('ComponentMount')
	}

	componentWillUnmount(){
		window.removeEventListener('mousemove', this.LogMouseMove)
		console.log('componentWillUnmount')
	}

	render(){
		return( 
			<>X- {this.state.x} Y- {this.state.y}</>)
	}
}

export default LifeCylcleMouse