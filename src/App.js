import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
// Assuming Header, Content, Footer, Counter, and ColorPicker are not strictly needed for this specific guest list functionality
// import Header from './components/header/header'
// import Content from './components/content/content'
// import Footer from './components/footer/footer'
// import Counter from './counter'
// import ColorPicker from './color_picker/ColorPicker'
import GuestCard from './components/guest_card/GuestCard'

function App() {
	const [list, setList] = useState([])
	const [guestName, setGuestName] = useState('')
	function RemoveGuest(id) {
		setList(prevList => prevList.filter(guest => guest.id !== id))
	}

	function AddGuest(name) {
		if (name.trim() === '') return
		const guest = {
			name: name,
			id: Date.now(),
		}
		setList(prevList => [...prevList, guest])
		setGuestName('')
	}

	useEffect(() => {
		console.log('Guest list updated:', list)
	}, [list])

	const handleChange = event => {
		setGuestName(event.target.value)
	}

	return (
		<div className='App'>
			<div className='GuestApp'>
				<h1 className='GuestApp_title'>GuestReservationList</h1>
				<div className='GuestApp_Add'>
					<input
						className='GuestApp_Add_Input'
						value={guestName}
						onChange={handleChange}
						placeholder='Enter guest name'
					/>
					<button
						className='GuestApp_Add_Button'
						onClick={() => AddGuest(guestName)}
					>
						Add
					</button>
				</div>

				<div className='GuestApp_Container'>
					{list.map(guest => (
						<GuestCard
							key={guest.id}
							name={guest.name}
							onPress={() => RemoveGuest(guest.id)}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default App
