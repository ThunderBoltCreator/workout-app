import cn from 'clsx'
import { ITime } from 'services/Exercise/exercise-log.service'

import s from '../exercise.module.scss'

interface ITableBody {
	item: ITime
}
const TableBody: React.FC<ITableBody> = ({ item }) => {
	return (
		<div
			className={cn(s.row, {
				[s.completed]: item.isCompleted
			})}
			key={`time ${item.id}`}
		>
			<div className={s.opacity} key={`Prev ${item.id}/${item.prevWeight}`}>
				<input type='number' defaultValue={item.prevWeight} disabled />
				<i>kg{item.isCompleted ? '' : ' '}/</i>
				<input type='number' defaultValue={item.prevRepeat} disabled />
			</div>

			<div key={`RepeatWeight ${item.id}/${item.weight}`}>
				<input
					type='tel'
					pattern='[0-9]*'
					defaultValue={item.weight}
					disabled={item.isCompleted}
				/>
				<i>kg{item.isCompleted && ' '}/</i>
				<input
					type='number'
					defaultValue={item.repeat}
					disabled={item.isCompleted}
				/>
			</div>

			<div key={`Completed ${item.id}/${item.isCompleted}`}>
				<img
					src={
						item.isCompleted
							? '/images/exercises/check-completed.svg'
							: '/images/exercises/check.svg'
					}
					className={s.checkbox}
					alt=''
					/* onClick={() => {
			 changeState({
				 timeIndex: item.id,
				 key: 'completed',
				 value: !item.isCompleted
			 })
		 }} */
				/>
			</div>
		</div>
	)
}

export default TableBody
