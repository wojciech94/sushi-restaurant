import React, { useId } from 'react'

function FormRow({ label, id, rounded = true, textarea = false, rows = 5 }) {
	return (
		<div className='position-relative'>
			{textarea ? (
				<textarea
					rows={rows}
					type={'text'}
					name={id}
					id={id}
					required
					className={rounded ? 'min-h-100px min-w-200px w-100 rounded-2' : 'min-h-100px min-w-50 w-100'}></textarea>
			) : (
				<input
					type={'text'}
					name={id}
					id={id}
					required
					className={rounded ? 'min-w-200px w-50 rounded-2' : 'min-w-200px w-50'}></input>
			)}
			<label className='floating-label' htmlFor={id}>
				{label}
			</label>
		</div>
	)
}

export default FormRow
