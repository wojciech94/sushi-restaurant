import React from 'react'

function BackToTopBtn({ handleClick, scrollHeight }) {
	return (
		<>
			{scrollHeight >= 600 && (
				<button onClick={() => handleClick()} className={'back-to-top-btn'}>
					<i className='icon-up'></i>
				</button>
			)}
		</>
	)
}

export default BackToTopBtn
