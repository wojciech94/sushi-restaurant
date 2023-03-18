import React, { useState } from 'react'
import Recomendations from '../recomendations.json'
import { ArrowLeft, ArrowRight } from 'react-feather'

function Carousel() {
	const [activeId, setActiveId] = useState(0)
	const items = document.documentElement.clientWidth > 992 ? Recomendations.length / 2 : Recomendations.length

	const handlePrevId = () => {
		setActiveId(activeId <= 0 ? items - 1 : (activeId - 1) % items)
	}

	const handleNextId = () => {
		setActiveId((activeId + 1) % items)
	}

	return (
		<div className='carousel'>
			<div className='carousel-wrapper'>
				<div className='carousel-title'>Recomendations</div>
				<div className='carousel-container'>
					<div className='items-container' style={{ transform: `translateX(-${activeId * 100}%)` }}>
						{Recomendations.map(recomendation => {
							return (
								<div key={recomendation.id} className={'carousel-item'}>
									{recomendation.text !== '' && <div className='item-text'>{recomendation.text}</div>}
									{recomendation.author !== '' && <div className='item-name'>{recomendation.author}</div>}
									{recomendation.title !== '' && <div className='item-title'>{recomendation.title}</div>}
								</div>
							)
						})}
					</div>
				</div>
				<button className='button button--prev' onClick={handlePrevId}>
					<ArrowLeft height={64} width={64}></ArrowLeft>
				</button>
				<button className='button button--next' onClick={handleNextId}>
					<ArrowRight height={64} width={64}></ArrowRight>
				</button>
			</div>
		</div>
	)
}

export default Carousel
