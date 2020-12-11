import React from 'react'
import LifeCycleB from '../component/LifeCycleB'

class LifeCycleA extends React.Component{
	constructor(){
		super()
		this.state={
			name : 'LifeCycleB'
		}

	console.log('constructor')
	}

	static geDerivedStateFromProps(props,state){
		console.log('geDerivedStateFromProps LifeCycleA')
		return null
	}

	static geDerivedStateFromProps(props,state){
		console.log('geDerivedStateFromProps LifeCycleB')
		return null
	}

	shouldComponentUpdate(){
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
			<div>
			
			<div>LifeCycleA</div>
			<LifeCycleB />
			</div>
			)
	}
}

export default LifeCycleA