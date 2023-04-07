import cn from 'clsx'
import { PATHS, TOKEN } from 'consts/consts'
import { useAuth } from 'hooks/useAuth'
import Cookies from 'js-cookie'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MenuProps } from 'types/types'

import s from './hamburger.module.scss'
import { menu } from './menu.data'

export const Menu: React.FC<MenuProps> = ({ isShow, setShow }) => {
	const { setIsAuth } = useAuth()
	const nav = useNavigate()

	const logoutHandler = () => {
		Cookies.remove(TOKEN)

		setIsAuth(false)
		setShow(false)
		nav(PATHS.AUTH)
	}

	return (
		<nav
			className={cn(s.menu, {
				[s.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, i) => (
					<li key={`_menu_${i}`}>
						<Link to={item.link}>{item.title}</Link>
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}
