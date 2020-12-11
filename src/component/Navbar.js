import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'

function Navbar(props) {
	// setTimeout(()=>{
	// 	props.history.push('/About')
	// }, 2000)
	return(
			<div>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
							
						<li>
							<NavLink to ="/Contact"> Contact</NavLink>
						</li>
						<li>
						<NavLink to="/About"> About</NavLink>
						</li>
					</ul>
			</div>
			)
}

export default withRouter(Navbar)