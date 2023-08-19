function FormRow({ label, rounded = true, textarea = false, rows = 5 }) {
	return (
		<div className='position-relative'>
			{textarea ? (
				<textarea rows={rows} type={'text'} className={rounded ? 'rounded-2 w-100' : ''}></textarea>
			) : (
				<input type={'text'} name='fname' id='fname' className={rounded ? 'rounded-2' : ''}></input>
			)}
			<label className='floating-label' htmlFor='fname'>
				{label}
			</label>
		</div>
	)
}

export default FormRow
