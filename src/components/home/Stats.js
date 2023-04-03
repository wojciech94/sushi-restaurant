import React, { useEffect, useRef, useState } from 'react'

function Stats({ scrollTop }) {
	const [statsItem, setStatsItem] = useState(0)
	const [statsData, setStatsData] = useState([])
	const [calcLock, setCalcLock] = useState(false)
	const [counterVal, setCounterVal] = useState(0)
	const [yearsVal, setYearsVal] = useState(0)
	const [scoreVal, setScoreVal] = useState(0)
	const [ordersVal, setOrdersVal] = useState(0)
	const [clientsVal, setClientsVal] = useState(0)
	let refCounter = useRef()

	const getData = () => {
		fetch('./stats.json', {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
			.then(function (response) {
				return response.json()
			})
			.then(function (myData) {
				setStatsData(myData)
			})
	}

	useEffect(() => {
		const stats = document.querySelector('.stats')
		setStatsItem(stats)
		getData()
	}, [])

	useEffect(() => {
		scrollTop + window.innerHeight - 100 > statsItem.offsetTop && !calcLock && calcStats()
	}, [scrollTop])

	useEffect(() => {
		refCounter.current = counterVal
		const y = Math.round((refCounter.current / 100) * statsData.map(stats => stats.years))
		const s = Math.round(((refCounter.current * 10) / 100) * statsData.map(stats => stats.score)) / 10
		const o = Math.round((refCounter.current / 100) * statsData.map(stats => stats.orders))
		const c = Math.round((refCounter.current / 100) * statsData.map(stats => stats.clients))
		setYearsVal(y)
		setScoreVal(s)
		setOrdersVal(o)
		setClientsVal(c)
	}, [counterVal])

	const counterFunction = () => {
		setCounterVal(counterVal => counterVal + 1)
	}

	const calcStats = async () => {
		setCalcLock(true)
		const interval20 = setInterval(counterFunction, 20)
		const result = await new Promise(function (resolve, reject) {
			setTimeout(function () {
				clearInterval(interval20)
				resolve('resolved')
			}, 2000)
		})
	}

	return (
		<div className='stats'>
			<div className='stats__wrapper'>
				<div className='stats__heading'>Statystyki</div>
				<div className='stats__container'>
					<div className='stats__item'>
						<span className='stats__value'>{yearsVal}</span>
						<span className='stats__text'>Lat na rynku</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{scoreVal}</span>
						<span className='stats__text'>Ocena na google</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{ordersVal}</span>
						<span className='stats__text'>Dostaw</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{clientsVal}</span>
						<span className='stats__text'>Klientów w restauracji</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
