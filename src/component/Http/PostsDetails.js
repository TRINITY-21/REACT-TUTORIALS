import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostDetails extends React.Component{
	constructor(){
		super()
		this.state={
			posts:null

		}
	}


	componentDidMount(){
		let id = this.props.match.params.post_id
		axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
			.then(res=>{
				this.setState({
					posts:res.data
				})

				//console.log(this.state)
			})
			.catch(err=>{
				console.log(err)
			})
			}

	render(){
			const {posts} = this.state
			const allPosts = posts? ( 
					<div key={posts.id}>
					<h2>{posts.title}</h2>
						<p>{posts.body}</p>
					</div>
					) 
				: <h1>Posts Loading......!</h1>
					
		
		
	return(
		<div className='center'>
				<h1>Welcome To Introduction to React</h1>
				<h2>Courses Available</h2>

					{allPosts}

		</div>
		)
}
}


export default PostDetails
