export const PATHS = {
	HOME: '/',
	AUTH: '/auth',
	PROFILE: '/profile',
	NEW_WORKOUT: '/new-workout',
	NEW_EXERCISE: '/new-exercise',
	WORKOUTS: '/workouts',
	WORKOUT_BY_ID: '/workouts/:id',
	EXERCISE_BY_ID: '/exercises/:id',
	NOT_FOUND: '*'
}
export const TOKEN = 'peach'

export const ROUTES = {
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
			COMPLETE: '/exercises/log/complete',
			TIME: '/exercises/log/time'
		}
	}
}
