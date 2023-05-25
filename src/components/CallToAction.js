import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function CallToAction({ action }) {
	const navigate = useNavigate()
	const [path, setPath] = useState('#')

	useEffect(() => {
		setPath(action.path)
	}, [])

	return (
		<div className='call-to-action-wrapper'>
			<div className='call-to-action-paragraph'>{action.text}</div>
			<button
				className='call-to-action-btn'
				onClick={() => (action.selfAction ? action.onClickAction() : navigate(path))}>
				{action.btnText}
			</button>
		</div>
	)
}

export default CallToAction
