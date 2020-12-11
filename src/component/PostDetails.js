import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostDetails extends React.Component{
	constructor(){
		super()
		this.state={
			post: null
		}
	}

	componentDidMount(){
		let id = this.props.match.params.post_id
		axios.get('https://jsonplaceholder.typicode.com/posts/'+ id)
			.then(res=>{

				this.setState({
			post: res.data
		})
				console.log(this.state.post)
	})
	

		
		
	}
	render(){
			 
				const postsDetails = this.state.post ? (
					<div>
					<h1>{this.state.post.title}</h1>
					<h4>{this.state.post.body}</h4>
					</div>):(
					<div>Post Loading...!</div>
					)
			
		return(
			<div>
				{postsDetails}
			</div>
		);
}
}

export default PostDetails

