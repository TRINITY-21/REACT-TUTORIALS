
import React,{useContext} from 'react'
import ComponentC from '../hooks/ComponentC'
import {UserContext, ChannelContext} from '../App'

const ComponentB =()=>{

	const user = useContext(UserContext)
	const channel = useContext(ChannelContext)

	return(
		<div>
			{user} - {channel}
					<ComponentC />

		</div>

		)
}

export default ComponentB