import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'
import { IExercise } from 'services/Exercise/exercise.service'

export interface IWorkoutResponse {
	name: string
	exerciseIds: number[]
}
interface IWorkoutService {
	getAll: () => Promise<AxiosResponse<IWorkout[]>>
	getById: () => Promise<AxiosResponse<IWorkout>>
	create: (body: IWorkoutResponse) => Promise<AxiosResponse<IWorkout>>
	update: (body: IWorkoutResponse, id: number) => Promise<AxiosResponse<IWorkout>>
	delete: (id: number) => Promise<AxiosResponse<DeleteMessage>>
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

export const WorkoutService: IWorkoutService = {
	getAll: async () => {
		const path = ROUTES.WORKOUTS.WORKOUTS
		return await $axios.get<IWorkout[]>(path)
	},
	getById: async () => {
		const path = ROUTES.WORKOUTS.WORKOUTS
		return await $axios.get<IWorkout>(path)
	},
	create: async body => {
		const path = ROUTES.WORKOUTS.WORKOUTS
		return await $axios.post<IWorkout>(path, body)
	},
	update: async (body, id) => {
		const path = ROUTES.WORKOUTS.WORKOUTS
		return await $axios.put<IWorkout>(path + `/${id}`, body)
	},
	delete: async id => {
		const path = ROUTES.WORKOUTS.WORKOUTS
		return await $axios.put<DeleteMessage>(path + `/${id}`)
	}
}
