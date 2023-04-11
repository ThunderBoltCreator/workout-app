import React from 'react'
import { Control, Controller } from 'react-hook-form'
import ReactSelect from 'react-select'

import { useListExercises } from './useListExercises'

interface ISelect {
	control: any
}
export const SelectExercises: React.FC<ISelect> = ({ control }) => {
	const { data = [], isLoading } = useListExercises()

	if (isLoading) return null

	return (
		<Controller
			name='exerciseIds'
			control={control}
			render={({ field: { value, onChange } }) => (
				<ReactSelect
					isMulti
					classNamePrefix='select2-selection'
					placeholder='Exercises...'
					name='exercises'
					options={data.map(exercise => ({
						value: exercise.id,
						label: exercise.name
					}))}
					value={value}
					onChange={onChange}
				/>
			)}
		/>
	)
}
