import React, { forwardRef, PropsWithoutRef } from 'react'
import { UseFormRegister } from 'react-hook-form'

import { FormType } from 'components/pages/Auth/Auth'

import s from './field.module.scss'

interface Field extends PropsWithoutRef<JSX.IntrinsicElements['input']> {
	placeholder: string
	type: string
	name: 'email' | 'password'
	register: UseFormRegister<FormType>
}
export const Field = forwardRef<HTMLInputElement, >({ placeholder, type, name, register, ...rest }) => {
	return <input {...register(name)} {...rest} className={s.input} />
}
