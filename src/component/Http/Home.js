import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


class Home extends React.Component{
	constructor(){
		super()
		this.state={
			posts:[],
			names:[]


		}
	}


	AddUsers=(user)=>{
		let users = [...this.state.names, user]
		this.setState({
			names:users
		})
	}


	componentDidMount(){
		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(res=>{
				this.setState({
					posts: res.data.slice(0,6)
				})

				//console.log(this.state)
			})
			.catch(err=>{
				console.log(err)
			})
			}

	render(){
		//const {users} = this.props
			
		const {posts} = this.state

			const allPosts = posts.length ? (
				posts.map(post=>{
					return (
						<div key={post.id}>
						<div><Link to={'/'+ post.id}><h2>{post.title}</h2></Link></div>
						<p>{post.body}</p>
						</div>
						)
				})) :  <div>No Posts Found</div>

	return(
		<div className='center'>
				<h1>Welcome To Introduction to React</h1>
				<h2>Courses Available</h2>

				{allPosts}



			<h1> Registered Users </h1>
			<p>***************</p>
				<p>{this.props.name}</p>
				<p>{this.props.Email}</p>
				<p>{this.props.Status}</p>
				<p>{this.props.checkbox}</p>
				<p>{this.props.Phone}</p>
				<p>***************</p>
			{console.log(this.props.name)}

		</div>
		)
}
}


export default Home
