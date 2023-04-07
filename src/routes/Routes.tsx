import { PATHS } from 'consts/consts'
import { useAuth } from 'hooks/useAuth'
import { Route, Routes } from 'react-router-dom'
import { pathObj } from 'types/types'

import { Auth } from 'components/pages/Auth/Auth'
import { Home } from 'components/pages/Home/Home'
import { NewWorkout } from 'components/pages/NewWorkout/NewWorkout'
import { NotFound } from 'components/pages/NotFound/NotFound'
import { Profile } from 'components/pages/Profile/Profile'
import { Workouts } from 'components/pages/Workouts/Workouts'

export const MyRoutes: React.FC = () => {
	const { isAuth } = useAuth()

	const routes: pathObj[] = [
		{
			path: PATHS.HOME,
			isAuth: true,
			element: <Home />
		},
		{
			path: PATHS.AUTH,
			isAuth: false,
			element: <Auth />
		},
		{
			path: PATHS.PROFILE,
			isAuth: false,
			element: <Profile />
		},
		{
			path: PATHS.NEW_WORKOUT,
			isAuth: true,
			element: <NewWorkout />
		},
		{
			path: PATHS.WORKOUTS,
			isAuth: true,
			element: <Workouts />
		},
		{
			path: PATHS.NOT_FOUND,
			isAuth: false,
			element: <NotFound />
		}
	]

	const routesComponent = routes.map(route => {
		if (route.isAuth && !isAuth) {
			return false
		}

		return (
			<Route key={route.path} path={route.path} element={route.element} />
		)
	})
	return <Routes>{routesComponent}</Routes>
}
