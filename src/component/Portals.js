import React from 'react'
import ReactDOM from 'react-dom'

class Portals extends React.Component{
	constructor(){
		super()
		this.modal=document.getElementById('portal-root')

	}

	render(){
		return ReactDOM.createPortal(
			<h1>Portals</h1>, this.modal)
	}
}

export default Portals