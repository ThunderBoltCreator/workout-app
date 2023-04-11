export const PATHS = {
	HOME: '/',
	AUTH: '/auth',
	PROFILE: '/profile',
	NEW_WORKOUT: '/new-workout',
	NEW_EXERCISE: '/new-exercise',
	WORKOUTS: '/workouts',
	NOT_FOUND: '*'
}
export const TOKEN = 'peach'

export const ROUTES = {
	// AUTH: {
	// 	LOGIN: '/auth/login',
	// 	REGISTER: '/auth/register'
	// },
	AUTH: '/auth/',

	USER: {
		PROFILE: '/users/profile'
	},

	WORKOUTS: {
		WORKOUTS: '/workouts',
		LOGS: {
			WORKOUTS_LOG: {
				ALL: '/workouts/log',
				COMPLETE: '/workouts/log/complete'
			}
		}
	},

	EXERCISES: {
		EXERCISES: '/exercises',
		LOGS: {
			ALL: '/exercises/log',
			COMPLETE: '/exercises/log/complete'
		}
	}
}
