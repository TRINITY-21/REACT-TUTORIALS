import React,{useState} from 'react'
import {connect} from 'react-redux'
import {buyCake,removeCake} from '../reacts/cake/cakeActions'

const CakeContainer=(props)=>{
	const [num,setNum] = useState(1)

	return(
		<div>
			<h1>Number of cakes - {props.numberOfCakes}</h1>
			<input type='text' value={num} onChange={(e)=>setNum(e.target.value)}/>
			<button onClick={props.buyCake}>Add Cake</button>
			<button onClick={()=>props.removeCake(num)}>remove Cake</button>
		</div>
		)
}

const mapStateToProps=(state)=>{
	return{
		numberOfCakes : state.cake.numberOfCake
	}
}


const mapDispatchToProps=(dispatch)=>{
	return{
		buyCake: ()=>dispatch(buyCake(5)),
		removeCake: (num)=>dispatch(removeCake(num)),
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)