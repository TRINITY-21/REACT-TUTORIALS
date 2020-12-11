import React from 'react'


function Person({person}) {
	return(
		 <h3>My name is {person.name} and i am {person.age} years old and i love {person.skill}</h3>)
}

export default Person