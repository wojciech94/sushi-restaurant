import { ArrowLeft, ArrowRight, X, Search } from 'react-feather'

function Gallery({ handleFullMode, fullMode }) {
	return (
		<div className='gallery'>
			{fullMode === true && (
				<div className='gallery-full'>
					<div className='gallery-title'>Tytul</div>
					<button className='button button--light button--exit' onClick={() => handleFullMode(false)}>
						<X height={64} width={64} />
					</button>
					<button className='button button--light button--prev'>
						<ArrowLeft height={64} width={64} />
					</button>
					<button className='button button--light button--next'>
						<ArrowRight height={64} width={64} />
					</button>
				</div>
			)}
			<div className='gallery-container'>
				<div className='gallery-image'>
					<img src={process.env.PUBLIC_URL + '/img/sushi.jpg'} className='image'></img>
					<button
						className='d-flex flex-center button button--light button--full bg-hover-shadow'
						onClick={() => handleFullMode(true)}>
						<Search height={64} width={64} />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Gallery
