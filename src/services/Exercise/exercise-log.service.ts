import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'

export interface IExerciseBody {
	name?: string
	times?: number
	iconPath?: string
}
interface IExerciseLogService {
	getById: (exerciseId: number) => Promise<AxiosResponse<IExercise[]>>
	create: (exerciseId: number) => Promise<AxiosResponse<IExercise>>
	update: (exerciseId: number) => Promise<AxiosResponse<IExercise>>
	updateComplete: (exerciseId: number) => Promise<AxiosResponse<any>>
}
export interface IExerciseLog {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	times: number
	iconPath: string
	exerciseLogId?: number
}
interface ITimes {}
const pathAll = ROUTES.EXERCISES.LOGS.ALL
const pathCompleted = ROUTES.EXERCISES.LOGS.COMPLETE

export const ExerciseLogService: IExerciseLogService = {
	getById: async exerciseId => {
		return await $axios.get<IExerciseLog>(pathAll + `/${exerciseId}`)
	},
	create: async exerciseId => {
		return await $axios.post<IExercise>(pathAll + `/${exerciseId}`)
	},
	update: async exerciseId => {
		return await $axios.put<IExercise>(pathAll + `/${exerciseId}`)
	},
	updateComplete: async exerciseId => {
		return await $axios.put<any>(pathCompleted + `/${exerciseId}`)
	}
}
