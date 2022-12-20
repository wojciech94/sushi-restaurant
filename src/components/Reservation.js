import React from 'react'
import Hero from './Hero'

function Reservation() {
	const heroData = {
		shadow: true,
		name: 'sushirestaurant_desktop',
		text: 'Book a table',
	}

	return (
		<div>
			<Hero hero={heroData} />
		</div>
	)
}

export default Reservation
