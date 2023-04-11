import { Layout } from 'components/layout/Layout'
import { PATHS } from 'consts/consts'
import React from 'react'
import { Link } from 'react-router-dom'

import Alert from 'components/ui/Alert/Alert'
import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'
import { Loader } from 'components/ui/Loader'

import bgImg from '/images/new-workout-bg.jpg'

import { SelectExercises } from './SelectExercises'
import { useNewWorkout } from './useNewWorkout'

export const NewWorkout: React.FC = () => {
	const {
		control,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewWorkout()
	return (
		<>
			<Layout heading='Create new workout' bgImage={bgImg} />
			<div className='wrapper-inner-page'>
				{(error as string) && <Alert type='error' text={error as string} />}
				{isSuccess && <Alert text='Workout created successfully' />}
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						type='text'
						placeholder='Workout name'
						options={{
							required: 'Name is required'
						}}
					/>
					<Link to={PATHS.NEW_EXERCISE} className='dark-link'>
						Add new exercise
					</Link>
					<SelectExercises control={control} />
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}
