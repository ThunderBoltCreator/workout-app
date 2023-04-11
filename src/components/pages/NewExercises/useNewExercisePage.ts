import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import {
	ExerciseService,
	IExerciseBody
} from 'services/Exercise/exercise.service'
import { IExerciseForm } from 'types/types'

export const useNewExercisePage = () => {
	const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm<IExerciseForm>({
		mode: 'onBlur'
	})

	const { mutate, isLoading, isSuccess, error } = useMutation(
		['create exercise'],
		(body: IExerciseBody) => ExerciseService.create(body),
		{
			onSuccess: () => {
				reset()
			}
		}
	)

	const onSubmit = (formData: IExerciseBody) => {
		console.log(formData)

		mutate(formData)
	}
	return {
		data,
		register,
		handleSubmit,
		control,
		isLoading,
		isSuccess,
		error,
		errors,
		onSubmit
	}
}
