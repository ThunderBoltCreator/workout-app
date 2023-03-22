import { useAuth } from 'hooks/useAuth'
import React from 'react'
import { IoMdArrowBack } from 'react-icons/io'

import { Hamburger } from '../Hamburger/Hamburger'

import s from './header.module.scss'

type HeaderProps = {
	backLink: string
}

const Header: React.FC<HeaderProps> = ({ backLink }) => {
	const { isAuth } = useAuth()
	return (
		<div className={s.header}>
			<button onClick={() => {}}>
				<IoMdArrowBack />
			</button>
			<Hamburger />
		</div>
	)
}

export { Header }
