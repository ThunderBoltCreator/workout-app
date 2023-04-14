import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES, TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'

interface IStatistic {
	label: string
	value: number
}

export interface IProfile {
	id: number
	createdAt: string
	email: string
	images: string[]
	updatedAt: string
	name: string
	statistics: IStatistic[]
}

export interface IUserService {
	getProfile: () => Promise<AxiosResponse<IProfile>>
}

const UserService: IUserService = {
	getProfile: async () => {
		try {
			const path = ROUTES.USER.PROFILE
			return await $axios.get<IProfile>(path)
		} catch (error: any) {
			console.error(error)
			return {} as Promise<AxiosResponse<IProfile>>
		}
	}
}

export default UserService
