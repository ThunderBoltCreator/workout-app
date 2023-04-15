import { useCompleteLog } from './hooks/useCompleteLog'
import { useExercisePage } from './hooks/useExercisePage'
import { useUpdateTime } from './hooks/useUpdateTime'

import Alert from 'components/ui/Alert/Alert'
import { Loader } from 'components/ui/Loader'

import ExerciseError from './ExerciseError'
import ExerciseHeader from './ExerciseHeader'
import Table from './Table/Table'

const Exercise: React.FC = () => {
	const { exerciseLog, isLoading, isSuccess, times, setTimes } =
		useExercisePage()
	const { updateTime, errorChange } = useUpdateTime()
	const { completeLog, errorCompleted } = useCompleteLog()
	if (!exerciseLog) return null

	return (
		<>
			<ExerciseHeader exerciseLog={exerciseLog} isSuccess={isSuccess} />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<ExerciseError errors={[errorChange, errorCompleted]} />
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
