import { paths } from 'consts/consts'
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
	console.log(pathname)

	return (
		<div className={s.header}>
			{pathname !== '/' ? (
				<button onClick={() => navigate(backLink)}>
					<IoMdArrowBack />
				</button>
			) : (
				<button onClick={() => navigate(paths.PROFILE)}>
					<SlUser />
				</button>
			)}
			<Hamburger />
		</div>
	)
}

export { Header }
