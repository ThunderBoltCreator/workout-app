import React from 'react'

import Alert from 'components/ui/Alert/Alert'

interface IExerciseError {
	errors: any[]
}
const ExerciseError: React.FC<IExerciseError> = ({ errors }) => {
	return (
		<div style={{ width: '90%', margin: '0 auto' }}>
			{errors.map((error, index) =>
				error ? (
					<Alert key={error + index} type='error' text={error} />
				) : null
			)}
		</div>
	)
}

export default ExerciseError
