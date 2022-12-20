import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Special from './components/Special'
import Contact from './components/Contact'
import Restaurant from './components/Restaurant'
import Reservation from './components/Reservation'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Nav />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/home' element={<App />} />
				<Route path='/special' element={<Special />} />
				<Route path='/restaurant' element={<Restaurant />} />
				<Route path='/reservation' element={<Reservation />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
)

reportWebVitals()
