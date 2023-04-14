import axios from 'axios'
import { TOKEN } from 'consts/consts'
import { useServerUrl } from 'hooks/useServerUrl'
import Cookies from 'js-cookie'

const API_URL = useServerUrl('api')

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
