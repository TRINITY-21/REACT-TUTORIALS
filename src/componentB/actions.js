import {ADD_BOOK}from './types';

export const addBook = (number) =>{
	return{
		type:ADD_BOOK,
		payload:number

	}
}