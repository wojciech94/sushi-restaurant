import '../Utils.css'
import '../App.css'
import Hero from '../Hero'
import AboutUs from './AboutUs'
import Stats from './Stats'
import Carousel from '../Carousel'
import Gallery from './Gallery'
import '../home/homeStyle.css'
import { useEffect, useRef, useState } from 'react'

function App({ scrollTop }) {
	const [fullMode, setFullMode] = useState(false)
	let offset = useRef()

	const handleFullMode = state => {
		setFullMode(state)
		state === true && (offset.current = window.scrollY)
	}

	useEffect(() => {
		window.scrollTo(0, offset.current)
	}, [fullMode])

	const heroData = {
		shadow: true,
		name: 'sushi_desktop',
		text: 'Welcome to our restaurant!',
		useAction: true,
	}

	return (
		<div className='App'>
			<Hero hero={heroData} />
			<AboutUs />
			<Stats scrollTop={scrollTop} />
			<Carousel />
			<Gallery handleFullMode={handleFullMode} fullMode={fullMode} />
		</div>
	)
}

export default App
