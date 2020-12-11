import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
	
	const [post,setPost] = useState([])
	const [error,setError] = useState('')
	const [loading,setLoading] = useState(true)


	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/posts')
		.then(res=>{
			setLoading(false)
			setError('')
			setPost(res.data)
		})

		.catch(error=>{
			setError('Something went wrong')
			setLoading(false)
			setPost({})		
		})
	})

	return( <div>
			{ loading ? 'loading....' : post.title }
			{ error ? error : null}
		</div>)

	
}

export default DataFetching