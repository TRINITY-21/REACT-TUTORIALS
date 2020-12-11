import React from 'react'
import './myStyles.css'

function Stylesheets(props){
	let className = props.primary ? 'primary' : ''

	return(<div className={`${className} font-xl`}>Stylesheets</div>)
}

export default Stylesheets