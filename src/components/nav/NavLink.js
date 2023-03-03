import { React } from 'react'
import { useNavigate } from 'react-router-dom'

function NavLink({ name, navUrl, toggler }) {
	const navigate = useNavigate()

	const navig = navUrl => {
		toggler()
		navigate('/' + navUrl)
	}

	return (
		<li className='nav__link' onClick={() => navig(navUrl)}>
			{name}
		</li>
	)
}

export default NavLink
