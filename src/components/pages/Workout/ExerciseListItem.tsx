import cn from 'clsx'
import { useServerUrl } from 'hooks/useServerUrl'
import { useNavigate } from 'react-router-dom'
import { IExerciseLog } from 'services/Exercise/exercise-log.service'

import s from './workout.module.scss'

interface IProps {
	exerciseLog: IExerciseLog
}
const ExerciseListItem: React.FC<IProps> = ({ exerciseLog }) => {
	console.log(exerciseLog)

	const nav = useNavigate()
	return (
		<div className={cn(s.item, { [s.completed]: exerciseLog.isCompleted })}>
			<button
				aria-label='Move to exercise'
				onClick={() => nav(`/exercises/${exerciseLog.id}`)}
			>
				<span>{exerciseLog.exercise?.name}</span>
				<img
					src={useServerUrl(exerciseLog?.exercise?.iconPath)}
					height={34}
					alt=''
					draggable={false}
				/>
			</button>
		</div>
	)
}

export default ExerciseListItem
