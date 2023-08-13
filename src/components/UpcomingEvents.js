import { useEffect, useState, Fragment } from 'react'
import Events from '../upcoming_events.json'

function UpcomingEvents() {
	const [activeId, setActiveId] = useState(0)
	const [eventsData, setEventsData] = useState(null)

	useEffect(() => {
		setEventsData(Events)
	}, [])

	const updateId = id => {
		setActiveId(id)
	}

	return (
		<div className='w-100 bg-concrete position-relative z-index-0 p-8 overflow-hidden'>
			<h2 className='d-flex text-white justify-center heading heading--md heading__underline'>Upcomming events</h2>
			<div
				className='d-flex align-center mx-auto w-30 items-container'
				style={{ transform: `translateX(-${activeId * 100}%)` }}>
				{eventsData != null &&
					eventsData.map((ev, id) => {
						return (
							<div className='d-flex flex-center min-w-100 mt-4'>
								<div key={id} className='border border-radius-5 bg-white px-8 py-4'>
									<h3 className='mb-4'>{ev.title}</h3>
									{ev.content.map(c => {
										return <p className='mb-2'>{c}</p>
									})}
									<div className='d-flex justify-between mt-4'>
										<div>{ev.date}</div>
										<div>{ev.cost}</div>
									</div>
									<div className='position-relative h-50px'>
										<button className='position-absolute events-button'>Sign up</button>
									</div>
								</div>
							</div>
						)
					})}
			</div>
			<div className='btn-group p-2 z-index-0'>
				{eventsData != null &&
					eventsData.map((ev, id) => {
						return (
							<div
								onClick={() => updateId(id)}
								className={id === activeId ? 'px-4 py-2 active' : 'bg-white px-4 py-2'}></div>
						)
					})}
			</div>
			<div className='position-absolute events-none top-0 left-0 w-100 h-100'></div>
		</div>
	)
}

export default UpcomingEvents
