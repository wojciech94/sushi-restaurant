import { React, Fragment } from 'react'

function Workshops({ id }) {
	return (
		<Fragment>
			<div id={id} className='workshops-image position-relative z-index-0 p-8'>
				<div className='position-absolute bg-transparent-black-6 w-100 h-100 top-0 left-0'></div>
				<div className='position-absolute top-20 left-40 rounded-4 p-8 bg-transparent-7'>
					<div className='d-flex flex-column g-3 mb-4'>
						<div>
							<h2 className=''>Sushi workshops</h2>
							<span className='badge'>Wrocław</span>
						</div>
						<div className='d-flex flex-column rounded-2 border-start-4 border-color-red bg-transparent-black-3 p-3'>
							<div className=''>
								Cost: <span className='fw-bold'>199 PLN</span> / person
							</div>
							<div>
								Min number of participants: <span className='fw-bold'>8</span>
							</div>
						</div>
					</div>
					<h3 className=''>Workshop characteristics and schedule</h3>
					<ul className='m-4'>
						<li>You will be introduced to Japanese cuisine and learn about the history of sushi</li>
						<li>Qualified specialists will show you how to prepare the most popular types of sushi</li>
						<li>
							You will prepare selected types of sushi on your own (under the supervision of specialists) (2 rolls /
							person)
						</li>
						<li>You will learn how to use chopsticks and good table manners</li>
						<li>You will participate in a joint tasting of prepared sets and traditional Japanese drinks</li>
					</ul>
				</div>
			</div>
		</Fragment>
	)
}

export default Workshops
