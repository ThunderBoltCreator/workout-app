import axios from 'axios'
import { TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'

export const $axios = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN)
			? `Bearer ${Cookies.get(TOKEN)}`
			: ''
	}
})
