import { Layout } from 'components/layout/Layout'
import React, { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'

import image from '../../../../public/images/auth-bg.png'

export interface FormType {
	email: string
	password: string
}

export const Auth: React.FC = () => {
	const { register, handleSubmit } = useForm<FormType>()
	const onSubmitHandler = (data: FormType) => console.log(data)

	return (
		<Layout heading='Sign In' bgImage={image}>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<Field
						type='email'
						placeholder='Enter email'
						{...register('email', {
							required: 'Email is required'
						})}
					/>
					<Field
						type='password'
						placeholder='Enter password'
						register('email')
					/>
					<Button clickHandler={() => {}}>Go</Button>
					<input placeholder='Enter password' />
				</form>
			</div>
		</Layout>
	)
}
