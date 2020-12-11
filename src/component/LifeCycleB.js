import React from 'react'

class LifeCycleB extends React.Component{
	constructor(){
		super()
		this.state={
			name : 'LifeCycleB'
		}

	console.log('constructor')
	}

	static geDerivedStateFromProps(props,state){
		console.log('geDerivedStateFromProps')
		return null
	}

	static geDerivedStateFromProps(props,state){
		console.log('geDerivedStateFromProps LifeCycleB')
		return null
	}

	shouldComponentUpdate(nextProps,nextState){
		console.log("ShouldComponentUpdate LifeCycleB")
		return true
	}

	getSnapshotBeforeUpdate(prevProps, prevState){
		console.log("getSnapshotBeforeUpdate LifeCycleB")
		return null
	}

	componentDidUpdate(){
		console.log('componentDidUpdate LifeCycleB')
	}


	conponentDidMount(){
		console.log('conponentDidMount')
	}


	render(){
		console.log('render')
		return(
			<div>LifeCycleB</div>
			)
	}
}

export default LifeCycleB