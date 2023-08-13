import { MapPin } from 'react-feather'

function LiveCooking() {
	return (
		<div className='bg-image position-relative z-index-0 p-8'>
			<div className='position-absolute bg-transparent-black-6 w-100 h-100 top-0 left-0'></div>
			<div className='position-absolute w-80 max-w-1200px top-50 left-50 translate-50 rounded-4 p-8 bg-transparent-7'>
				<div className='d-flex flex-column g-3 mb-4'>
					<h2 className='heading heading--md heading__gray'>Live cooking with a sushi master</h2>
					<div className='d-flex g-1 align-center'>
						<MapPin></MapPin>
						<span className='badge'>Wrocław</span>
					</div>
					<div className='d-flex flex-column rounded-2 border-start-4 border-color-red bg-transparent-6 p-3'>
						Join our captiviting 'Live cooking with a Sushi Master' series, where an experienced sushi master will guide
						you through the enchanting world of crafting traditional and modern sushi dishes. Together, we will unravel
						the secrets of proper rice cooking, crafting various types of rolls, and creating perfect flavor
						combinations. This interactive culinary adventure will elevate your sushi skills to the next level.
					</div>
					<h3 className='mt-2'>What can you expect</h3>
					<ul className='mx-5'>
						<li className='mt-2 mb-1'>
							<h4>Creating artistic decorations</h4>
							<div>
								The sushi master can show how to prepare decorative elements from vegetables, such as flowers or other
								motifs, adding elegance and attractiveness to the presented dishes.
							</div>
						</li>
						<li className='mt-2 mb-1'>
							<h4>Preparing Unique Ingredients</h4>
							<div>
								The sushi master can introduce viewers to the world of lesser-known ingredients, such as unique types of
								fish or vegetables, whose flavors and history can be fascinating.
							</div>
						</li>
						<li className='mt-2 mb-1'>
							<h4>The Art of Color Composition</h4>
							<div>
								Explain how various sushi ingredients can create beautiful color combinations and discuss the
								significance of aesthetics in sushi cuisine.
							</div>
						</li>
						<li className='mt-2 mb-1'>
							<h4>Contests and Audience Interaction</h4>
							<div>
								Organize contests where viewers can guess the ingredients to be used or the dish to be prepared. This
								will increase engagement and make the live shows more interactive.
							</div>
						</li>
						<li className='mt-2'>
							<h4>Tastings</h4>
							<div>
								Show how to professionally taste sushi, assess flavors and sensory experiences, and how to pair
								different types of sushi with various beverages.
							</div>
						</li>
					</ul>
					<div className='position-relative h-30px'>
						<button className='events-button'>Sign up</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LiveCooking
