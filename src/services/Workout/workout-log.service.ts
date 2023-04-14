import { $axios } from 'api'
import { AxiosResponse } from 'axios'
import { ROUTES } from 'consts/consts'
import { IExerciseLog } from 'services/Exercise/exercise-log.service'
import { IExercise } from 'services/Exercise/exercise.service'

import { IWorkout } from './workout.service'

export interface IWorkoutResponse {
	name: string
	exerciseIds: number[]
}
interface IWorkoutLogService {
	getById: (id: number) => Promise<AxiosResponse<IWorkoutLog>>
	create: (workoutId: number) => Promise<AxiosResponse<IWorkoutLog>>
	update: (id: number) => Promise<AxiosResponse<IWorkoutLog>>
}
export interface IWorkoutLog {
	id: number
	createdAt: string
	updatedAt: string
	isCompleted: boolean
	userId: number
	workoutId: number
	workout: IWorkout
	exerciseLogs: IExerciseLog[]
	minute?: number
}

const pathAll = ROUTES.WORKOUTS.LOGS.WORKOUTS_LOG.ALL
const pathComplete = ROUTES.WORKOUTS.LOGS.WORKOUTS_LOG.COMPLETE

export const WorkoutLogService: IWorkoutLogService = {
	getById: async id => {
		return await $axios.get<IWorkoutLog>(pathAll + `/${id}`)
	},
	create: async workoutId => {
		return await $axios.post<IWorkoutLog>(pathAll + `/${workoutId}`)
	},
	update: async id => {
		return await $axios.put<IWorkoutLog>(pathComplete + `/${id}`)
	}
}
