import React from 'react'
import cn from 'clsx'
import { menu } from './menu.data'
import { Link } from 'react-router-dom'

import s from './hamburger.module.scss'

interface MenuProps {
	isShow: boolean
}

export const Menu: React.FC<MenuProps> = ({ isShow }) => {
	const logoutHandler = () => {}

	return (
		<nav
			className={cn(s.menu, {
				[s.show]: isShow
			})}
		>
			<ul>
				{menu.map((item, i) => (
					<li key={`_menu_${i}`}>
						{/* <Link to={item.link}>{item.title}</Link> */}
					</li>
				))}
				<li>
					<button onClick={logoutHandler}>Logout</button>
				</li>
			</ul>
		</nav>
	)
}