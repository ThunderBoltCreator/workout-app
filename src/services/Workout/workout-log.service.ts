import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'
import { IExercise } from 'services/Exercise/exercise.service'

export interface IWorkoutResponse {
	name: string
	exerciseIds: number[]
}
interface IWorkoutLogService {
	getById: (exerciseId: number) => Promise<AxiosResponse<IWorkout>>
	create: (exerciseId: number) => Promise<AxiosResponse<IWorkout>>
	update: (exerciseId: number) => Promise<AxiosResponse<IWorkout>>
}
interface IWorkout {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	exercises?: IExercise[]
	minutes?: number
}
type DeleteMessage = 'Workout deleted successfully!'

const pathAll = ROUTES.WORKOUTS.LOGS.WORKOUTS_LOG.ALL
const pathComplete = ROUTES.WORKOUTS.LOGS.WORKOUTS_LOG.COMPLETE

export const WorkoutLogService: IWorkoutLogService = {
	getById: async exerciseId => {
		return await $axios.get<IWorkout>(pathAll + `/${exerciseId}`)
	},
	create: async exerciseId => {
		return await $axios.post<IWorkout>(pathAll + `/${exerciseId}`)
	},
	update: async exerciseId => {
		return await $axios.put<IWorkout>(pathComplete + `/${exerciseId}`)
	}
}
