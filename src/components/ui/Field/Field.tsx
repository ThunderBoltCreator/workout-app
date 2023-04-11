import { RegisterOptions, UseFormRegister } from 'react-hook-form'

import s from './field.module.scss'

interface IField {
	label?: string
	placeholder?: string
	type?: string
	name: any
	register: UseFormRegister<any>
	error?: string
	options?: RegisterOptions
}

export function Field(props: IField) {
	const { label, name, register, error, placeholder, type, options } = props
	return (
		<div className={s.wrapper}>
			<label className={s.label} htmlFor={name}>
				{label}
			</label>
			<input
				placeholder={placeholder}
				type={type}
				{...register(name, options)}
				className={s.input}
			/>
			{error && <div className='error'>{error}</div>}
		</div>
	)
}
