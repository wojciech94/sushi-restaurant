import { ArrowLeft, ArrowRight, X, Search } from 'react-feather'
import { useState } from 'react'
import GalleryImages from '../../galleryImages.json'

function Gallery({ handleFullMode, fullMode }) {
	const [activeSrc, setActiveSrc] = useState('')
	const [activeTitle, setActiveTitle] = useState('')
	const [activeId, setActiveId] = useState(0)

	const handleActiveData = (id, src, title) => {
		handleActiveId(id)
		handleActiveSrc(src)
		handleActiveTitle(title)
	}

	const handleActiveId = id => {
		setActiveId(id)
	}

	const handleActiveSrc = src => {
		setActiveSrc(src)
	}

	const handleActiveTitle = title => {
		setActiveTitle(title)
	}

	const handleNextId = () => {
		let id = activeId === GalleryImages.length - 1 ? 0 : activeId + 1
		setActiveId(id)
		setActiveSrc(GalleryImages[id].src)
		setActiveTitle(GalleryImages[id].title)
	}

	const handlePrevId = () => {
		let id = activeId === 0 ? GalleryImages.length - 1 : activeId - 1
		setActiveId(id)
		setActiveSrc(GalleryImages[activeId].src)
		setActiveTitle(GalleryImages[activeId].title)
	}

	return (
		<div className='gallery'>
			{fullMode === true && (
				<div className='gallery-full'>
					<div className='gallery-title'>{activeTitle + ' id: ' + activeId}</div>
					{activeSrc !== '' && (
						<div className='gallery-full-container'>
							<img src={activeSrc} className='image-border'></img>
						</div>
					)}
					<button className='button button--light button--exit' onClick={() => handleFullMode(false)}>
						<X height={64} width={64} />
					</button>
					<button className='button button--light button--prev' onClick={handlePrevId}>
						<ArrowLeft height={64} width={64} />
					</button>
					<button className='button button--light button--next' onClick={handleNextId}>
						<ArrowRight height={64} width={64} />
					</button>
				</div>
			)}
			<div className='gallery-container'>
				{GalleryImages.map(img => {
					return (
						<div key={img.id} className='gallery-image'>
							<img src={img.src} className='image'></img>
							<button
								className='d-flex flex-center button button--light button--full bg-hover-shadow'
								onClick={() => {
									handleFullMode(true)
									handleActiveData(img.id, img.src, img.title)
								}}>
								<Search height={64} width={64} />
							</button>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Gallery
