import cn from 'clsx'
import { Header } from 'components/layout/Header/Header'
import sLayout from 'components/layout/layout.module.scss'
import { useServerUrl } from 'hooks/useServerUrl'
import { IExerciseLog } from 'services/Exercise/exercise-log.service'

import bgImage from '/images/ex-bg-2.jpg'

import s from './exercise.module.scss'

interface IExerciseHeader {
	isSuccess: boolean
	exerciseLog: IExerciseLog
}
const ExerciseHeader: React.FC<IExerciseHeader> = ({
	isSuccess,
	exerciseLog
}) => {
	return (
		<div
			className={cn(sLayout.wrapper, sLayout.otherPage)}
			style={{ backgroundImage: `url(${bgImage})`, height: 300 }}
		>
			<Header
				backLink={
					isSuccess
						? `/workouts/${exerciseLog?.workoutLogId}`
						: '/workouts'
				}
			/>

			{isSuccess && (
				<div className={s.heading}>
					<img
						src={useServerUrl(exerciseLog?.exercise?.iconPath)}
						height='34'
						alt=''
						draggable={false}
					/>
					<h1 className={sLayout.heading}>
						{exerciseLog?.exercise?.name}
					</h1>
				</div>
			)}
		</div>
	)
}

export default ExerciseHeader
