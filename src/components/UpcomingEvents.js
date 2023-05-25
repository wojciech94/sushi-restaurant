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
		<div className='w-100 bg-light position-relative z-index-0 p-8 overflow-hidden'>
			<div
				className='d-flex align-center g-4 mx-auto w-30 h-400px items-container'
				style={{ transform: `translateX(-${activeId * 100}%)` }}>
				{eventsData != null &&
					eventsData.map((ev, id) => {
						return (
							<div key={id} className='min-w-100 w-100 p-4 text-center'>
								<h3>{ev.title}</h3>
								<h3>{activeId}</h3>
								<p>{ev.content[0]}</p>
								<div>{ev.date}</div>
							</div>
						)
					})}
			</div>
			<div className='btn-group p-4 bg-white z-index-0'>
				{eventsData != null &&
					eventsData.map((ev, id) => {
						return (
							<div onClick={() => updateId(id)} className={id === activeId ? 'px-4 py-2 active' : 'px-4 py-2'}></div>
						)
					})}
			</div>
		</div>
	)
}

export default UpcomingEvents
