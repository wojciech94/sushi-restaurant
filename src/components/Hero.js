import React from 'react'
import CallToAction from './CallToAction'

function HeroText({ text }) {
	return <p className='hero-text'>{text}</p>
}

function HeroImg({ name }) {
	return <img src={process.env.PUBLIC_URL + '/img/' + name + '.jpg'} alt='sushi' className='hero-img'></img>
}

function HeroShadow() {
	return <div className='hero-shadow'></div>
}

const GoToMenu = {
	text: 'Checkout our',
	btnText: 'Menu',
}

function Hero({ hero }) {
	return (
		<div className='hero'>
			<HeroImg name={hero.name} />
			{hero.shadow === true ? <HeroShadow /> : <></>}
			<HeroText text={hero.text} />
			{hero.useAction === true ? <CallToAction action={GoToMenu} /> : <></>}
		</div>
	)
}

export default Hero
