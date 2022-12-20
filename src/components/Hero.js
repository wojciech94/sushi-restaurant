import React from 'react'

function HeroText({ text }) {
	return <p className='hero-text'>{text}</p>
}

function HeroImg({ name }) {
	return <img src={process.env.PUBLIC_URL + '/img/' + name + '.jpg'} alt='sushi' className='hero-img'></img>
}

function HeroShadow() {
	return <div className='hero-shadow'></div>
}

function Hero({ hero }) {
	return (
		<div className='hero'>
			{console.log(hero.name)}
			<HeroImg name={hero.name} />
			{hero.shadow === true ? <HeroShadow /> : <></>}
			<HeroText text={hero.text} />
		</div>
	)
}

export default Hero
