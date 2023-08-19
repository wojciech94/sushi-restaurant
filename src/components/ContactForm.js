import FormRow from './Form'

function ContactForm() {
	return (
		<>
			<div className='mx-6 bg-white'>
				<h2>Contact form</h2>
				<form className='position-relative d-flex flex-column g-2'>
					<FormRow label={'First name'}></FormRow>
					<FormRow label={'Email'}></FormRow>
					<FormRow label={'Message'} textarea={true}></FormRow>
				</form>
			</div>
		</>
	)
}

export default ContactForm
