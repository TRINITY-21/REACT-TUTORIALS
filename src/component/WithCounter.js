import React from 'react'


const WithCounter = (WrappedComponent, IncrementNumber)=>{
	class WithCounter extends React.Component{
		constructor(){
		super()
		this.state={
			count:0
		}

	}

	incrementCount=()=>{
		this.setState((prevState)=>({
			count:prevState.count + IncrementNumber
		}))
	}

	render(){
		return( 
			<WrappedComponent count={this.state.count} increment={this.incrementCount} 
			{...this.props}/>
			)
	}
}


	return WithCounter
}

export default WithCounter