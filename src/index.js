import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/home/App'
import Nav from './components/nav/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Special from './components/Special'
import Contact from './components/Contact'
import Events from './components/Events'
import Footer from './components/Footer'
import BackToTopBtn from './components/BackToTopBtn'

const context = createContext()
const CtxProvider = context.Provider
export const CtxConsumer = context.Consumer

function Routing() {
	const [day, setDay] = useState('monday')
	const [scrlHeight, setScrlHeight] = useState(0)

	useEffect(() => {
		const d = new Date().toLocaleDateString('en-us', { weekday: 'long' })
		setDay(d)
		window.addEventListener('scroll', handleScroll)
	}, [])

	const handleScroll = () => {
		setScrlHeight(window.scrollY)
	}

	const handleBackTop = () => {
		window.scrollTo(0, 0)
	}

	return (
		<BrowserRouter>
			<React.StrictMode>
				<CtxProvider value={{ day: day }}>
					<Nav />
					<Routes>
						<Route path='/' element={<App scrollTop={scrlHeight} />} />
						<Route path='/home' element={<App />} />
						<Route path='/menu' element={<Special />} />
						<Route path='/events' element={<Events />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
					<BackToTopBtn handleClick={() => handleBackTop()} scrollHeight={scrlHeight}></BackToTopBtn>
					<Footer />
				</CtxProvider>
			</React.StrictMode>
		</BrowserRouter>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Routing />)
