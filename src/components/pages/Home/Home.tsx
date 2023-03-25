import { paths } from 'consts/consts'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { useNavigate } from 'react-router'

import { Button } from 'components/ui/Button/Button'
import { Statistic } from 'components/ui/Statistic/Statistic'

import image from '/images/home-bg.jpg'

import { Layout } from '../../layout/Layout'

import s from './home.module.scss'

export const Home: React.FC = () => {
	const { isAuth } = useAuth()
	const navigate = useNavigate()

	const onClickButton = () => {
		const link = isAuth ? paths.NEW_WORKOUT : paths.AUTH
		navigate(link)
	}
	return (
		<Layout bgImage={image}>
			<Button clickHandler={onClickButton}>
				{isAuth ? 'New' : 'Sign In'}
			</Button>
			<h1 className={s.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistic />
		</Layout>
	)
}
