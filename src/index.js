import React, { createContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Special from './components/Special'
import Contact from './components/Contact'
import Restaurant from './components/Restaurant'
import Reservation from './components/Reservation'
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
						<Route path='/' element={<App />} />
						<Route path='/home' element={<App />} />
						<Route path='/special' element={<Special />} />
						<Route path='/restaurant' element={<Restaurant />} />
						<Route path='/reservation' element={<Reservation />} />
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
