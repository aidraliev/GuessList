import './GuestCard.css'

function GuestCard(props) {
	return (
		<div className='GuestCard'>
			<p className='GuestCard_name'>{props.name}</p>
			<button className='GuestCard_button' onClick={props.onPress}>
				Delete
			</button>
		</div>
	)
}

export default GuestCard
