import React, { PropsWithChildren } from 'react'
import { Header } from './Header/Header'

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export { Layout }
