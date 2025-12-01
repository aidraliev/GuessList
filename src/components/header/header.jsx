import './header.css'
import Logo from './logo.png'

function Header() {
	return (
		<div className='header'>
			<div className='header_initials'>
				<img className='header_logo' src={Logo} />
				<h1 className='header_title'>Elevare</h1>
			</div>
			<nav className='header_nav'>
				<a className='header_options' href=''>
					About us
				</a>
				<a className='header_options' href=''>
					Blog
				</a>
				<a className='header_options' href=''>
					News
				</a>
			</nav>

			<button className='header_button'>Sign in</button>
		</div>
	)
}

export default Header
