function Map({ border }) {
	return (
		<div class='d-flex flex-column align-center mb-8'>
			<div className='abstract-font heading--xl text-center'>Directions map</div>
			<iframe
				className='iframe-wrapper'
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.404769445706!2d17.017251040445576!3d51.11197413727739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f713eabea3dfd%3A0xef8c2605950ce7fc!2sZielone%20Wzg%C3%B3rze!5e0!3m2!1spl!2spl!4v1692470669137!5m2!1spl!2spl'
				style={border && { border: '2px solid', borderRadius: '16px' }}
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'></iframe>
		</div>
	)
}

export default Map
