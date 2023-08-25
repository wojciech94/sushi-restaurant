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
		fetch('${process.env.PUBLIC_URL}/stats.json', {
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
			.catch(function (error) {
				console.error('Fetch error:', error) // Obsłuż błąd
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
		try {
			refCounter.current = counterVal
			const y = Math.round((refCounter.current / 100) * statsData.map(stats => stats.years))
			const s = Math.round(((refCounter.current * 10) / 100) * statsData.map(stats => stats.score)) / 10
			const o = Math.round((refCounter.current / 100) * statsData.map(stats => stats.orders))
			const c = Math.round((refCounter.current / 100) * statsData.map(stats => stats.clients))
			setYearsVal(y)
			setScoreVal(s)
			setOrdersVal(o)
			setClientsVal(c)
		} catch (error) {
			console.error('Error updating state:' + error)
		}
	}, [counterVal])

	const calcStats = async () => {
		setCalcLock(true)
		const startTime = Date.now()
		const duration = 2000 // Czas trwania w ms
		const interval = 20 // Interwał inkrementacji w ms

		const animateCounter = () => {
			const currentTime = Date.now()
			const elapsedTime = currentTime - startTime

			if (elapsedTime < duration) {
				const progress = elapsedTime / duration
				const nextValue = Math.min(Math.floor(progress * 100), 100)
				setCounterVal(nextValue)
				requestAnimationFrame(animateCounter)
			} else {
				setCounterVal(100)
			}
		}

		animateCounter()
	}

	return (
		<div id='stats' className='stats'>
			<div className='stats__wrapper'>
				<div className='stats__heading'>Stats</div>
				<div className='stats__container'>
					<div className='stats__item'>
						<span className='stats__value'>{yearsVal}</span>
						<span className='stats__text'>Years of experience</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{scoreVal}</span>
						<span className='stats__text'>Score on google</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{ordersVal}</span>
						<span className='stats__text'>Deliveries</span>
					</div>
					<div className='stats__item'>
						<span className='stats__value'>{clientsVal}</span>
						<span className='stats__text'>Clients in restaurant</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Stats
