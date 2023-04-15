import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import {
	ExerciseLogService,
	IExerciseUpdateLogBody
} from 'services/Exercise/exercise-log.service'

import { IdParams } from './useExercisePage'

interface IMutateParams {
	timeId: string | number
	body: IExerciseUpdateLogBody
}
export const useUpdateTime = () => {
	const { id } = useParams<keyof IdParams>() as IdParams

	const queryClient = useQueryClient()
	const { mutate, error } = useMutation(
		['update log time', id],
		({ timeId, body }: IMutateParams) =>
			ExerciseLogService.update(timeId, body),
		{
			onSuccess: () =>
				queryClient.invalidateQueries(['get exercise log', id])
		}
	)

	return {
		updateTime: mutate,
		errorChange: error
	}
}
