import { useMutation } from '@tanstack/react-query'
import { Layout } from 'components/layout/Layout'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	ExerciseService,
	IExerciseBody
} from 'services/Exercise/exercise.service'

import Alert from 'components/ui/Alert/Alert'
import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'
import { Loader } from 'components/ui/Loader'

import s from './newExercise.module.scss'

export const NewExercise: React.FC = () => {
	const data = ['chest', 'shoulders', 'biceps', 'legs', 'hit', 'back']

	const {
		register,
		reset,
		handleSubmit,
		control,
		formState: { errors }
	} = useForm({
		mode: 'onBlur'
	})

	const { mutate, isLoading, isSuccess, error } = useMutation(
		['create exercise'],
		(body: IExerciseBody) => ExerciseService.create(body),
		{
			onSuccess: () => reset()
		}
	)

	const submitHandler = (data: IExerciseBody) => {
		mutate(data)
	}
	return (
		<>
			<Layout />
			<div className='wrapper-inner-page'>
				{(error as string) && <Alert type='error' text={error as string} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}
				<form onSubmit={() => handleSubmit(submitHandler)}>
					<Field
						name='name'
						register={register}
						type='text'
						placeholder='name'
					/>
				</form>
			</div>
		</>
	)
}
