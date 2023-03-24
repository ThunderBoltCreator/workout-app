import { paths } from 'consts/consts'
import { menuItem } from 'types/types'

export const menu: menuItem[] = [
	{
		title: 'Workouts',
		link: paths.WORKOUTS
	},
	{
		title: 'Create new',
		link: paths.NEW_WORKOUT
	},
	{
		title: 'Profile',
		link: paths.PROFILE
	}
]
