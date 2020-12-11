import React, { Component} from 'react'


class Welcome extends React.Component{
	render(){
		return(
			<div>
			<h1>Welcome {this.props.name}</h1>
			<p>how are Your {this.props.books}</p>
			{this.props.children}
			</div>
			);


	}
}

export default Welcome;