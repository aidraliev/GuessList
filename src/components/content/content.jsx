import { useState } from 'react'
import './content.css'

function Content() {
	return (
		<div className='content'>
			<h1 className='content_title'>Unlock your full potential</h1>
			<p className='content_sentence'>
				Master soft skills like communication, leadership, and emotional
				intelligence to
				<br /> accelerate your growth.
			</p>
			<button className='content_button'>Learn More</button>
		</div>
	)
}

export default Content
