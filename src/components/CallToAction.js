import React from 'react'
import { useNavigate } from 'react-router-dom'

function CallToAction({ action }) {
	const navigate = useNavigate()

	return (
		<div className='call-to-action-wrapper'>
			<div className='call-to-action-paragraph'>{action.text}</div>
			<button className='call-to-action-btn' onClick={() => navigate('/menu')}>
				{action.btnText}
			</button>
		</div>
	)
}

export default CallToAction
