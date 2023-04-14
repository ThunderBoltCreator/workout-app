import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { Header } from 'components/layout/Header/Header'
import { Layout } from 'components/layout/Layout'
import sLayout from 'components/layout/layout.module.scss'
import { Fragment } from 'react'
import { useParams } from 'react-router-dom'
import { WorkoutLogService } from 'services/Workout/workout-log.service'

import Line from 'components/ui/Line/Line'
import { Loader } from 'components/ui/Loader'

import bgImage from '/images/workout-bg.jpg'

import ExerciseListItem from './ExerciseListItem'
import s from './workout.module.scss'

export const Workout: React.FC = () => {
	const { id = 0 } = useParams()
	console.log(id)

	const {
		data: workoutLog,
		error,
		isLoading,
		isSuccess
	} = useQuery(['get workout', id], () => WorkoutLogService.getById(+id), {
		select: ({ data }) => data
	})

	console.log(workoutLog?.exerciseLogs)

	return (
		<>
			<div
				className={cn(sLayout.wrapper, sLayout.otherPage)}
				style={{ backgroundImage: `url(${bgImage})`, height: 356 }}
			>
				<Header backLink='/workouts' />
				{isSuccess && (
					<div>
						{workoutLog?.minute && (
							<time className={s.time}>
								{workoutLog?.minute + ' min.'}
							</time>
						)}
						{workoutLog?.workout?.name && (
							<h1 className={sLayout.heading}>
								{workoutLog?.workout?.name}
							</h1>
						)}
					</div>
				)}
			</div>
			<div
				className='wrapper-inner-page'
				style={{ paddingLeft: 0, paddingRight: 0 }}
			>
				<div style={{ width: '90%', margin: '0 auto' }}>
					{/* {errorCompleted && <Alert type='error' text={errorCompleted} />} */}
				</div>
				{isLoading ? (
					<Loader />
				) : (
					<div className={s.wrapper}>
						{workoutLog?.exerciseLogs?.map((item, index) => (
							<Fragment key={item.id}>
								<ExerciseListItem exerciseLog={item} />
								<Line
									index={index}
									length={workoutLog.exerciseLogs.length}
								/>
							</Fragment>
						))}
					</div>
				)}
			</div>
		</>
	)
}
