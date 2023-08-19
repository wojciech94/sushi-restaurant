import React from 'react'
import Address from './Address'
import Map from './Map'
import OpeningHours from './OpeningHours'
import ContactForm from './ContactForm'

function Contact() {
	return (
		<>
			<Address></Address>
			<Map border={true}></Map>
			<OpeningHours></OpeningHours>
			<ContactForm></ContactForm>
		</>
	)
}

export default Contact
