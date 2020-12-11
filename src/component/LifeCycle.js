import React from 'react'

class LifeCycle extends React.Component{
	constructor(){
		super()
		this.state={
			count:0
		}
	}

	componentDidMount(){
		document.title = `Clicked ${this.state.count} times`
		console.log(this.state.count)
	}

	componentDidUpdate(prevProps,prevState){
		document.title = `Clicked ${this.state.count} times`
		console.log(this.state.count)

	}

	render(){
		return(<div>

			<button onClick={()=>this.setState({ count: this.state.count+1})}>Click {this.state.count}</button>
			</div>)
	}
}

export default LifeCycle