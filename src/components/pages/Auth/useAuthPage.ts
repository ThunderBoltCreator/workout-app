import { useMutation } from '@tanstack/react-query'
import { useAuth } from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from 'services/auth.service'
import { AuthFormType, AuthType } from 'types/types'

export const useAuthPage = () => {
	const [type, setType] = useState<AuthType>('login')

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<AuthFormType>({
		mode: 'onBlur'
	})

	const { isAuth, setIsAuth } = useAuth()
	const nav = useNavigate()

	useEffect(() => {
		if (isAuth) {
			nav('/')
		}
	}, [isAuth])

	const { isLoading, mutate } = useMutation(
		['auth'],
		({ email, password }: AuthFormType) =>
			AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				reset()
			}
		}
	)

	const onSubmitHandler = (data: AuthFormType) => {
		mutate(data)
	}

	return {
		setType,
		register,
		handleSubmit,
		isLoading,
		onSubmitHandler,
		errors
	}
}
