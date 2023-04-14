import { IExerciseLog } from 'services/Exercise/exercise-log.service'

import s from '../exercise.module.scss'

import TableBody from './TableBody'
import TableHeader from './TableHeader'

interface ITable {
	exerciseLog: IExerciseLog
}
const Table: React.FC<ITable> = ({ exerciseLog }) => {
	const renderRow = () =>
		exerciseLog.times?.map(item => <TableBody key={item.id} item={item} />)

	return (
		<div className={s.wrapper}>
			<TableHeader />
			{renderRow()}
		</div>
	)
}

export default Table
