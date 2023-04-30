import Hero from './Hero'
import Offers from '../special_offers.json'
import { CtxConsumer } from '..'
import { useState } from 'react'

function MenuCard({ cardData, activeId, setActiveTab }) {
	return (
		<div
			onClick={() => {
				setActiveTab(cardData.id)
			}}
			className={cardData.id === activeId ? 'menu__title active' : 'menu__title'}>
			{cardData.name}
		</div>
	)
}

function MenuSection() {
	const [activeId, setActiveId] = useState(0)
	const setActiveTab = id => {
		setActiveId(id)
	}

	const cards = [
		{ name: 'Snacks', id: 0 },
		{ name: 'Maki', id: 1 },
		{ name: 'Futomaki', id: 2 },
		{ name: 'Uramaki', id: 3 },
		{ name: 'Nigiri', id: 4 },
		{ name: 'Sets', id: 5 },
	]

	const snacks = [
		{ name: 'snack1', cost: 4, ingredients: 'abcsdfs asdfsdf fsdffsd dsfg dfgdfg' },
		{ name: 'snack2', cost: 4.5, ingredients: 'babcsdfs asdfsdf sfdgd' },
		{ name: 'snack3', cost: 5, ingredients: 'cabcsdfs asdfsdf gdfg dfgdfg dfgds dsfg fdgsdf dfgd' },
		{ name: 'snack4', cost: 5, ingredients: 'dabcsdfs asdfsdf fgd gdfg gdfgdf' },
		{ name: 'snack5', cost: 6, ingredients: 'eabcsdfs asdfsdf dfgd gdfg dsgfgdf gdfgdfg' },
		{ name: 'snack6', cost: 8, ingredients: 'fabcsdfs asdfsdf dfgdd' },
	]

	return (
		<div className='menu__container'>
			<div className='heading heading--lg heading__underline heading__red text-center'>Menu</div>
			<div className='menu__header'>
				{cards.map(card => {
					return <MenuCard cardData={card} activeId={activeId} setActiveTab={setActiveTab} />
				})}
			</div>
			<div className='menu__content wrapper'>
				<div className='d-flex flex-wrap justify-evenly'>
					{activeId === 0 &&
						snacks.map(snack => {
							return (
								<div className='d-flex flex-column w-400px p-6'>
									<div className='fw-bold d-flex justify-between'>
										<span className='food__title'>{snack.name}</span>
										<span className='food__cost'>{snack.cost}$</span>
									</div>
									<div className='d-flex flex-wrap food__description'>{snack.ingredients}</div>
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

function SpecialCard({ special }) {
	return (
		<CtxConsumer>
			{context => (
				<>
					<div className={context.day === special.day ? 'special__card special__card--active' : 'special__card'}>
						<img
							src={process.env.PUBLIC_URL + '/img/' + special.path + '.jpg'}
							className='special__image'
							alt='special card'></img>
						<h2 className='special__title'>{special.title}</h2>
						<p className='special__description'>{special.description}</p>
						<p className='special__place'>{special.place}</p>
					</div>
				</>
			)}
		</CtxConsumer>
	)
}

function Special() {
	const heroData = {
		shadow: true,
		name: 'sushihome_desktop',
		text: 'Check out our special offers',
	}

	return (
		<>
			<Hero hero={heroData} />
			<div className='special__wrapper p-8'>
				<div id='specials' className='heading heading--lg heading__underline text-center'>
					Special Offers
				</div>
				<div id='specials' className='special__container'>
					{Offers.map(offer => {
						return <SpecialCard key={offer.id} special={offer}></SpecialCard>
					})}
				</div>
			</div>
		</>
	)
}

function Menu() {
	return (
		<>
			<Special />
			<MenuSection />
		</>
	)
}

export default Menu
