import FormRow from './Form'

function ContactForm() {
	return (
		<div className='wrapper'>
			<div className='heading--xl abstract-font text-center'>Contact form</div>
			<form
				id='contactform'
				action='https://formsubmit.io/send/0x6bb73744eac0ab9a142820e3b8dbd3264371d0dd@ethermail.io'
				method='POST'
				className='position-relative d-flex flex-column g-3'>
				<FormRow label={'First name'} id={'name'}></FormRow>
				<FormRow label={'Email'} id={'email'}></FormRow>
				<FormRow label={'Message'} id={'comment'} textarea={true}></FormRow>
				<input name='_formsubmit_id' type='text' className='d-none'></input>
				<input value='Submit' type='submit'></input>
			</form>
		</div>
	)
}

export default ContactForm
