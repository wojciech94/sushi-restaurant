import { React, useState } from 'react'
import NavLink from './NavLink'

function Nav() {
	const [visible, setVisible] = useState('nav')
	const [locked, setLocked] = useState(true)

	const toggleNav = () => {
		visible === 'nav' ? setVisible('nav nav--active') : setVisible('nav')
	}

	return (
		<ul className={visible}>
			<button className='nav__burger' onClick={toggleNav}></button>
			<NavLink name='Home' navUrl='' toggler={toggleNav}></NavLink>
			<NavLink name='Menu' navUrl='menu' toggler={toggleNav}></NavLink>
			<NavLink name='Special offer' navUrl='special' toggler={toggleNav}></NavLink>
			<NavLink name='Restaurant' navUrl='restaurant' toggler={toggleNav}></NavLink>
			<NavLink name='Reservation' navUrl='reservation' toggler={toggleNav}></NavLink>
			<NavLink name='Contact' navUrl='contact' toggler={toggleNav}></NavLink>
		</ul>
	)
}

export default Nav
