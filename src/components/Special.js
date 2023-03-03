import Hero from './Hero'
import Offers from '../special_offers.json'
import { CtxConsumer } from '..'

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
		<CtxConsumer>
			{context => (
				<>
					<Hero hero={heroData} />
					<div className='special__wrapper'>
						<div className='special__container'>
							{Offers.map(offer => {
								return <SpecialCard key={offer.id} special={offer}></SpecialCard>
							})}
						</div>
					</div>
				</>
			)}
		</CtxConsumer>
	)
}

export default Special
