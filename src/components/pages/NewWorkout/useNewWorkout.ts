import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import {
	IWorkoutResponse,
	WorkoutService
} from 'services/Workout/workout.service'

export const useNewWorkout = () => {
	interface IWorkoutForm {
		name: string
		exerciseIds: ExerciseId[]
	}
	interface ExerciseId {
		value: number
		label: string
	}
	interface IFormData {
		name: string
		exerciseIds: ExerciseId[]
	}

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<IWorkoutForm>({
		mode: 'onBlur'
	})

	const { mutate, isLoading, isSuccess, error } = useMutation(
		['create workout'],
		(body: IWorkoutResponse) => WorkoutService.create(body),
		{
			onSuccess: () => {
				reset({
					exerciseIds: [],
					name: ''
				})
			}
		}
	)

	const onSubmit = (formData: IFormData) => {
		console.log(formData)
		mutate({
			name: formData.name,
			exerciseIds: formData.exerciseIds.map(item => item.value)
		})
	}

	return {
		register,
		handleSubmit,
		control,
		errors,
		isLoading,
		isSuccess,
		error,
		onSubmit
	}
}
