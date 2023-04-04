import React from 'react'
import { Mail, Phone, MapPin } from 'react-feather'

function Footer() {
	return (
		<div className='footer__container'>
			<div className='d-grid grid-column--3 p-6 bg-white'>
				<div>
					<div className='mb-6'>
						<span className='heading heading__underline'>Contact</span>
					</div>
					<div className='d-flex align-items-center g-2 mb-2'>
						<MapPin />
						<span>St. Louis street, 61223 London</span>
					</div>
					<div className='d-flex align-items-center g-2 mb-2'>
						<Phone />
						<span>+24 891000912</span>
					</div>
					<div className='d-flex align-items-center g-2 mb-2'>
						<Mail />
						<span>sushihome@ethermail.io</span>
					</div>
				</div>
				<div>
					<div className='mb-6'>
						<span className='heading heading__underline'>Opening Hours</span>
					</div>
					<div className='mb-2'>Monday - Friday : 8AM - 10PM</div>
					<div className='mb-2'>Saturday : 8AM - 11PM</div>
					<div className='mb-2'>Sunday : 10AM - 9PM</div>
				</div>
				<div>
					<div className='heading heading__underline text-center'>Shortcuts</div>
					<div className='d-flex flex-column flex-center g-2 mt-4'>
						<a href='#about-us'>About us</a>
						<a href='#'>Home</a>
						<a href='#stats'>Stats</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
