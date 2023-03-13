import '../App.css'
import Hero from '../Hero'
import AboutUs from './AboutUs'
import Stats from './Stats'
import Carousel from '../Carousel'

function App({ scrollTop }) {
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
		</div>
	)
}

export default App
