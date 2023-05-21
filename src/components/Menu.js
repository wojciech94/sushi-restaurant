import Hero from './Hero'
import Offers from '../special_offers.json'
import MenuData from '../menu.json'
import { CtxConsumer } from '..'
import { useEffect, useState } from 'react'

function MenuCard({ cardData, activeId, setActiveTab }) {
	return (
		<div
			onClick={() => {
				setActiveTab(cardData.id)
			}}
			className={cardData.id === activeId ? 'menu__title active' : 'menu__title'}>
			{cardData.category}
		</div>
	)
}

function MenuSection() {
	const menuData = MenuData
	const [activeId, setActiveId] = useState(0)
	const setActiveTab = id => {
		setActiveId(id)
		switch (id) {
			case 0:
				setActiveCategory(snacks)
				break
			case 1:
				setActiveCategory(maki)
				break
			case 2:
				setActiveCategory(futomaki)
				break
			case 3:
				setActiveCategory(uramaki)
				break
			case 4:
				setActiveCategory(nigiri)
				break
			case 5:
				setActiveCategory(sets)
				break
			default:
				setActiveCategory(snacks)
				break
		}
	}
	const [activeCategory, setActiveCategory] = useState({})
	const [categories, setCategories] = useState([])
	const [snacks, setSnacks] = useState([])
	const [maki, setMaki] = useState([])
	const [futomaki, setFutomaki] = useState([])
	const [uramaki, setUramaki] = useState([])
	const [nigiri, setNigiri] = useState([])
	const [sets, setSets] = useState([])

	useEffect(() => {
		let c = []
		menuData.map((cat, i) => {
			c.push({ category: cat.category, id: i })
			return cat
		})
		setCategories(c)
		loadSnacks()
		loadMaki()
		loadFuto()
		loadUra()
		loadNigiri()
		loadSets()
	}, [])

	useEffect(() => {
		setActiveCategory(snacks)
	}, [categories])

	const loadSnacks = () => {
		let snacks = menuData.find(sn => sn.category === 'Snacks')
		setSnacks(snacks.items)
	}

	const loadMaki = () => {
		let mak = menuData.find(m => m.category === 'Maki')
		setMaki(mak.items)
	}

	const loadFuto = () => {
		let futo = menuData.find(f => f.category === 'Futomaki')
		setFutomaki(futo.items)
	}

	const loadUra = () => {
		let ura = menuData.find(u => u.category === 'Uramaki')
		setUramaki(ura.items)
	}

	const loadNigiri = () => {
		let nigiri = menuData.find(n => n.category === 'Nigiri')
		setNigiri(nigiri.items)
	}

	const loadSets = () => {
		let sets = menuData.find(s => s.category === 'Sets')
		setSets(sets.items)
	}

	return (
		<div className='menu__container'>
			<div className='heading heading--lg heading__underline heading__red text-center'>Menu</div>
			<div className='menu__header'>
				{categories.length &&
					categories.map(cat => {
						return <MenuCard cardData={cat} activeId={activeId} setActiveTab={setActiveTab} />
					})}
			</div>
			<div className='menu__content wrapper'>
				<div className='d-flex flex-wrap justify-evenly'>
					{activeId === 5 ? <Sets items={activeCategory}></Sets> : <SimpleRoll items={activeCategory}></SimpleRoll>}
				</div>
			</div>
		</div>
	)
}

function SimpleRoll({ items }) {
	return (
		<>
			{items.length &&
				items.map(item => {
					return (
						<div className='d-flex flex-column w-400px p-6'>
							<div className='fw-bold d-flex justify-between'>
								<span className='food__title'>{item.name}</span>
								<span className='food__cost'>{item.cost}$</span>
							</div>
							<div className='d-flex flex-wrap food__description'>{item.ingredients}</div>
						</div>
					)
				})}
		</>
	)
}

function Sets({ items }) {
	return (
		<>
			{items.length &&
				items.map(item => {
					return (
						<div className='d-flex flex-column w-400px p-6'>
							<div className='fw-bold d-flex justify-between'>
								<span className='food__title'>{item.name}</span>
								<span className='food__cost'>{item.cost}$</span>
							</div>
							{item.items.map(ingred => {
								return (
									<div className='fw-bold d-flex justify-between'>
										<span className='food__title'>{ingred.name}</span>
										<span className='food__cost'>{ingred.count} pcs</span>
										<div className='d-flex flex-wrap food__description'>{ingred.ingredients}</div>
									</div>
								)
							})}
						</div>
					)
				})}
		</>
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
