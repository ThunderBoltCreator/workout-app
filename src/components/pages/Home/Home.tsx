import { Statistic } from 'components/Statistic/Statistic'
import { PATHS } from 'consts/consts'
import { useAuth } from 'hooks/useAuth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

import { Button } from 'components/ui/Button/Button'

import image from '/images/home-bg.jpg'

import { Layout } from '../../layout/Layout'

import s from './home.module.scss'

export const Home: React.FC = () => {
	const nav = useNavigate()

	return (
		<Layout bgImage={image}>
			<Button clickHandler={() => nav(PATHS.NEW_WORKOUT)}>New</Button>
			<h1 className={s.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistic />
		</Layout>
	)
}
