import './posts.css'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

function Posts(post) {
	const [userData, posts] = useState(null)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(response => response.json())
			.then(json => posts(json))
	}, [])

	return (
		<div className='post'>
			{userData?.map(post => (
				<div>
					<p>{post.title}</p>
					<p>{post.body}</p>
					<Link to={`/posts/${post.id}`} state={{ postDetails: post }}>
						ReadMore
					</Link>
				</div>
			))}
		</div>
	)
}

export default Posts
