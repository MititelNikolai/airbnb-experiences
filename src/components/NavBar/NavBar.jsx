import React from 'react'
import LOGO from '../../assets/logo.svg'
import './navBar.css'
const NavBar = () => {
	return (
		<nav className='container navbar__container'>
			<img src={LOGO} alt='AirBnb Experiences' />
		</nav>
	)
}

export default NavBar
