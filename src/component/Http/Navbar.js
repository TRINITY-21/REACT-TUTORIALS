import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import Registration from '../Http/Registration'
import About from '../Http/About'

class Navbar extends React.Component{
	constructor(){
		super()
		this.state={

		}
	}

	render(){
		return(
			<React.Fragment>
				<nav>
					<ul>
						<NavLink to="/">
							<li>Home</li>
						</NavLink>

						<NavLink to="/Registration">
							<li>Registration</li>
						</NavLink>

						<NavLink to="/About">
							<li>About</li>
						</NavLink>
						
					</ul>

				</nav>
			</React.Fragment>
			)
	}

}

export default Navbar
