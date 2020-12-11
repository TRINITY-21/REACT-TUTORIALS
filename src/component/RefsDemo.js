import React from 'react'


class RefsDemo extends React.Component{
	constructor(){
		super()
		this.inputRef= React.createRef()
			
		}

	componentDidMount(){
		console.log(this.inputRef.current.focus())

	}

	handleOnclick=()=>{
		alert(this.inputRef.current.value)
	}

	render(){

		return(
			<div>
				<input type='text' ref={this.inputRef}/>
				<button onClick={this.handleOnclick}>Click</button>
		
			</div>)
	}
}

export default RefsDemo
