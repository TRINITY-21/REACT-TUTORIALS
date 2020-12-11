import React from 'react'
import { UserContext, ChannelContext} from '../App'

const ComponentC = ()=>{


	return(
		<UserContext.Consumer>
			{
				(user) =>{
					return(
						<ChannelContext.Consumer>
						{
							(channel)=>{
								return( 
									<div>
										<h1> ComponentC {channel}{user} Form</h1>
									</div>
										)
								}
						}
							
						</ChannelContext.Consumer>
						)
				}
			}
			</UserContext.Consumer>
		)
}

export default ComponentC