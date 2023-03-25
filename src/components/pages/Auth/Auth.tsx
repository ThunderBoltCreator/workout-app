import { Layout } from 'components/layout/Layout'
import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'

import image from '/images/auth-bg.png'

export interface FormType {
	email: string
	password: string
}

export const Auth: React.FC = () => {
	const { register, handleSubmit, reset } = useForm<FormType>({
		mode: 'onBlur'
	})
	const onSubmitHandler = (data: FormType) => {
		console.log(data)
		reset()
	}

	return (
		<Layout heading='Sign In' bgImage={image}>
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<Field
						type='email'
						name='email'
						placeholder='Enter email'
						register={register}
					/>
					<Field
						type='password'
						name='password'
						placeholder='Enter password'
						register={register}
					/>
					<Button clickHandler={() => {}}>Go</Button>
				</form>
			</div>
		</Layout>
	)
}
