import logo from './logo.svg'
import './App.css'
import { useDebugValue, useEffect, useState } from 'react'
import Header from './components/header/header'
import Content from './components/content/content'
import Footer from './components/footer/footer'
import Counter from './counter'
import ColorPicker from './color_picker/ColorPicker'

function App() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		document.title = `Count:${count}`
	}, [count])

	return (
		<div className='App'>
			<ColorPicker />
		</div>
	)
}

export default App
