import React from 'react'
import { useState } from 'react'

const UploadForm = () => {

	const [file, setFile] = useState(null)

	const changeHandler = (e) => {
		let selected = e.target.files[0]

		if (selected) {
			setFile(selected);
			// 18:48
		}
	}

	return (
		<form>
			<input type = 'file' onChange = {changeHandler}/>
		</form>
	)
}

export default UploadForm