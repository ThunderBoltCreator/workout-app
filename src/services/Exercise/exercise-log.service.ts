import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'
import { IWorkoutLog } from 'services/Workout/workout-log.service'

import { IExercise } from './exercise.service'

export interface IExerciseBody {
	name?: string
	times?: number
	iconPath?: string
}
interface IExerciseLogService {
	getById: (
		exerciseId: number | string
	) => Promise<AxiosResponse<IExerciseLog>>
	create: (exerciseId: number | string) => Promise<AxiosResponse<IExerciseLog>>
	update: (
		exerciseId: number | string,
		body: IExerciseUpdateLogBody
	) => Promise<AxiosResponse<ITime>>
	updateComplete: (
		exerciseId: number | string,
		isCompleted: boolean
	) => Promise<AxiosResponse<any>>
}
export interface IExerciseUpdateLogBody {
	weight?: number
	repeat?: number
	isCompleted?: boolean
}
export interface ITime {
	id: number
	createdAt: string
	updatedAt: string
	weight: number
	repeat: number
	isCompleted: boolean
	exerciseLogId: number
	prevWeight?: number
	prevRepeat?: number
}
export interface IExerciseLog {
	id: number
	createdAt: string
	updatedAt: string
	isCompleted: boolean
	userId: number
	workoutLogId: number
	exerciseId: number
	exercise?: IExercise
	times?: ITime[]
	workoutLog?: IWorkoutLog
}

const pathAll = ROUTES.EXERCISES.LOGS.ALL
const pathCompleted = ROUTES.EXERCISES.LOGS.COMPLETE

export const ExerciseLogService: IExerciseLogService = {
	getById: async exerciseId => {
		return await $axios.get<IExerciseLog>(pathAll + `/${exerciseId}`)
	},
	create: async exerciseId => {
		return await $axios.post<IExerciseLog>(pathAll + `/${exerciseId}`)
	},
	update: async (exerciseId, body) => {
		return await $axios.put<ITime>(pathAll + `/${exerciseId}`, body)
	},
	updateComplete: async (exerciseId, isCompleted) => {
		return await $axios.patch<IExerciseLog>(
			pathCompleted + `/${exerciseId}`,
			isCompleted
		)
	}
}
