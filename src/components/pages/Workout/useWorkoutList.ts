import { useMutation, useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { WorkoutLogService } from 'services/Workout/workout-log.service'
import { WorkoutService } from 'services/Workout/workout.service'

export const useWorkoutList = () => {
	const { data, isSuccess } = useQuery(
		['get workouts'],
		() => WorkoutService.getAll(),
		{
			select: ({ data }) => data
		}
	)

	const nav = useNavigate()

	const {
		mutate,
		isLoading,
		error,
		isSuccess: isSuccessMutate
	} = useMutation(
		['Create new workout log'],
		(workoutId: number) => WorkoutLogService.create(workoutId),
		{
			onSuccess({ data }) {
				nav(`/workouts/${data.id}`)
			}
		}
	)

	return {
		data,
		isSuccess,
		mutate,
		isLoading,
		error,
		isSuccessMutate
	}
}
