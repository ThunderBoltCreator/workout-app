import { paths } from 'consts/consts'
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
			path: paths.HOME,
			isAuth: false,
			element: <Home />
		},
		{
			path: paths.AUTH,
			isAuth: false,
			element: <Auth />
		},
		{
			path: paths.PROFILE,
			isAuth: false,
			element: <Profile />
		},
		{
			path: paths.NEW_WORKOUT,
			isAuth: true,
			element: <NewWorkout />
		},
		{
			path: paths.WORKOUTS,
			isAuth: true,
			element: <Workouts />
		},
		{
			path: paths.NOT_FOUND,
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
