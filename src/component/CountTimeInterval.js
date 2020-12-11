import React from 'react'

class CountTimeInterval extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}

	}

	tick=()=>{
		this.setState({
			count:this.state.count+1
		})
	}

	componentDidMount(){
		this.interval = setInterval(this.tick,1000)
	}

	componentWillUnmount(){
		clearInterval(this.interval)
	}


	render(){
			return( 
				<>
				 <h1>{this.state.count}</h1>
				</>)
	}
}

export default CountTimeInterval


