export const useServerUrl = (path: string = '') => {
	if (path.charAt(0) !== '/') {
		return `${import.meta.env.VITE_SERVER_URL}/${path}`
	} else {
		return `${import.meta.env.VITE_SERVER_URL}${path}`
	}
}
