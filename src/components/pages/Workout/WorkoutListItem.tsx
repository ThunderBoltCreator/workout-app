import { UseMutateFunction } from '@tanstack/react-query/build/lib/types'
import { IWorkout } from 'services/Workout/workout.service'

import s from './workout.module.scss'

interface IWorkoutItemProps {
	workout: IWorkout
	mutate: UseMutateFunction<unknown, unknown, number>
}
const WorkoutItem: React.FC<IWorkoutItemProps> = ({ workout, mutate }) => {
	return (
		<div className={s.item}>
			<button
				aria-label='Create new workout'
				onClick={() => mutate(workout.id)}
			>
				<span>{workout.name}</span>
			</button>
		</div>
	)
}

export default WorkoutItem
