import { Layout } from 'components/layout/Layout'
import { useAuth } from 'hooks/useAuth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const NotFound: React.FC = () => {
	const nav = useNavigate()
	const { isAuth } = useAuth()

	useEffect(() => {
		if (!isAuth) nav('/auth')
	}, [])
	return <Layout heading='Page Not Found' children={undefined} />
}
