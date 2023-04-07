import { PATHS } from 'consts/consts'
import { menuItem } from 'types/types'

export const menu: menuItem[] = [
	{
		title: 'Workouts',
		link: PATHS.WORKOUTS
	},
	{
		title: 'Create new',
		link: PATHS.NEW_WORKOUT
	},
	{
		title: 'Profile',
		link: PATHS.PROFILE
	}
]
