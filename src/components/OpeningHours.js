function OpeningHours() {
	return (
		<div class='wrapper bg-image position-relative z-index-0 p-8 my-10 rounded-8 text-white'>
			<div className='position-absolute w-100 h-100 bg-transparent-black-6 rounded-8 top-0 left-0'></div>
			<div className='position-relative abstract-font heading--xl text-center text-white'>Opening hours</div>
			<div class='position-relative mx-auto w-50 min-w-200px d-flex flex-column align-center p-8 border border-2 border--white rounded-8'>
				<p className='heading--md m-0 abstract-font'>Mon - Fri</p>
				<p className='position-relative'>8AM - 10PM</p>
				<p className='heading--md m-0 abstract-font'>Saturday</p>
				<p className='position-relative'>8AM - 11PM</p>
				<p className='heading--md m-0 abstract-font'>Sunday</p>
				<p className='position-relative'>10AM-8PM</p>
			</div>
		</div>
	)
}

export default OpeningHours
