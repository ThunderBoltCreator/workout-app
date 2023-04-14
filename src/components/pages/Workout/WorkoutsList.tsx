import { Layout } from 'components/layout/Layout'

import Alert from 'components/ui/Alert/Alert'
import { Loader } from 'components/ui/Loader'

import bgImg from '/images/workout-bg.jpg'

import WorkoutListItem from './WorkoutListItem'
import { useWorkoutList } from './useWorkoutList'
import s from './workout.module.scss'

const WorkoutsList: React.FC = () => {
	const { data, error, isLoading, isSuccess, isSuccessMutate, mutate } =
		useWorkoutList()
	return (
		<>
			<Layout bgImage={bgImg} heading='Workouts list' />
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				{(error as string) && <Alert type='error' text={error as string} />}
				{isSuccessMutate && <Alert text='Workout log created' />}
				{isLoading && <Loader />}
				{isSuccess && (
					<div className={s.wrapper}>
						{data?.map(workout => (
							<WorkoutListItem
								key={workout.id}
								workout={workout}
								mutate={mutate}
							/>
						))}
					</div>
				)}

				{isSuccess && data?.length === 0 && (
					<Alert type='warning' text='Workouts not found' />
				)}
			</div>
		</>
	)
}

export default WorkoutsList
