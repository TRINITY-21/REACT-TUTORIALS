import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { addBook } from './actions';
import {connect} from 'react-redux';

const Books=(props)=>{

	const num = useSelector(state=>state.num) // state
	const dispatch = useDispatch() // actions
	return(

		<div>
			<p>Books {num}</p>
			<button onClick={()=>dispatch(addBook(5))}>Add Book</button>
		</div>
		);
	}


export default Books;