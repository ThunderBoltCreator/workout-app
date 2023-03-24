import cn from 'clsx'
import React from 'react'
import { ButtonProps } from 'types/types'

import s from './button.module.scss'

export const Button: React.FC<ButtonProps> = ({
	children,
	clickHandler,
	size = 'xl'
}) => {
	return (
		<div className={s.wrapper}>
			<button onClick={clickHandler} className={cn(s.button, s[size])}>
				{children}
			</button>
		</div>
	)
}
