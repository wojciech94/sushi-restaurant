import React, { useEffect } from 'react'
import Address from './Address'
import Map from './Map'
import OpeningHours from './OpeningHours'
import ContactForm from './ContactForm'

function Contact() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	return (
		<div className='contact__container'>
			<div className='wrapper mx-auto max-w-1200px'>
				<div className='d-flex flex-column align-center g-4 rounded-5 p-8 my-8 bg-white'>
					<div className='heading--xl text-center abstract-font fs-5'>SushiHome restaurant</div>
					<Address></Address>
					<div className='separator my-4'></div>
					<Map border={true}></Map>
					<div className='separator my-4'></div>
					<OpeningHours></OpeningHours>
					<div className='separator my-4'></div>
					<ContactForm></ContactForm>
				</div>
			</div>
		</div>
	)
}

export default Contact
