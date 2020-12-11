import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
class Home extends React.Component{
	constructor(){
		super()
		this.state={
			posts:[]
		}
	}

	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res=>{
			this.setState({
				posts:res.data.slice(0,10)
			})
			console.log(this.state.posts)
		})
	}
	render(){
		const {posts} = this.state

		const postList = posts.length ? (
			posts.map(post =>{
				return (
					<div key={post.id}>
						<h2><Link to={'/' + post.id}>{post.title}</Link></h2>
						<p>{post.body}</p>

					</div>)
			})) : (
			<div>No Posts Found!</div>)
		return(
			<div>
				{postList}
			</div>
		);
}}

export default Home