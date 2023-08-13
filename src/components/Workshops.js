import { React, Fragment } from 'react'
import { MapPin } from 'react-feather'

function Workshops({ id }) {
	return (
		<Fragment>
			<div id={id} className='bg-image workshops-image position-relative z-index-0 p-8'>
				<div className='position-absolute bg-transparent-black-6 w-100 h-100 top-0 left-0'></div>
				<div className='position-absolute w-80 max-w-1200px top-50 left-50 translate-50 rounded-4 p-8 bg-transparent-7'>
					<div className='d-flex flex-column g-3 mb-4'>
						<div>
							<h2 className='heading heading--md heading__gray'>Sushi workshops</h2>
							<div className='d-flex g-1 align-center mt-2'>
								<MapPin></MapPin>
								<span className='badge'>Wrocław</span>
							</div>
						</div>
						<div className='d-flex flex-column rounded-2 border-start-4 border-color-red bg-transparent-6 p-3'>
							<div className=''>
								Cost: <span className='fw-bold'>199 PLN</span> / person
							</div>
							<div>
								Min number of participants: <span className='fw-bold'>8</span>
							</div>
						</div>
					</div>
					<h3 className=''>Workshops characteristics and schedule</h3>
					<ul className='mx-4 mt-4 mb-2'>
						<li className='m-2'>You will be introduced to Japanese cuisine and learn about the history of sushi</li>
						<li className='m-2'>Qualified specialists will show you how to prepare the most popular types of sushi</li>
						<li className='m-2'>
							You will prepare selected types of sushi on your own (under the supervision of specialists) (2 rolls /
							person)
						</li>
						<li className='m-2'>You will learn how to use chopsticks and good table manners</li>
						<li className='m-2'>
							You will participate in a joint tasting of prepared sets and traditional Japanese drinks
						</li>
					</ul>
					<div className='position-relative h-50px'>
						<button className='events-button'>Sign up</button>
					</div>
				</div>
			</div>
		</Fragment>
	)
}

export default Workshops
