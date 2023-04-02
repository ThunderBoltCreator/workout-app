import { useMutation } from '@tanstack/react-query'
import { useAuth } from 'hooks/useAuth'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import AuthService from 'services/auth.service'
import { AuthType, FormType } from 'types/types'

export const useAuthPage = () => {
	const [type, setType] = useState<AuthType>('login')

	const { register, handleSubmit, reset } = useForm<FormType>({
		mode: 'onBlur'
	})

	const auth = useAuth()
	const nav = useNavigate()

	useEffect(() => {
		if (auth?.isAuth) {
			nav('/')
		}
	}, [])

	const { isLoading, mutate } = useMutation(
		['auth'],
		({ email, password }: FormType) =>
			AuthService.main(email, password, type),
		{
			onSuccess: () => {
				auth?.setIsAuth(true)
				reset()
			}
		}
	)

	const onSubmitHandler = (data: FormType) => {
		mutate(data)
	}

	return { setType, register, handleSubmit, isLoading, onSubmitHandler }
}
