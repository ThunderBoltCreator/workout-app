import { Layout } from 'components/layout/Layout'
import Cookies from 'js-cookie'
import React from 'react'
import { AuthFormType } from 'types/types'

import { Button } from 'components/ui/Button/Button'
import { Field } from 'components/ui/Field/Field'
import { Loader } from 'components/ui/Loader'

import image from '/images/auth-bg.png'

import s from './auth.module.scss'
import { useAuthPage } from './useAuthPage'

export const Auth: React.FC = () => {
	const {
		handleSubmit,
		isLoading,
		onSubmitHandler,
		register,
		setType,
		errors
	} = useAuthPage()

	return (
		<>
			<Layout heading='Sign In' bgImage={image} />
			<div className='wrapper-inner-page'>
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit(onSubmitHandler)}>
					<Field
						error={errors?.email?.message}
						label='Email'
						type='email'
						name='email'
						placeholder='Enter email'
						register={register}
					/>
					<Field
						error={errors?.password?.message}
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
