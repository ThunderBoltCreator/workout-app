import Alert from 'components/ui/Alert/Alert'
import { Loader } from 'components/ui/Loader'

import ExerciseHeader from './ExerciseHeader'
import Table from './Table/Table'
import { useExercisePage } from './useExercisePage'

const Exercise: React.FC = () => {
	const { exerciseLog, isLoading, isSuccess } = useExercisePage()

	if (!exerciseLog) return null

	return (
		<>
			<ExerciseHeader exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{/* <ExerciseError errors={[errorChange, errorCompleted]} /> */}
				{isLoading ? (
					<Loader />
				) : (
					<Table exerciseLog={exerciseLog} />

					// 	{exerciseLog?.times?.map((item, index) => (
					// 		<TableRow item={item} key={item.id} />
					// 	))}
				)}

				{isSuccess && exerciseLog?.times?.length === 0 && (
					<Alert type='warning' text='Times not found' />
				)}
			</div>
		</>
	)
}

export default Exercise
