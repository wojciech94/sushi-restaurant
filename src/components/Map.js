function Map({ border }) {
	return (
		<>
			<h2>Directions map</h2>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1252.404769445706!2d17.017251040445576!3d51.11197413727739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f713eabea3dfd%3A0xef8c2605950ce7fc!2sZielone%20Wzg%C3%B3rze!5e0!3m2!1spl!2spl!4v1692470669137!5m2!1spl!2spl'
				width='600'
				height='450'
				style={border && { border: '2px solid', borderRadius: '16px' }}
				allowfullscreen=''
				loading='lazy'
				referrerpolicy='no-referrer-when-downgrade'></iframe>
		</>
	)
}

export default Map
