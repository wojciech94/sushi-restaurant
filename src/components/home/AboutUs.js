import React from 'react'
import '../home/homeStyle.css'

const AboutUs = () => {
	return (
		<div className='about-us'>
			<div className='wrapper'>
				<div className='frame'>
					<h1 className='heading heading--xl'>About us</h1>
					<p className='paragraph'>
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English. Many
						desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
						search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
						over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
				<div className='frame frame-right'>
					<h1 className='heading heading-right heading--xl'>Our story</h1>
					<p className='paragraph'>
						It is a long established fact that a reader will be distracted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
						letters, as opposed to using 'Content here, content here', making it look like readable English. Many
						desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
						search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
						over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
					</p>
				</div>
			</div>
		</div>
	)
}

export default AboutUs
