import { useAuth } from 'hooks/useAuth'
import { FiArrowLeft } from 'react-icons/fi'
import { Hamburger } from '../Hamburger/Hamburger'

import s from './header.module.scss'

const Header = () => {
	const { isAuth } = useAuth()
	return (
		<div className={s.header}>
			<button onClick={() => {}}>
				<FiArrowLeft />
			</button>
			<Hamburger />
		</div>
	)
}

export { Header }
