import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Offers from '../special_offers.json'

function SpecialCard({ special }) {
	return (
		<div className='special__card'>
			<div className='special__image'></div>
			<h2 className='special__title'>{special.title}</h2>
			<p className='special__description'>{special.description}</p>
			<p className='special__place'>{special.place}</p>
		</div>
	)
}

function Special() {
	const heroData = {
		shadow: true,
		name: 'sushihome_desktop',
		text: 'Check out our special offers',
	}

	return (
		<div>
			<Hero hero={heroData} />
			<div className='special__container'>
				{Offers.map(offer => {
					return <SpecialCard special={offer}></SpecialCard>
				})}
			</div>
		</div>
	)
}

export default Special
