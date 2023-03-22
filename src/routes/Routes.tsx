import { useAuth } from 'hooks/useAuth'
import { Route, Routes } from 'react-router-dom'

import { Auth } from 'components/pages/Auth/Auth'
import { Home } from 'components/pages/Home/Home'
import { NewWorkout } from 'components/pages/NewWorkout/NewWorkout'
import { NotFound } from 'components/pages/NotFound/NotFound'
import { Profile } from 'components/pages/Profile/Profile'

export const MyRoutes = () => {
	const { isAuth } = useAuth()

	const routes = [
		{
			path: '/',
			auth: false,
			element: <Home />
		},
		{
			path: '/auth',
			auth: false,
			element: <Auth />
		},
		{
			path: '/new-workout',
			auth: true,
			element: <NewWorkout />
		},
		{
			path: '/profile',
			auth: true,
			element: <Profile />
		},
		{
			path: '*',
			auth: false,
			element: <NotFound />
		}
	]

	const routesComponent = routes.map(({ path, element }) => (
		<Route key={path} path={path} element={element} />
	))
	return <Routes>{routesComponent}</Routes>
}
