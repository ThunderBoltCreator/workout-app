import React from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormType } from 'components/pages/Auth/Auth'

import s from './field.module.scss'

type NameAndTypeField = 'email' | 'password'
interface Field {
	label: string
	placeholder?: string
	type?: NameAndTypeField
	name: NameAndTypeField
	register: UseFormRegister<FormType>
}
export const Field: React.FC<Field> = ({
	placeholder = '',
	type,
	name,
	register,
	label
}) => {
	return (
		<div className={s.wrapper}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				{...register(name, { required: `${name} is required!` })}
				className={s.input}
			/>
		</div>
	)
}
