import { $axios } from 'api'
import { ROUTES, TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'

import { AuthType } from '../types/types'

interface IUser {
	createdAt: string
	email: string
	id: number
	images: any // ['/images/before.jpg', '/images/after.jpg']
	name: string
	password: string
	updatedAt: string
}
interface IAuthRes {
	token: string
	user: IUser
}

export interface IAuthService {
	main: (email: string, password: string, type: AuthType) => Promise<IAuthRes>
}
const AuthService: IAuthService = {
	main: async (email, password, type) => {
		const path = ROUTES.AUTH + type
		try {
			const { data } = await $axios.post<IAuthRes>(path, {
				email,
				password
			})
			console.log('токен при авторизации', data.token)

			if (data.token) Cookies.set(TOKEN, data.token)

			console.log('response data', data)
			return data
		} catch (error: any) {
			console.error(error)
			return {} as IAuthRes
		}
	}
}

export default AuthService
