import React, { useEffect } from 'react'
import Hero from './Hero'
import LiveCooking from './LiveCooking'
import SpecialEvents from './SpecialEvents'
import UpcomingEvents from './UpcomingEvents'
import Workshops from './Workshops'

function Events() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	const onClickAction = () => {
		let target = document.querySelector(`#${actionData.path}`)
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' })
		}
	}

	const actionData = {
		text: 'Check upcoming',
		btnText: 'Events',
		path: 'events',
		selfAction: true,
		onClickAction: onClickAction,
	}

	const heroData = {
		shadow: true,
		name: 'sushirestaurant_desktop',
		text: 'Restaurant offers',
		useAction: true,
		actionData: actionData,
	}

	return (
		<>
			<Hero hero={heroData} />
			<Workshops id={actionData.path}></Workshops>
			<LiveCooking></LiveCooking>
			<SpecialEvents></SpecialEvents>
			<UpcomingEvents></UpcomingEvents>
		</>
	)
}

export default Events
