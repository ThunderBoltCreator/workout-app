import React from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormType } from 'components/pages/Auth/Auth'

import s from './field.module.scss'

interface Field {
	placeholder?: string
	type?: string
	name: 'email' | 'password'
	register: UseFormRegister<FormType>
}
export const Field: React.FC<Field> = ({
	placeholder = '',
	type = 'text',
	name,
	register,
	...rest
}) => {
	return (
		<input
			{...rest}
			{...register(name, { required: `${name} is required!` })}
			className={s.input}
		/>
	)
}
