import { ReactNode } from 'react'

export interface pathObj {
	path: string
	isAuth: boolean
	element: JSX.Element
}
export interface MenuProps {
	isShow: boolean
}
export type PropsLayout = {
	children: ReactNode
	bgImage?: string
	heading?: string
	backLink?: string
}
export type HeaderProps = {
	backLink: string
}
export interface menuItem {
	title: string
	link: string
}
export interface ButtonProps {
	children: string | React.ReactNode
	clickHandler: () => void
	size?: string
}
export interface StatisticType {
	title: string
	value: string
}
