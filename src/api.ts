import axios from 'axios'
import { TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:5000/api'

export const $axios = axios.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN) ? `Bearer ${Cookies.get(TOKEN)}` : ''
	}
})
