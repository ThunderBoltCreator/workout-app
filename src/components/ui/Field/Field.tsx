import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import { FormType } from 'types/types'

import s from './field.module.scss'

interface IField {
	label: string
	placeholder?: string
	type?: string
	name: string
	register: UseFormRegister<FieldValues>
	error?: string
}
export function Field(props: IField) {
	const { label, name, register, error, placeholder, type } = props
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
			{error && <div className='error'>{error}</div>}
		</div>
	)
}
