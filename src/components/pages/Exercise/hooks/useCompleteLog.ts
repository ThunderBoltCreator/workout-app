import { useMutation } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import { ExerciseLogService } from 'services/Exercise/exercise-log.service'

import { IdParams } from './useExercisePage'

export const useCompleteLog = () => {
	const { id } = useParams<keyof IdParams>() as IdParams
	const nav = useNavigate()
	const { mutate, error } = useMutation(
		['complete exercise log', id],
		(isCompleted: boolean) =>
			ExerciseLogService.updateComplete(id, isCompleted),
		{
			onSuccess: ({ data }) => nav(`/workouts/${data.workoutLogId}`)
		}
	)

	return {
		completeLog: mutate,
		errorCompleted: error
	}
}
