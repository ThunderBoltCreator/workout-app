import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'

export interface IExerciseBody {
	name?: string
	times?: number
	iconPath?: string
}
interface IExerciseService {
	getAll: () => Promise<AxiosResponse<IExercise[]>>
	create: (body: IExerciseBody) => Promise<AxiosResponse<IExercise>>
	update: (
		body: IExerciseBody,
		id: number
	) => Promise<AxiosResponse<IExercise>>
	delete: (id: number) => Promise<AxiosResponse<DeleteMessage>>
}
export interface IExercise {
	id: number
	createdAt: string
	updatedAt: string
	name: string
	times: number
	iconPath: string
	exerciseLogId?: number
}
type DeleteMessage = 'Exercise deleted!'

export const ExerciseService: IExerciseService = {
	getAll: async () => {
		const path = ROUTES.EXERCISES.EXERCISES
		return await $axios.get<IExercise[]>(path)
	},
	create: async body => {
		const path = ROUTES.EXERCISES.EXERCISES
		return await $axios.post<IExercise>(path, body)
	},
	update: async (body, id) => {
		const path = ROUTES.EXERCISES.EXERCISES
		return await $axios.put<IExercise>(path + `/${id}`, body)
	},
	delete: async id => {
		const path = ROUTES.EXERCISES.EXERCISES
		return await $axios.put<DeleteMessage>(path + `/${id}`)
	}
}
