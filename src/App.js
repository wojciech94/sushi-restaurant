import './App.css'
import Hero from './components/Hero'

function App() {
	const heroData = {
		shadow: true,
		name: 'sushi_desktop',
		text: 'In Love with sushi',
	}

	return (
		<div className='App'>
			<Hero hero={heroData} />
		</div>
	)
}

export default App
