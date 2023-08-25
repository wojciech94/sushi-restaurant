import React from 'react'

const AboutUs = () => {
	return (
		<div id='about-us' className='about-us'>
			<div className='wrapper'>
				<div className='frame'>
					<h1 className='heading heading--xl heading__gray'>About us</h1>
					<p className='paragraph'>
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English. Many
						desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
						search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
						over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
				<div className='frame frame--right'>
					<h1 className='heading heading-right heading--xl heading__gray'>Our story</h1>
					<p className='paragraph'>
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English. Many
						desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
						search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
						over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
				<div className='frame'>
					<h1 className='heading heading--xl heading__gray'>Team</h1>
					<div className='frame__container'>
						<div className='frame__group'>
							<img src='/sushi-restaurant/img/stuff/cook-small.jpg' className='frame__image'></img>
						</div>
						<div className='frame__group min-w-300p'>
							<div className='d-flex align-center g-2'>
								<h2>Bogdan</h2>
								<span className='badge'>manager</span>
							</div>
							<p className='paragraph'>
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
								search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
								evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</div>
				</div>
				<div className='frame frame--right'>
					<div className='frame__container'>
						<div className='frame__group min-w-300p order-2 order-lg-1'>
							<div className='d-flex align-center g-2'>
								<h2>Choi Son</h2>
								<span className='badge'>chef</span>
							</div>
							<p className='paragraph'>
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
								search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
								evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
						<div className='frame__group order-1 order-lg-2'>
							<img src='/sushi-restaurant/img/stuff/chefs-small.jpg' className='frame__image'></img>
						</div>
					</div>
				</div>
				<div className='frame'>
					<div className='frame__container'>
						<div className='frame__group'>
							<img src='/sushi-restaurant/img/stuff/cooking-small.jpg' className='frame__image'></img>
						</div>
						<div className='frame__group min-w-300p'>
							<div className='d-flex align-center g-2'>
								<h2>Olivia</h2>
								<span className='badge'>cook</span>
							</div>
							<p className='paragraph'>
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
								search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
								evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
					</div>
				</div>
				<div className='frame frame--right'>
					<div className='frame__container'>
						<div className='frame__group min-w-300px order-2 order-lg-1'>
							<div className='d-flex align-center g-2'>
								<h2>Natalia</h2>
								<span className='badge'>waiter</span>
							</div>
							<p className='paragraph'>
								It is a long established fact that a reader will be distracted by the readable content of a page when
								looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
								of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
								desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
								search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have
								evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
							</p>
						</div>
						<div className='frame__group order-1 order-lg-2'>
							<img src='/sushi-restaurant/img/stuff/waitress--small.jpg' className='frame__image'></img>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
