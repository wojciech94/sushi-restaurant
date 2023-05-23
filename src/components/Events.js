import React from 'react'
import Hero from './Hero'

function Events() {
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

export default Events
