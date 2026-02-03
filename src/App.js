import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Posts from './pages/posts/posts'
import Home from './pages/home/home'
import Post from './pages/post/post'

function App() {
	return (
		<div>
			<Link to='/'>Home</Link>
			<Link to='/posts'>Posts</Link>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:id' element={<Post />} />
			</Routes>
		</div>
	)
}

export default App
