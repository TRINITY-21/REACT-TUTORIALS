import React from 'react'
import Person from '../component/Person'
import Persons from '../component/Persons'


function NameList(){

	const names = ['trinity','kwasi','amankwa', 'trinity']

	// const NameList = Persons.map((person) => <Person key = {person.id} person={person}/>)

	// return NameList

	const NameLists = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

	return NameLists
}


export default NameList