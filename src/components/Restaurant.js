import React from 'react'
import Hero from './Hero'

function Restaurant() {
	const heroData = {
		shadow: true,
		name: 'sushirestaurant_desktop',
		text: 'Welcome in our Restaurant',
	}

	return (
		<div>
			<Hero hero={heroData} />
		</div>
	)
}

export default Restaurant
