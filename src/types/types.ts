import { Dispatch, ReactNode, SetStateAction } from 'react'

export interface pathObj {
	path: string
	isAuth: boolean
	element: JSX.Element
}
export interface MenuProps {
	isShow: boolean
	setShow: Dispatch<SetStateAction<boolean>>
}
export type PropsLayout = {
	children?: ReactNode
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
	children?: string | React.ReactNode
	clickHandler?: () => void
	size?: string
}
export interface StatisticType {
	title: string
	value: string
}

export interface FormType {
	email: string
	password: string
}
export type AuthType = 'login' | 'register'
// export type FieldRegister
