import { $axios } from 'api'
import { TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'

import { AuthType } from '../types/types'

export interface IAuthService {
	main: (email: string, password: string, type: AuthType) => any
}
const AuthService: IAuthService = {
	main: async (email, password, type) => {
		try {
			const { data } = await $axios.post(`/users/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set('peach', data.token)

			return data
		} catch (error) {
			console.error(error)
		}
	}
}

export default AuthService
