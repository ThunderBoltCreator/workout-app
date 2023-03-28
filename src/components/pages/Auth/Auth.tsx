import { useMutation } from '@tanstack/react-query'
import { MutationFunction } from '@tanstack/react-query'
import { Layout } from 'components/layout/Layout'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import AuthService from 'services/auth.service'
import { AuthType, FormType } from 'types/types'

import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'
import { Loader } from 'components/ui/Loader'

import image from '/images/auth-bg.png'

import s from './auth.module.scss'

export const Auth: React.FC = () => {
	const [type, setType] = useState<AuthType>('login')

	const { register, handleSubmit, reset } = useForm<FormType>({
		mode: 'onBlur'
	})

	const { isLoading, mutate } = useMutation(
		['auth'],
		(email: string, password: string) => {
			AuthService.main(email, password, type)
		},
		{
			onSuccess: data => {
				alert('success')
			}
		}
	)

	const onSubmitHandler = (data: FormType) => {
		const eData = { email: data.email, password: data.password }
		mutate(eData)
		reset()
	}

	return (
		<>
			<Layout heading='Sign In' bgImage={image} />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<Field
						label='Email'
						type='email'
						name='email'
						placeholder='Enter email'
						register={register}
					/>
					<Field
						label='Password'
						type='password'
						name='password'
						placeholder='Enter password'
						register={register}
					/>
					<div className={s.wrapperButtons}>
						<Button
							clickHandler={() => {
								setType('login')
							}}
						>
							Sign in
						</Button>
						<Button
							clickHandler={() => {
								setType('register')
							}}
						>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
