import { useLocation } from 'react-router-dom'

function Post(data) {
	const location = useLocation()
	const { postDetails } = location.state || {}

	return (
		<div>
			<p>{postDetails?.title}</p>
			<p>{postDetails?.body}</p>
		</div>
	)
}

export default Post
