import React from 'react'
import { Mail, Phone, MapPin } from 'react-feather'

function Footer() {
	const shorts = [
		{
			name: 'Home',
			path: '#',
		},
		{
			name: 'Menu',
			path: '/menu',
		},
		{
			name: 'Specials',
			path: '/menu#specials',
		},
		{
			name: 'Events',
			path: '/events',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
	]

	return (
		<div className='footer__container'>
			<div className='d-flex flex-wrap'>
				<div className='col-12 col-md-6 col-xl-4 p-4'>
					<div className='mb-6 mt-3'>
						<span className='heading heading__underline heading__gray'>Contact</span>
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
				<div className='col-12 col-md-6 col-xl-4 p-4'>
					<div className='mb-6 mt-3'>
						<span className='heading heading__underline heading__gray'>Opening Hours</span>
					</div>
					<div className='mb-2'>Monday - Friday : 8AM - 10PM</div>
					<div className='mb-2'>Saturday : 8AM - 11PM</div>
					<div className='mb-2'>Sunday : 10AM - 9PM</div>
				</div>
				<div className='col-12 col-xl-4 p-4'>
					<div className='heading heading__underline heading__gray text-center'>Shortcuts</div>
					<div className='d-flex flex-wrap justify-evenly g-2 m-4'>
						{shorts.map(short => {
							return (
								<a key={short.name} href={short.path}>
									{short.name}
								</a>
							)
						})}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
