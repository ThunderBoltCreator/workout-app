import cn from 'clsx'
import { Layout } from 'components/layout/Layout'
import React from 'react'
import { Controller } from 'react-hook-form'

import Alert from 'components/ui/Alert/Alert'
import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'
import { Loader } from 'components/ui/Loader'

import bgImg from '/images/new-exercise-bg.jpg'

import { getIconPath } from './icon-path.util'
import s from './newExercise.module.scss'
import { useNewExercisePage } from './useNewExercisePage'

export const NewExercise: React.FC = () => {
	const {
		control,
		data,
		error,
		errors,
		handleSubmit,
		isLoading,
		isSuccess,
		onSubmit,
		register
	} = useNewExercisePage()
	return (
		<>
			<Layout
				heading='Create new exercise'
				backLink='/new-workout'
				bgImage={bgImg}
			/>
			<div className='wrapper-inner-page'>
				{(error as string) && <Alert type='error' text={error as string} />}
				{isSuccess && <Alert text='Exercise created' />}
				{isLoading && <Loader />}

				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.name?.message}
						name='name'
						register={register}
						type='text'
						placeholder='Exercise name'
						options={{
							required: 'Name is required'
						}}
					/>
					<Field
						error={errors?.times?.message}
						name='times'
						register={register}
						placeholder='Enter times'
						options={{
							required: 'Times is required',
							valueAsNumber: true,
							validate: value => {
								return value > 0 || 'Times must be number'
							}
						}}
					/>
					<Controller
						name='iconPath'
						control={control}
						render={({ field: { value, onChange } }) => (
							<div className={s.images}>
								{data.map(name => (
									<img
										key={`ex img ${name}`}
										src={`${
											import.meta.env.VITE_SERVER_URL
										}${getIconPath(name)}`}
										alt={name}
										className={cn({
											[s.active]: value === getIconPath(name)
										})}
										onClick={() => onChange(getIconPath(name))}
										draggable={false}
										height='45'
									/>
								))}
							</div>
						)}
					/>
					{errors?.iconPath && (
						<div className='error'>{errors?.iconPath?.message}</div>
					)}
					<Button>Create</Button>
				</form>
			</div>
		</>
	)
}
