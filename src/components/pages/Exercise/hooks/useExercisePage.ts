import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import {
	ExerciseLogService,
	ITime
} from 'services/Exercise/exercise-log.service'

export interface IdParams {
	id: string
}

export const useExercisePage = () => {
	const [times, setTimes] = useState<ITime[]>([])
	const { id } = useParams<keyof IdParams>() as IdParams

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get exercise log', id],
		() => ExerciseLogService.getById(id),
		{
			select: ({ data }) => data,
			onSuccess(data) {
				if (data.times) setTimes(data.times)
			}
		}
	)

	return {
		exerciseLog,
		isSuccess,
		isLoading,
		times,
		setTimes
	}
}
