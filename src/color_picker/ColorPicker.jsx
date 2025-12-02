import { useEffect, useState } from 'react'
import './ColorPicker.css'

function ColorPicker() {
	const [color, changeColor] = useState('red')

	useEffect(() => {
		console.log(color)
	}, [color])

	return (
		<div className='ColorPicker' style={{ backgroundColor: color }}>
			<button onClick={() => changeColor('red')} className='ColorPicker_button'>
				Red
			</button>
			<button
				onClick={() => changeColor('blue')}
				className='ColorPicker_button'
			>
				Blue
			</button>
			<button
				onClick={() => changeColor('green')}
				className='ColorPicker_button'
			>
				Green
			</button>
		</div>
	)
}

export default ColorPicker
