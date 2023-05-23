import { React, useState } from 'react'
import NavLink from './NavLink'
import NavLogo from './NavLogo'

function Nav() {
	const [visible, setVisible] = useState('nav')
	const [locked, setLocked] = useState(true)

	const toggleNav = () => {
		visible === 'nav' ? setVisible('nav nav--active') : setVisible('nav')
	}

	return (
		<div className='nav-container'>
			<ul className={visible}>
				<button className='nav__burger' onClick={toggleNav}></button>
				<NavLogo></NavLogo>
				<NavLink name='Home' navUrl='' toggler={toggleNav}></NavLink>
				<NavLink name='Menu' navUrl='menu' toggler={toggleNav}></NavLink>
				<NavLink name='Events' navUrl='events' toggler={toggleNav}></NavLink>
				<NavLink name='Contact' navUrl='contact' toggler={toggleNav}></NavLink>
			</ul>
		</div>
	)
}

export default Nav
