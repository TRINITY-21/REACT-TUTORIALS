import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../reacts/cake/cakeActions'
import {buyIce} from '../reacts/ice/iceActions'

const Items=(props)=>{

	return (<div>

		<h1>Items: {props.items}</h1>
		<button onClick={props.itemAdd}>Add Items</button>
		</div>)
}	

const mapStateToProps=(state,ownProps)=>{
	const itemsState = ownProps.ice ? state.ice.numberOfIce : state.cake.numberOfCakes

	return{
		items : itemsState
	}
}

const mapDispatchToProps=(dispatch,ownProps)=>{
	const dispatchFunc = ownProps.ice ? ()=>dispatch(buyIce()) : ()=>dispatch(buyCake())
	return{
		itemAdd : dispatchFunc
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Items)