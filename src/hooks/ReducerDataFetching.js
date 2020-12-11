import React,{useEffect,useReducer} from 'react'
import axios from 'axios'

const initialState={
	loading:true,
	post:[],
	error:''
}

const reducer=(state,action)=>{
	switch(action.type){
		case 'Fetch_success':
		return{
		loading:false,
		post:action.payload,
		error:''
	}

		case 'Fetch_error':
		return{
		loading:false,
		post:{},
		error:'Something Went Wrong'
	}
		default:
		return state
	}
}

function ReducerDataFetching() {

	const [state,postDispatch] = useReducer(reducer,initialState)

	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res=>{
			postDispatch({type:'Fetch_success', payload:res.data})
			
		})

		.catch(err=>{
			postDispatch({type:'Fetch_error'})
			
		})

	})

	return(<div>
			{state.loading ? 'loading....' : state.post.title}
			{state.error ? state.error : null}
		</div>)
}

export default ReducerDataFetching