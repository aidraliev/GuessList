import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import Header from './components/header/header'
import Content from './components/content/content'
import Footer from './components/footer/footer'

function App() {
	return (
		<div className='App'>
			<Header />
			<Content />
			<Footer />
		</div>
	)
}

export default App
