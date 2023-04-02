import { TOKEN } from 'consts/consts'
import Cookies from 'js-cookie'
import {
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	createContext,
	useEffect,
	useState
} from 'react'
import { useLocation } from 'react-router-dom'

export interface IAuthContext {
	isAuth: boolean
	setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContext | null>(null)

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [isAuth, setIsAuth] = useState(!!Cookies.get(TOKEN))

	const { pathname } = useLocation()

	useEffect(() => {
		const token = Cookies.get(TOKEN)
		if (token) setIsAuth(false)
	}, [pathname, isAuth])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			{children}
		</AuthContext.Provider>
	)
}

export default AuthProvider
