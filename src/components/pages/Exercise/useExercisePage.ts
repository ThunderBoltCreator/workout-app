import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { ExerciseLogService } from 'services/Exercise/exercise-log.service'

interface IdParams {
	id: string
}

export const useExercisePage = () => {
	const { id } = useParams<keyof IdParams>() as IdParams

	const {
		data: exerciseLog,
		isSuccess,
		isLoading
	} = useQuery(
		['get exercise log', id],
		() => ExerciseLogService.getById(id),
		{
			select: ({ data }) => data
		}
	)

	return {
		exerciseLog,
		isSuccess,
		isLoading
	}
}
