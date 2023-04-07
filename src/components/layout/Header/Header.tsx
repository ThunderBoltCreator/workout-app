import { PATHS } from 'consts/consts'
import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { useLocation, useNavigate } from 'react-router'
import { HeaderProps } from 'types/types'

import { Hamburger } from '../Hamburger/Hamburger'

import s from './header.module.scss'

const Header: React.FC<HeaderProps> = ({ backLink = '' }) => {
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	// if (!isAuth) return null

	return (
		<header className={s.header}>
			{pathname !== '/auth' &&
				(pathname !== '/' || !isAuth ? (
					<button onClick={() => navigate(isAuth ? backLink : PATHS.AUTH)}>
						<IoMdArrowBack />
					</button>
				) : (
					<button onClick={() => navigate(PATHS.PROFILE)}>
						<SlUser />
					</button>
				))}
			{isAuth && <Hamburger />}
		</header>
	)
}

export { Header }
