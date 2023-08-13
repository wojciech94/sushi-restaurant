import { MapPin } from 'react-feather'

function SpecialEvents() {
	return (
		<div className='bg-image sushihome-image position-relative z-index-0 p-8'>
			<div className='position-absolute bg-transparent-black-6 w-100 h-100 top-0 left-0'></div>
			<div className='position-absolute w-80 max-w-1200px top-50 left-50 translate-50 rounded-4 p-8 bg-transparent-7'>
				<div className='d-flex flex-column g-3 mb-4'>
					<h2 className='heading heading--md heading__gray'>Special events</h2>
					<div className='d-flex g-1 align-center'>
						<MapPin></MapPin>
						<span className='badge'>Wrocław</span>
					</div>
					<h3 className='mt-2'>Special Occasion Events</h3>
					<div>
						Planning a memorable event such as a birthday, anniversary, or corporate gathering? Our restaurant is the
						perfect venue to celebrate these special occasions in style. Let us know your needs, and our event
						specialists will organize a customized culinary package that will delight your guests and create a unique
						atmosphere.
					</div>
					<h3 className='mt-2'>Sushi Courses</h3>
					<div>
						Dreaming of mastering the art of sushi-making like a true master? Our intensive sushi courses are the ideal
						solution. Our experienced chefs will show you how to select the freshest ingredients, execute perfect cuts,
						and compose elegant dishes. Not only will you gain new skills, but you'll also understand the philosophy of
						the culinary craft.
					</div>
					<h3 className='mt-2'>Thematic Events</h3>
					<div>
						We would like to invite you to our thematic events that will take you on culinary journeys through a
						diversity of tastes and cultures. Each event is dedicated to a specific region or culinary style, and our
						chefs create unique menus inspired by the traditions and flavors of that place. This is a perfect
						opportunity to explore new tastes and experience the incredible culinary diversity.
					</div>
					<div className='position-relative h-30px'>
						<button className='events-button'>Sign up</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SpecialEvents
