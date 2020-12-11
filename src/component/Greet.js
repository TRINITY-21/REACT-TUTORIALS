import React from 'react'

function Greet({name,course,children}) {
	return(
		<div>
		<h1>Hello {name}</h1>
		<h2>your course is {course}</h2>
		{children}
		</div>
		);
}

export default Greet;