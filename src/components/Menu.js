import Hero from './Hero'
import Offers from '../special_offers.json'
import { CtxConsumer } from '..'

function MenuCard({ cardData }) {
	return (
		<div className='col-12 col-md-4 col-xl-2'>
			<div className='menu__card my-4 mx-auto'>
				<img className='menu__img' src={process.env.PUBLIC_URL + cardData.path} height={'100%'}></img>
				<div className='menu__title'>{cardData.name}</div>
			</div>
		</div>
	)
}

function MenuSection() {
	const cards = [
		{ name: 'Snacks', path: '/img/sushi.jpg' },
		{ name: 'Maki', path: '/img/sushi.jpg' },
		{ name: 'Futomaki', path: '/img/sushi.jpg' },
		{ name: 'Uramaki', path: '/img/sushi.jpg' },
		{ name: 'Nigiri', path: '/img/sushi.jpg' },
		{ name: 'Sets', path: '/img/sushi.jpg' },
	]

	return (
		<div className='menu__container'>
			<div className='d-flex flex-wrap'>
				{cards.map(card => {
					return <MenuCard cardData={card} />
				})}
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
