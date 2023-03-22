import cn from 'clsx'
import React, { ReactNode } from 'react'

import { Header } from './Header/Header'
import s from './layout.module.scss'

type PropsLayout = {
	children: ReactNode
	bgImage: string
	heading?: string
	backLink?: string
}

const Layout: React.FC<PropsLayout> = ({
	children,
	bgImage,
	heading = '',
	backLink = '/'
}) => {
	return (
		<section
			className={cn(s.wrapper, {
				[s.otherPage]: !!heading
			})}
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<Header backLink={backLink} />
			{heading && <h1 className={s.heading}>{heading}</h1>}
			{children && <div>{children}</div>}
		</section>
	)
}

export { Layout }
