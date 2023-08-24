import { MapPin, Phone, Send } from 'react-feather'

function ContactParameter({ text }) {
	return (
		<div className='d-flex flex-column align-center g-2'>
			<div className='symbol d-flex flex-center'>
				<MapPin width={'28px'} height={'28px'}></MapPin>
			</div>
			{text.map((t, index) => {
				return index === 0 ? (
					<h4 className='symbol-heading' key={index}>
						{t}
					</h4>
				) : (
					<p className='symbol-paragraph' key={index}>
						{t}
					</p>
				)
			})}
		</div>
	)
}

function Address() {
	return (
		<div className='wrapper max-w-1000px'>
			<div className='d-flex justify-evenly mb-8 g-4'>
				<ContactParameter text={['Address', 'St. Louis street', '61223 London']}></ContactParameter>
				<ContactParameter text={['Phone', '+24 891000912']}></ContactParameter>
				<ContactParameter text={['Email', 'sushihome@xyz.io']}></ContactParameter>
			</div>
		</div>
	)
}

export default Address
