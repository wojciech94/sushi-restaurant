import { useNavigate } from 'react-router-dom'

function NavLogo() {
	const navigate = useNavigate()

	const navig = () => {
		navigate('/home')
	}

	return <span className='nav__logo' onClick={() => navig()}></span>
}

export default NavLogo
